import React from "react";
import Header from "../components/Header";
import AddAnnouncements from "../components/AddAnnouncements";
import Announcements from "../components/Announcements";

const announcements = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-24">
      <Header title="Announcements" color="bg-acm-blue" />
      <AddAnnouncements />
      <Announcements />
    </div>
  );
};

export default announcements;
