import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";

const Application = ({ id, name, major, year, email, response }) => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    console.log("accept");
    axios.post("/api/verifyApplication", { id, name, major, year });
    axios.post("/api/deleteApplication", { id });
    setVisible(false);
  };

  const handleReject = () => {
    console.log("reject");
    axios.post("/api/deleteApplication", { id });
    setVisible(false);
  };

  return (
    visible && (
      <div className="flex justify-center items-center font-lexend text-lg bg-acm-lightgray my-2 rounded text-black">
        <div className="my-2 w-1/6 text-center">{name}</div>
        <div className="my-2 w-1/6 text-center">{email}</div>
        <div className="my-2 w-1/6 text-center">{major}</div>
        <div className="my-2 w-1/6 text-center">{year}</div>
        <div className="my-2 w-1/6 text-center">{response}</div>
        <div className="my-2 w-1/6 flex justify-evenly text-xl items-center">
          <FaCheck
            className="hover:text-green-500 hover:cursor-pointer"
            onClick={handleAccept}
          />
          <FaTimes
            className="hover:text-red-500 hover:cursor-pointer"
            onClick={handleReject}
          />
        </div>
      </div>
    )
  );
};

export default Application;
