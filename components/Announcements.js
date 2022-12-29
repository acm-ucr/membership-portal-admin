import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("/api/getAllAnnouncements")
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-11/12">
      <Row className="flex justify-start items-center">
        {announcements.map((announcement, index) => (
          <Col
            key={index}
            onClick={() => {
              setData(resource);
              setVisible(true);
              setOperation("view");
            }}
            className={`bg-acm-blue m-2 hover:cursor-pointer whitespace-nowrap no-underline text-white font-lexend text-2xl px-6 py-2 rounded flex justify-center items-center flex-col text-center hover:scale-105`}
          >
            <p className="m-0">{announcement.title}</p>
            <p className="text-lg m-0">
              {new Date(
                announcement.data.time.seconds * 1000
              ).toLocaleDateString()}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Announcements;
