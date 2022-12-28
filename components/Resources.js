import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Resource from "./Resource";
import { FaPlus } from "react-icons/fa";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [operation, setOperation] = useState("view");

  useEffect(() => {
    axios
      .get("/api/getAllResources")
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-11/12">
      <button
        onClick={() => {
          setVisible(true);
          setOperation("add");
          setData({});
        }}
        className="flex justify-center items-center"
      >
        Add Resource <FaPlus />
      </button>
      {visible && (
        <Resource ops={operation} resource={data} setVisible={setVisible} />
      )}

      <Row className="flex justify-start items-center">
        {resources.map((resource, index) => (
          <Col
            key={index}
            onClick={() => {
              setData(resource);
              setVisible(true);
              setOperation("view");
            }}
            className={`bg-acm-blue m-2 hover:cursor-pointer whitespace-nowrap no-underline text-white font-lexend text-2xl px-6 py-2 rounded flex justify-center items-center flex-col text-center hover:scale-105`}
          >
            <p className="m-0">{resource.title}</p>
            <p className="text-lg m-0">
              {new Date(resource.data.time.seconds * 1000).toLocaleDateString()}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resources;
