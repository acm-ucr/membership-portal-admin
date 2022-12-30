import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Announcement = ({ announcement, setVisible, ops }) => {
  const [operation, setOperation] = useState(ops);
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    eventDay: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleChange = (event) => {
    if (event.target.name == "eventType") {
      console.log(event.target.value);
    }
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <div className="fixed inset-0 bg-acm-white opacity-50 w-full h-full"></div>
      <div className="absolute inset-x-0 top-20 w-full">
        <div className="flex justify-center isolation-auto">
          <form
            className="bg-acm-lightgray rounded-3xl w-1/2 flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between">
              {operation == "add" && (
                <p className="font-lexend bg-acm-black text-acm-white rounded-full m-3 text-2xl py-3 px-4 font-bold">
                  add announcement
                </p>
              )}
              {operation == "view" && (
                <p className="font-lexend bg-acm-black text-acm-white rounded-full m-3 text-2xl py-3 px-4 font-bold">
                  view announcement
                </p>
              )}
              {operation == "edit" && (
                <p className="font-lexend bg-acm-black text-acm-white rounded-full m-3 text-2xl py-3 px-4 font-bold">
                  edit announcement
                </p>
              )}

              <button>
                <FaTimes
                  onClick={() => {
                    setVisible(false);
                  }}
                  className="text-3xl text-acm-black m-4 hover:text-acm-red hover:cursor-pointer"
                />
              </button>
            </div>
            <div className="ml-4 mb-4 mr-3">
              <label
                htmlFor="eventName"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event name
              </label>
              <input
                name="eventName"
                type="name"
                id="name"
                value={announcement.title}
                placeholder={announcement.title}
                disabled={operation === "view"}
                className="m-1 w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                onChange={handleChange}
              />
              <label
                htmlFor="eventType"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event type
              </label>

              <div className="ml-3 flex items-center">
                <div className="dark:bg-acm-white rounded-full w-3 h-3 flex flex-shrink-1 justify-center items-center relative">
                  <input
                    id="eventType"
                    type="radio"
                    value="generalMeeting"
                    placeholder={formData.eventType}
                    disabled={operation === "view"}
                    name="eventType"
                    className="checked:appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-acm-lightpurple focus:outline-none flex rounded-full absolute cursor-pointer w-full h-full"
                    onChange={handleChange}
                  />
                  <div className=" border-4 border-acm-lightpurple rounded-full w-full h-full"></div>
                </div>
                <label
                  htmlFor="generalMeeting"
                  className="font-lexend text-acm-black text-lg font-light ml-3 mt-1 mb-1"
                >
                  general meeting
                </label>
              </div>
              <div className="ml-3 flex items-center">
                <div className="dark:bg-acm-white rounded-full w-3 h-3 flex flex-shrink-1 justify-center items-center relative">
                  <input
                    id="eventType"
                    type="radio"
                    value="social"
                    name="eventType"
                    disabled={operation === "view"}
                    className="checked:appearance-none focus:opacity-100 focus:ring-2 focus:rounded-full focus:ring-offset-2 focus:ring-acm-green focus:outline-none flex rounded-full absolute cursor-pointer w-full h-full"
                    onChange={handleChange}
                  />
                  <div className="border-4 border-acm-green rounded-full w-full h-full"></div>
                </div>
                <label
                  htmlFor="social"
                  className="font-lexend text-acm-black text-lg font-light ml-3 mt-1 mb-1"
                >
                  social
                </label>
              </div>
              <div className="ml-3 flex items-center">
                <div className="dark:bg-acm-white rounded-full w-3 h-3 flex flex-shrink-1 justify-center items-center relative">
                  <input
                    id="eventType"
                    type="radio"
                    value="workshop"
                    name="eventType"
                    disabled={operation === "view"}
                    className="checked:appearance-none focus:opacity-100 focus:ring-2 focus:rounded-full focus:ring-offset-2 focus:ring-acm-yellow focus:outline-none flex rounded-full absolute cursor-pointer w-full h-full"
                    onChange={handleChange}
                  />
                  <div className="border-4 border-acm-yellow rounded-full w-full h-full"></div>
                </div>
                <label
                  htmlFor="workshop"
                  className="font-lexend text-acm-black text-lg font-light ml-3 mt-1 mb-1"
                >
                  workshop
                </label>
              </div>
              <div className="ml-3 flex items-center">
                <div className="dark:bg-acm-white rounded-full w-3 h-3 flex flex-shrink-1 justify-center items-center relative">
                  <input
                    id="eventType"
                    type="radio"
                    value="project"
                    name="eventType"
                    disabled={operation === "view"}
                    className="checked:appearance-none focus:opacity-100 focus:ring-2 focus:rounded-full focus:ring-offset-2 focus:ring-acm-purple focus:outline-none flex rounded-full absolute cursor-pointer w-full h-full"
                    onChange={handleChange}
                  />
                  <div className="border-4 border-acm-purple rounded-full w-full h-full"></div>
                </div>
                <label
                  htmlFor="project"
                  className="font-lexend text-acm-black text-lg font-light ml-3 mt-1 mb-1"
                >
                  project
                </label>
              </div>
              <div className="ml-3 flex items-center">
                <div className="dark:bg-acm-white rounded-full w-3 h-3 flex flex-shrink-1 justify-center items-center relative">
                  <input
                    id="eventType"
                    type="radio"
                    value="acmEvent"
                    name="eventType"
                    disabled={operation === "view"}
                    className="checked:appearance-none focus:opacity-100 focus:ring-2 focus:rounded-full focus:ring-offset-2 focus:ring-acm-blue focus:outline-none flex rounded-full absolute cursor-pointer w-full h-full"
                    onChange={handleChange}
                  />
                  <div className="border-4 border-acm-blue rounded-full w-full h-full"></div>
                </div>
                <label
                  htmlFor="acmEvent"
                  className="font-lexend text-acm-black text-lg font-light ml-3 mt-1 mb-1"
                >
                  acm event
                </label>
              </div>
              <div className="ml-3 flex items-center">
                <div className="dark:bg-acm-white rounded-full w-3 h-3 flex flex-shrink-1 justify-center items-center relative">
                  <input
                    id="eventType"
                    type="radio"
                    value="fundraiser"
                    name="eventType"
                    disabled={operation === "view"}
                    className="checked:appearance-none focus:opacity-100 focus:ring-2 focus:rounded-full focus:ring-offset-2 focus:ring-acm-orange focus:outline-none flex rounded-full absolute cursor-pointer w-full h-full"
                    onChange={handleChange}
                  />
                  <div className="border-4 border-acm-orange rounded-full w-full h-full"></div>
                </div>
                <label
                  htmlFor="fundraiser"
                  className="font-lexend text-acm-black text-lg font-light ml-3 mt-1 mb-1"
                >
                  fundraiser
                </label>
              </div>

              <label
                htmlFor="eventDate"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event date
              </label>
              <input
                name="eventDate"
                type="eventDate"
                id="eventDate"
                placeholder=""
                value={formData.eventDate}
                disabled={operation === "view"}
                className="m-1 w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                onChange={handleChange}
              />
              <label
                htmlFor="eventDay"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event day
              </label>
              <input
                name="eventDay"
                type="day"
                id="eventDay"
                value={formData.eventDay}
                disabled={operation === "view"}
                className="m-1 w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                placeholder=""
                onChange={handleChange}
              />
              <label
                htmlFor="eventTime"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event time
              </label>
              <input
                name="eventTime"
                type="eventTime"
                id="eventTime"
                value={formData.eventTime}
                disabled={operation === "view"}
                className="m-1 w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                placeholder=""
                onChange={handleChange}
              />
              <label
                htmlFor="eventLocation"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event location
              </label>
              <input
                name="eventLocation"
                type="location"
                id="eventLocation"
                value={formData.eventLocation}
                disabled={operation === "view"}
                className="m-1 w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                placeholder=""
                onChange={handleChange}
              />
              {operation === "add" && (
                <div className="w-full flex justify-end">
                  <button className="bg-acm-black text-acm-white text-xl font-semibold font-lexend px-12 py-1 mt-3 rounded-full ">
                    submit
                  </button>
                </div>
              )}
              {operation === "view" && (
                <div className="w-full flex justify-end">
                  <button
                    onClick={() => {
                      setFormData({
                        ...announcement.data,
                        eventName: announcement.eventName,
                      });
                      setOperation("edit");
                    }}
                    className="bg-acm-black text-acm-white text-xl font-semibold font-lexend px-12 py-1 mt-3 rounded-full"
                  >
                    edit
                  </button>
                </div>
              )}
              {operation === "edit" && (
                <div className="w-full flex justify-end">
                  <button className="bg-acm-black text-acm-white text-xl font-semibold font-lexend px-12 py-1 mt-3 rounded-full ">
                    save
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Announcement;
