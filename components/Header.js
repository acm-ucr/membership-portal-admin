import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className={`w-11/12 p-2 font-lexend font-semibold rounded-3 text-2xl bg-acm-white text-acm-black`}
    >
      {title}
    </div>
  );
};
export default Header;
