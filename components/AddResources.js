import React, { useState } from "react";
import AddResource from "./AddResource";
import { FaPlus } from "react-icons/fa";

const AddResources = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-start w-11/12">
      <button
        onClick={() => setVisible(true)}
        className="flex justify-center items-center"
      >
        Add Resource <FaPlus />
      </button>
      {visible && <AddResource setVisible={setVisible} />}
    </div>
  );
};

export default AddResources;
