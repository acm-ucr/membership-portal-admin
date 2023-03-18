import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
const getTimeString = (date) => {
  const dateList = date.toLocaleDateString().split("/");
  if (dateList[1].length != 2) dateList[1] = "0" + dateList[1];
  if (dateList[0].length != 2) dateList[0] = "0" + dateList[0];
  return dateList[2] + "-" + dateList[0] + "-" + dateList[1];
};
const Resource = ({ ops, resource, setVisible, handleHover }) => {
  const [message, setMessage] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [operation, setOperation] = useState(ops);
  const [data, setData] = useState({
    id: resource ? resource.id : "",
    title: resource ? resource.data.title : "",
    slides: resource ? resource.data.slides : "",
    youtube: resource ? resource.data.youtube : "",
    github: resource ? resource.data.github : "",
    time: resource
      ? getTimeString(new Date(resource.data.time.seconds * 1000))
      : "",
  });
  console.log(data);
  const handleTyping = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title == "") {
      setMessage("Please fill the title");
      snackBar();
      return;
    }

    const result = {
      id: data.id,
      title: data.title,
      time: new Date(data.time).getTime() / 1000 + 86400,
      github: data.github,
      youtube: data.youtube,
      slides: data.slides,
    };
    console.log(result);
    if (ops == "add") {
      axios
        .post("/api/addResources", { result })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("/api/updateResources", { result })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setOperation("view");
  };

  const snackBar = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
    }, 3000);
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
            <div className="flex justify-between items-center">
              <p className="text-acm-white rounded-full font-lexend font-medium m-0 px-4 py-2 text-2xl bg-acm-black">
                {operation} resource
              </p>
              <FaTimes
                className="text-3xl hover:text-acm-red hover:cursor-pointer"
                onClick={() => {
                  setVisible(false);
                  handleHover(false);
                }}
              />
            </div>
            <div>
              <p>event title:</p>
              <input
                placeholder={data.title}
                disabled={operation === "view"}
                className="w-full rounded px-2 py-1"
                value={data.title}
                name="title"
                onChange={handleTyping}
              />
              <p>slides link:</p>
              <input
                placeholder={
                  resource?.data?.slides === undefined
                    ? "No Link"
                    : resource.data.slides
                }
                disabled={operation === "view"}
                value={data.slides}
                name="slides"
                onChange={handleTyping}
                className="w-full rounded px-2 py-1"
              />
              <p>event recording link:</p>
              <input
                placeholder={
                  resource?.data?.youtube === undefined
                    ? "No Link"
                    : resource.data.youtube
                }
                disabled={operation === "view"}
                value={data.youtube}
                name="youtube"
                onChange={handleTyping}
                className="w-full rounded px-2 py-1"
              />
              <p>event github link:</p>
              <input
                placeholder={
                  resource?.data?.github === undefined
                    ? "No Link"
                    : resource.data.github
                }
                disabled={operation === "view"}
                value={data.github}
                name="github"
                onChange={handleTyping}
                className="w-full rounded px-2 py-1"
              />
              <p>event date:</p>
              <div className="flex">
                <input
                  name="time"
                  type="date"
                  id="date"
                  value={data.time}
                  disabled={operation === "view"}
                  className="m-1 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                  placeholder=""
                  onChange={handleTyping}
                />
              </div>
            </div>
            {operation === "add" && (
              <button className="bg-acm-black text-acm-white px-4 py-2 rounded-full font-lexend">
                add
              </button>
            )}
            {operation === "view" && (
              <button
                onClick={() => {
                  setOperation("edit");
                }}
                className="bg-acm-black text-acm-white px-4 py-2 rounded-full font-lexend"
              >
                edit
              </button>
            )}
            {operation === "edit" && (
              <button className="bg-acm-black text-acm-white px-4 py-2 rounded-full font-lexend">
                save
              </button>
            )}
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

export default Resource;
