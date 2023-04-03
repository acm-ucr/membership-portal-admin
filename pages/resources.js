import React from "react";
import Header from "../components/Header";
import Resources from "../components/Resources";

const resources = () => {
  return (
    <div className="flex justify-start items-center flex-col pt-24 bg-black min-h-screen">
      <Header title="Resources" color="bg-acm-blue" />
      <Resources />
    </div>
  );
};

export default resources;
