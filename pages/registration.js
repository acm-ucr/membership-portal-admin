import React, { useEffect, useState } from "react";
import axios from "axios";
import Application from "../components/Application";

const RegistrationPage = () => {
  const [applications, setApplications] = useState();

  useEffect(() => {
    axios
      .post("/api/getApplications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="pt-20 flex justify-start items-center flex-col bg-black">
      <div className="w-11/12 flex justify-center items-center font-lexend text-lg bg-acm-lightgray my-2 rounded text-black font-semibold">
        <div className="my-2 w-1/6 text-center">Name</div>
        <div className="my-2 w-1/6 text-center">Email</div>
        <div className="my-2 w-1/6 text-center">Major</div>
        <div className="my-2 w-1/6 text-center">Year</div>
        <div className="my-2 w-1/6 text-center">Response</div>
        <div className="my-2 w-1/6 text-center">Actions</div>
      </div>
      <div className="w-11/12">
        {applications &&
          applications.map((application, index) => (
            <Application
              key={index}
              id={application.id}
              name={application.data.name}
              major={application.data.major}
              year={application.data.year}
              email={application.data.email}
              response={application.data.response}
            />
          ))}
      </div>
    </div>
  );
};

export default RegistrationPage;
