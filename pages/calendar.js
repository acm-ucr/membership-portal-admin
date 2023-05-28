import React from "react";
import Header from "../components/Header";
import Calendar from "../components/Calendar";

const calendar = () => {
  return (
    <div className="flex justify-start items-center flex-col w-full mt-24 bg-black min-h-screen">
      <Header title="Calendar" color="bg-acm-black" />
      <Calendar />
    </div>
  );
};

export default calendar;
