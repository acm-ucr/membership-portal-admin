import React, { useState } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import axios from "axios";

const getTimeString = (date) => {
  const dateList = date.toLocaleDateString().split("/");
  if (dateList[1].length != 2) dateList[1] = "0" + dateList[1];
  if (dateList[0].length != 2) dateList[0] = "0" + dateList[0];
  return dateList[2] + "-" + dateList[0] + "-" + dateList[1];
};

const Resource = ({
  ops,
  resource,
  setVisible,
  handleHover,
  resources,
  setResources,
}) => {
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
          setResources([
            ...resources,
            {
              data: {
                ...result,
                time: {
                  seconds: new Date(result.time).getTime() / 1000 + 86400,
                },
              },
              id: result.id,
            },
          ]);
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

  const deleteResource = () => {
    setVisible(false);
    axios.post("/api/deleteResource", { id: resource.id });

    setResources(resources.filter((a) => a.id !== resource.id));
  };

  return (
    <div className="absolute text-acm-black inset-x-0 top-20 w-full">
      <div className="flex justify-center isolation-auto">
        <form
          className="bg-acm-lightgray rounded-3xl w-1/2 flex flex-col mt-10 p-3"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center">
            <p className="text-acm-white rounded-full font-lexend font-medium mb-2 px-4 py-2 text-2xl bg-acm-black">
              {operation.charAt(0).toUpperCase() +
                operation.replace(operation.charAt(0), "")}{" "}
              Resource
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
            <p className="mb-0 font-lexend text-xl font-semibold m-1">Title:</p>
            <input
              placeholder={data.title}
              disabled={operation === "view"}
              className={`my-1 block rounded font-lexend text-lg px-2 py-1 w-full focus:ring-2 focus:ring-black focus:outline-none placeholder:text-acm-black ${
                operation === "view" ? "bg-acm-lightgray" : "bg-white"
              }`}
              value={data.title}
              name="title"
              onChange={handleTyping}
            />

            <p className="mb-0 font-lexend text-xl font-semibold m-1">Date:</p>
            <input
              name="time"
              type="date"
              value={data.time}
              disabled={operation === "view"}
              className={`my-1 block rounded font-lexend text-lg px-2 py-1 w-full focus:ring-2 focus:ring-black focus:outline-none placeholder:text-acm-black ${
                operation === "view" ? "bg-acm-lightgray" : "bg-white"
              }`}
              placeholder=""
              onChange={handleTyping}
            />

            <p className="mb-0 font-lexend text-xl font-semibold m-1">
              Slides:
            </p>
            <input
              placeholder={
                resource?.data?.slides === undefined ||
                resource?.data?.slides === ""
                  ? "No Link"
                  : resource.data.slides
              }
              disabled={operation === "view"}
              value={data.slides}
              name="slides"
              onChange={handleTyping}
              className={`my-1 block rounded font-lexend text-lg px-2 py-1 w-full focus:ring-2 focus:ring-black focus:outline-none placeholder:text-acm-black ${
                operation === "view" ? "bg-acm-lightgray" : "bg-white"
              }`}
            />

            <p className="mb-0 font-lexend text-xl font-semibold m-1">
              Youtube:
            </p>
            <input
              placeholder={
                resource?.data?.youtube === undefined ||
                resource?.data?.youtube === ""
                  ? "No Link"
                  : resource.data.youtube
              }
              disabled={operation === "view"}
              value={data.youtube}
              name="youtube"
              onChange={handleTyping}
              className={`my-1 block rounded font-lexend text-lg px-2 py-1 w-full focus:ring-2 focus:ring-black focus:outline-none placeholder:text-acm-black ${
                operation === "view" ? "bg-acm-lightgray" : "bg-white"
              }`}
            />

            <p className="mb-0 font-lexend text-xl font-semibold m-1">
              Github:
            </p>
            <input
              placeholder={
                resource?.data?.github === undefined ||
                resource?.data?.github === ""
                  ? "No Link"
                  : resource.data.github
              }
              disabled={operation === "view"}
              value={data.github}
              name="github"
              onChange={handleTyping}
              className={`my-1 block rounded font-lexend text-lg px-2 py-1 w-full focus:ring-2 focus:ring-black focus:outline-none placeholder:text-acm-black ${
                operation === "view" ? "bg-acm-lightgray" : "bg-white"
              }`}
            />
          </div>
          {operation === "add" && (
            <button className="px-4 py-2 rounded-full font-lexend text-xl mt-2 border-2 border-black text-black hover:bg-black hover:!text-white">
              add
            </button>
          )}
          {operation === "view" && (
            <button
              onClick={() => {
                setOperation("edit");
              }}
              className="px-4 py-2 rounded-full font-lexend text-xl mt-2 border-2 border-black text-black hover:bg-black hover:!text-white"
            >
              edit
            </button>
          )}
          {operation === "edit" && (
            <div className="flex justify-center items-end flex-col">
              <button
                onClick={deleteResource}
                className="flex justify-center items-center w-fit font-lexend font-semibold my-2 border-red-500 border-4 text-red-500 px-3 py-2 rounded hover:bg-red-500 hover:text-white"
              >
                <FaTrash className="mr-2" />
                Delete
              </button>
              <button className="px-4 py-2 rounded-full font-lexend text-xl mt-2 border-2 border-black text-black hover:bg-black hover:!text-white w-full">
                save
              </button>
            </div>
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
  );
};

export default Resource;
