import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Resource = ({ ops, resource, setVisible }) => {
  const [operation, setOperation] = useState(ops);
  const [data, setData] = useState({
    title: "",
    slides: "",
    youtube: "",
    github: "",
    time: "",
  });

  const handleTyping = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-1/2 bg-acm-lightgray p-2 rounded-2xl">
      <div className="flex justify-between items-center">
        <p className="text-acm-white rounded-full font-lexend font-medium m-0 px-4 py-2 text-2xl bg-acm-black">
          {operation} resource
        </p>
        <FaTimes
          className="text-3xl hover:text-acm-red hover:cursor-pointer"
          onClick={() => setVisible(false)}
        />
      </div>
      <div>
        <p>event title:</p>
        <input
          placeholder={resource.title}
          disabled={operation === "view"}
          className="w-full rounded px-2 py-1"
          value={data.title}
          name="title"
          onChange={handleTyping}
        />
        <p>slides link:</p>
        <input
          placeholder={
            resource.data?.slides === undefined
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
            resource.data?.youtube === undefined
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
            resource.data?.github === undefined
              ? "No Link"
              : resource.data.github
          }
          disabled={operation === "view"}
          value={data.github}
          name="github"
          onChange={handleTyping}
          className="w-full rounded px-2 py-1"
        />
        <p>event time:</p>
        <input
          placeholder={
            resource.data?.time === undefined
              ? "No Time"
              : new Date(
                  resource.data?.time.seconds * 1000
                ).toLocaleDateString()
          }
          disabled={operation === "view"}
          value={data.time}
          name="time"
          onChange={handleTyping}
          className="w-full rounded px-2 py-1"
        />
      </div>
      {operation === "add" && (
        <button
          onClick={() => console.log(data)}
          className="bg-acm-black text-acm-white px-4 py-2 rounded-full font-lexend"
        >
          add
        </button>
      )}
      {operation === "view" && (
        <button
          onClick={() => {
            setOperation("edit");
            setData({
              ...resource.data,
              title: resource.title,
              time: new Date(
                resource.data.time.seconds * 1000
              ).toLocaleDateString(),
            });
          }}
          className="bg-acm-black text-acm-white px-4 py-2 rounded-full font-lexend"
        >
          edit
        </button>
      )}
      {operation === "edit" && (
        <button
          onClick={() => console.log(data)}
          className="bg-acm-black text-acm-white px-4 py-2 rounded-full font-lexend"
        >
          save
        </button>
      )}
    </div>
  );
};

export default Resource;
