import React from "react";
import Header from "../components/Header";
import Checkin from "../components/Checkin";

const checkin = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full mt-24">
      <Header title="Checkin" color="bg-acm-black" />
      <Checkin />
    </div>
  );
};

export default checkin;
