import { useState, useContext } from "react";
import PortalContext from "./PortalContext.js";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.js";
import CustomEvent from "./CustomEvent.js";
import Modal from "./Modal.js";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const { events } = useContext(PortalContext);
  console.log("events: Calendar Page", events);
  const [modalEvent, setModalEvent] = useState(null);

  return (
    <div className="mb-2 h-[90vh] w-11/12">
      <Calendar
        className="font-lexend text-acm-white m-0 p-0"
        events={events}
        localizer={mLocalizer}
        defaultView="month"
        views={["month"]}
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
        }}
        eventPropGetter={(event) => {
          return { className: `${event.color}` };
        }}
        dayPropGetter={(event) => {
          const bg =
            new Date(event).toLocaleDateString() ==
            new Date().toLocaleDateString()
              ? "!bg-acm-green"
              : "!bg-acm-black";
          return {
            className: `${bg}`,
            style: {
              margin: 0,
              padding: 0,
            },
          };
        }}
        onSelectEvent={(event) => {
          setModalEvent(event);
        }}
      />
      <Modal event={modalEvent} setState={setModalEvent} />
    </div>
  );
};

export default CalendarEvents;
