import React from "react";
import Header from "../components/Header";
import Checkin from "../components/Checkin";

const checkin = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Header title="Checkin" color="bg-acm-blue" />
      <Checkin />
    </div>
  );
};

export default checkin;
