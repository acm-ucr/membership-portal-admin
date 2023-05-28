/* eslint-disable new-cap */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Lexend, Athiti } from "@next/font/google";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import PortalContext from "../components/PortalContext";

// const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
// const athiti = Athiti({
//   subsets: ["latin"],
//   variable: "--font-athiti",
//   weight: ["200", "300", "400", "500", "600", "700"],
// });

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const colorMappings = {
    social: "!bg-acm-red",
    career: "!bg-acm-lightpurple",
    general: "!bg-acm-blue",
    technical: "!bg-acm-orange",
    academic: "!bg-acm-marine",
  };

  const colorMappingsText = {
    social: "text-acm-red",
    career: "text-acm-lightpurple",
    general: "text-acm-blue",
    technical: "text-acm-orange",
    academic: "text-acm-marine",
  };

  const colorMappingsBorder = {
    social: "border-acm-red",
    career: "border-acm-lightpurple",
    general: "border-acm-blue",
    technical: "border-acm-orange",
    academic: "border-acm-marine",
  };

  useEffect(() => {
    axios
      .get("/api/getAllResources")
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
      )
      .then((response) => {
        const calendarEvents = response.data.items
          .filter((a) => {
            a.start = new Date(a.start.dateTime);
            a.end = new Date(a.end.dateTime);

            a.color =
              colorMappings[
                `${a.description.split(" ")[0].toLowerCase().replace(":", "")}`
              ];

            a.textColor =
              colorMappingsText[
                `${a.description.split(" ")[0].toLowerCase().replace(":", "")}`
              ];

            a.border =
              colorMappingsBorder[
                `${a.description.split(" ")[0].toLowerCase().replace(":", "")}`
              ];

            return (
              a.description.startsWith("General:") ||
              a.description.startsWith("Technical:") ||
              a.description.startsWith("Social:") ||
              a.description.startsWith("Career:") ||
              a.description.startsWith("Academic:")
            );
          })
          .sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
          });
        setEvents(calendarEvents);

        const futureEvents = calendarEvents.filter(
          (event) => event.start > new Date()
        );
        setAnnouncements(futureEvents.slice(0, 5));
      })
      .catch((error) => {
        console.log(error);
      });
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        axios
          .post("/api/getInfo", { uid: currentUser.uid })
          .then((response) => {
            const data = response.data.data;
            const date = new Date(data.start.seconds * 1000);
            data.start = date.getFullYear();
            setUser({
              ...response.data.data,
              name: currentUser.displayName,
              uid: currentUser.uid,
              email: currentUser.email,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

  return (
    <PortalContext.Provider
      value={{
        resources,
        setResources,
        user,
        setUser,
        events,
        setEvents,
        announcements,
        setAnnouncements,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortalContext.Provider>
  );
}
