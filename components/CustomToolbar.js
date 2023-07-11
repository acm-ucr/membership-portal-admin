import Filter from "./Filter.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filters from "./Filters.js";

const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center">
      <Row className=" w-full">
        <Col
          xs={4}
          className=" w-full flex justify-start items-center text-3xl font-lexend font-bold p-3"
        >
          <FaArrowLeft
            onClick={() => event.onNavigate("PREV")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
          <div className="text-center text-5xl p-1">
            {event.date.getMonth() + 1 < 10
              ? `0${event.date.getMonth() + 1}`
              : event.date.getMonth() + 1}
            /{event.date.getFullYear() % 100}
          </div>
          <FaArrowRight
            onClick={() => event.onNavigate("NEXT")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
        </Col>
        <Col xs={8} className=" w-full flex justify-end items-center m-0 p-0">
          <Row className="w-full  m-0 p-0 flex justify-end items-center ">
            {Filters.map((filter, index) => (
              <Col key={index} xs={5} sm={5} lg={2} className="p-1">
                <Filter topic={filter.topic} color={filter.color} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CustomToolbar;
