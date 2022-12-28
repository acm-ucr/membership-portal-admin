import Link from "next/link";
import React from "react";

const QuickAction = ({ action }) => {
  return (
    <Link
      href={action.link}
      className={`${action.color} w-full no-underline text-white font-lexend text-2xl px-6 py-2 rounded flex justify-center items-center hover:scale-105`}
    >
      {action.title}
      {action.icon}
    </Link>
  );
};

export default QuickAction;
