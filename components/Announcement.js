import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

const Announcement = ({ announcement, setVisible, ops }) => {
  const [message, setMessage] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [operation, setOperation] = useState(ops);
  const [formData, setFormData] = useState({
    eventid: announcement ? announcement.id : "",
    eventName: announcement ? announcement.title : "Event Name",
    eventType: announcement ? announcement.type : "",
    eventWeekDay: announcement
      ? new Date(announcement.time.seconds * 1000).toString().substring(0, 3)
      : "",
    eventYear: announcement
      ? new Date(announcement.time.seconds * 1000).getFullYear()
      : "2022",
    eventMonth: announcement
      ? new Date(announcement.time.seconds * 1000).getMonth() + 1
      : "1",
    eventDay: announcement
      ? new Date(announcement.time.seconds * 1000)
          .toLocaleDateString()
          .split("/")[1]
      : "1",
    eventHour: announcement
      ? new Date(announcement.time.seconds * 1000)
          .toLocaleTimeString()
          .split(":")[0]
      : "12",
    eventMinute: announcement
      ? new Date(announcement.time.seconds * 1000)
          .toLocaleTimeString()
          .split(":")[1]
      : "00",
    eventAP: announcement
      ? new Date(announcement.time.seconds * 1000)
          .toLocaleTimeString()
          .split(":")[2]
          .substring(3, 5)
      : "PM",
    eventTime: announcement
      ? new Date(announcement.time.seconds * 1000).toLocaleTimeString()
      : "",
    eventLocation: announcement ? announcement.location : "",
    eventDetails: announcement ? announcement.details : "",
  });
  const snackBar = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
    }, 3000);
  };
  const handleSubmit = (event) => {
    // event.preventDefault();

    if (
      formData.eventName === "" ||
      formData.eventAP === "" ||
      formData.eventDetails === "" ||
      formData.eventLocation === "" ||
      formData.eventType === ""
    ) {
      setMessage("Please fill all the fields");
      snackBar();
      return;
    }
    if (
      parseInt(formData.eventMonth) > 12 ||
      parseInt(formData.eventMonth) < 1
    ) {
      setMessage("Invalid Month");
      snackBar();
      return;
    }
    if (parseInt(formData.eventDay) > 31 || parseInt(formData.eventDay) < 1) {
      setMessage("Invalid Day");
      snackBar();
      return;
    }
    if (
      parseInt(formData.eventHour) > 12 ||
      parseInt(formData.eventHour) < 1 ||
      parseInt(formData.eventMinute) > 59 ||
      parseInt(formData.eventMinute) < 0
    ) {
      setMessage("Invalid Time");
      snackBar();
      return;
    }
    if (formData.eventHour.length < 2) {
      formData.eventHour = "0" + formData.eventHour;
    }
    if (formData.eventMinute.length < 2) {
      formData.eventMinute = "0" + formData.eventMinute;
    }
    const result = {
      id: formData.eventid,
      details: formData.eventDetails,
      location: formData.eventLocation,
      title: formData.eventName,
      time:
        formData.eventAP == "PM"
          ? new Date(
              formData.eventYear,
              formData.eventMonth - 1,
              formData.eventDay,
              parseInt(formData.eventHour) + 12,
              formData.eventMinute,
              "00"
            ).getTime() / 1000
          : new Date(
              formData.eventYear,
              formData.eventMonth - 1,
              formData.eventDay,
              formData.eventHour,
              formData.eventMinute,
              "00"
            ).getTime() / 1000,
      type: formData.eventType,
    };
    if (ops == "add") {
      axios
        .post("/api/addAnnouncement", { result })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("/api/updateAnnouncment", { result })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setOperation("view");
  };

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
    if (
      event.target.name === "eventYear" ||
      event.target.name === "eventMonth" ||
      event.target.name === "eventDay"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        eventWeekDay: new Date(
          formData.eventYear +
            "-" +
            formData.eventMonth +
            "-" +
            formData.eventDay
        )
          .toString()
          .substring(0, 3),
      }));
    }
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
                type="eventName"
                id="eventName"
                value={formData.eventName}
                placeholder={formData.eventName}
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
              {operation === "view" ? (
                <p className="m-1 w-1/6 bg-[#DDDDDD] rounded-lg font-lexend text-acm-black text-lg font-light px-2 pt-0 pb-0 ">
                  {formData.eventType}
                </p>
              ) : (
                <Dropdown className="">
                  <Dropdown.Toggle
                    id="eventType"
                    className="m-1 min:w-1/6 bg-white rounded-lg font-lexend !text-acm-black text-lg font-light px-2 pt-1 pb-1 ring-0 outline-0 border-0"
                  >
                    {formData.eventType}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="">
                    <Dropdown.Item
                      onClick={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          eventType: "general",
                        }));
                      }}
                    >
                      general meeting
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          eventType: "social",
                        }));
                      }}
                    >
                      social
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          eventType: "workshop",
                        }));
                      }}
                    >
                      workshop
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          eventType: "project",
                        }));
                      }}
                    >
                      project
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          eventType: "acm event",
                        }));
                      }}
                    >
                      acm event
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          eventType: "fundraiser",
                        }));
                      }}
                    >
                      fundraiser
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              <label
                htmlFor="eventDate"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event date
              </label>
              <div className="flex">
                <input
                  name="eventYear"
                  id="eventYear"
                  value={formData.eventYear}
                  placeholder={formData.eventYear}
                  disabled={operation === "view"}
                  maxLength={4}
                  className="m-1 w-1/6 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                  onChange={handleChange}
                />

                <input
                  name="eventMonth"
                  type="eventMonth"
                  id="eventMonth"
                  value={formData.eventMonth}
                  placeholder={formData.eventMonth}
                  disabled={operation === "view"}
                  maxLength={2}
                  className="m-1 w-1/6 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                  onChange={handleChange}
                />

                <input
                  name="eventDay"
                  type="eventDay"
                  id="eventDay"
                  value={formData.eventDay}
                  placeholder={formData.eventDay}
                  disabled={operation === "view"}
                  maxLength={2}
                  className="m-1 w-1/6 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                  onChange={handleChange}
                />
                <input
                  name="eventWeekDay"
                  type="eventWeekDay"
                  id="eventWeekDay"
                  value={formData.eventWeekDay}
                  disabled={true}
                  className="m-1 w-1/6 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>

              <label
                htmlFor="eventTime"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event time
              </label>
              <div className="flex">
                <input
                  name="eventHour"
                  type="eventHour"
                  id="eventHour"
                  value={formData.eventHour}
                  disabled={operation === "view"}
                  className="m-1 w-1/6 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                  placeholder=""
                  onChange={handleChange}
                />
                <input
                  name="eventMinute"
                  type="eventMinute"
                  id="eventMinute"
                  value={formData.eventMinute}
                  disabled={operation === "view"}
                  className="m-1 w-1/6 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                  placeholder=""
                  onChange={handleChange}
                />
                {operation === "view" ? (
                  <p className="m-1 w-1/6 bg-[#DDDDDD] rounded-lg font-lexend text-acm-black text-lg font-light px-2 pt-0 pb-0 ">
                    {formData.eventAP}
                  </p>
                ) : (
                  <Dropdown className="">
                    <Dropdown.Toggle
                      id="eventAP"
                      className="m-1 min:w-1/6 bg-white rounded-lg font-lexend !text-acm-black text-lg font-light px-2 pt-1 pb-1 ring-0 outline-0 border-0"
                    >
                      {formData.eventAP}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="">
                      <Dropdown.Item
                        onClick={() => {
                          setFormData((prevData) => ({
                            ...prevData,
                            eventAP: "AM",
                          }));
                        }}
                      >
                        AM
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setFormData((prevData) => ({
                            ...prevData,
                            eventAP: "PM",
                          }));
                        }}
                      >
                        PM
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
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
              <label
                htmlFor="eventDetails"
                className="font-lexend text-acm-black text-lg font-medium m-1"
              >
                event details
              </label>
              <textarea
                name="eventDetails"
                type="text"
                id="eventDetails"
                value={formData.eventDetails}
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
                  <button>
                    <AiFillDelete
                      onClick={() => {
                        setVisible(false);
                      }}
                      className="text-4xl text-acm-black hover:text-acm-red hover:cursor-pointer "
                    />
                  </button>
                  <button className="bg-acm-red text-acm-white text-xl font-semibold font-lexend px-12 py-1 mt-3 rounded-full">
                    save
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <div
          className={`${
            !showSnackBar ? "hidden" : "visible"
          } z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2`}
        >
          {message}
        </div>
      </div>
    </>
  );
};

export default Announcement;
