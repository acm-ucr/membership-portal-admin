import axios from "axios";
import React, { useEffect, useState, useContext, createContext } from "react";
import { Col, Row } from "react-bootstrap";
import Resource from "./Resource";
import { FaPlus } from "react-icons/fa";
import ResourceTile from "./ResourceTile";

const ResourceChangedContext = createContext();

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [operation, setOperation] = useState("view");
  const [hoverState, handleHover] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const resourceChange = useContext(ResourceChangedContext);

  const resourceChanged = () => {
    setIsDataFetched(false);
    localStorage.removeItem("LocalResources");
  };

  useEffect(() => {
    const storedResources = JSON.parse(localStorage.getItem("LocalResources"));

    if (storedResources && !isDataFetched) {
      setResources(storedResources);
      setIsDataFetched(true);
    } else if (!isDataFetched) {
      axios
        .get("/api/getAllResources")
        .then((response) => {
          setIsDataFetched(true);
          setResources(response.data);
          localStorage.setItem("LocalResources", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isDataFetched]);

  return (
    <ResourceChangedContext.Provider value={resourceChange}>
      <div className="w-11/12">
        <div className="w-full flex justify-end mt-2">
          <button
            onClick={() => {
              setVisible(true);
              setOperation("add");
              setData(null);
              handleHover(handleHover);
            }}
            className="flex justify-center items-center text-black bg-white rounded px-3 py-2"
          >
            <FaPlus className="mr-2" />
            Add Resource
          </button>
        </div>
        {visible && (
          <Resource
            resources={resources}
            setResources={setResources}
            ops={operation}
            resource={data}
            setVisible={setVisible}
            handleHover={handleHover}
            resourceChanged={resourceChanged}
          />
        )}

        <Row className="flex justify-start items-center">
          {resources.map((resource, index) => (
            <Col
              key={index}
              xl={2}
              onClick={() => {
                setData(resource);
                setVisible(true);
                setOperation("view");
                handleHover(!hoverState);
              }}
              className={
                hoverState
                  ? `bg-acm-white m-2 hover:cursor-pointer whitespace-nowrap no-underline text-black font-lexend text-2xl px-6 py-2 rounded flex justify-center items-center flex-col text-center hover:none`
                  : `bg-acm-white m-2 hover:cursor-pointer whitespace-nowrap no-underline text-black font-lexend text-2xl px-6 py-2 rounded flex justify-center items-center flex-col text-center hover:scale-105`
              }
            >
              <ResourceTile
                title={resource.data.title}
                date={new Date(
                  resource.data.time.seconds * 1000
                ).toLocaleDateString()}
                documentLink={resource.data.slides}
                youtubeLink={resource.data.youtube}
                githubLink={resource.data.github}
              />
            </Col>
          ))}
        </Row>
      </div>
    </ResourceChangedContext.Provider>
  );
};

export default Resources;
// export { ResourcesContext }
