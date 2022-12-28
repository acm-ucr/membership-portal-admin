import React, { useState } from "react";
import AddAnnouncement from "./AddAnnouncement";
import { FaPlus } from "react-icons/fa";

const AddAnnouncements = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-start w-11/12">
      <button
        onClick={() => setVisible(true)}
        className="flex justify-center items-center"
      >
        Add Announcement <FaPlus />
      </button>
      {visible && <AddAnnouncement setVisible={setVisible} />}
    </div>
  );
};

export default AddAnnouncements;
