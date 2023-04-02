import React from "react";

const ResourceTile = ({ title, date }) => {
  return (
    <div>
      <p className="m-0">{title}</p>
      <p className="m-0">{date}</p>
    </div>
  );
};

export default ResourceTile;
