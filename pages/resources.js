import React from "react";
import Header from "../components/Header";
import AddResources from "../components/AddResources";
import Resources from "../components/Resources";

const resources = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header title="Resources" color="bg-acm-blue" />
      <AddResources />
      <Resources />
    </div>
  );
};

export default resources;
