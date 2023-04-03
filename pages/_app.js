/* eslint-disable new-cap */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Lexend, Athiti } from "@next/font/google";
import Layout from "../components/Layout";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const athiti = Athiti({
  subsets: ["latin"],
  variable: "--font-athiti",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={`${lexend.variable} ${athiti.variable} `}>
      <Component {...pageProps} />
    </Layout>
  );
}
