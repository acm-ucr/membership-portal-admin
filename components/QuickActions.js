import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import QuickAction from "./QuickAction";
import { FaExternalLinkAlt } from "react-icons/fa";

const actions = [
  {
    title: "Checkin",
    link: "/checkin",
    color: "bg-acm-blue",
    icon: <FaExternalLinkAlt className="ml-3" />,
    size: 2,
  },
  {
    title: "Resources",
    link: "/resources",
    color: "bg-acm-blue",
    icon: <FaExternalLinkAlt className="ml-3" />,
    size: 2,
  },
  {
    title: "Resumes",
    link: "/resumes",
    color: "bg-acm-blue",
    icon: <FaExternalLinkAlt className="ml-3" />,
    size: 2,
  },
  {
    title: "Interviews",
    link: "/interviews",
    color: "bg-acm-blue",
    icon: <FaExternalLinkAlt className="ml-3" />,
    size: 2,
  },
];

const QuickActions = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header title="Quick Actions" color="bg-acm-blue" />
      <Row className="w-11/12">
        {actions.map((action, index) => (
          <Col
            key={index}
            xl={action.size}
            className="m-2 p-0 flex justify-center items-stretch w-full"
          >
            <QuickAction action={action} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuickActions;
