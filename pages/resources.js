import React from "react";
import Header from "../components/Header";
import Resources from "../components/Resources";

const resources = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header title="Resources" color="bg-acm-blue" />
      <Resources />
    </div>
  );
};

export default resources;
