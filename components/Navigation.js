import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-lexend w-full px-3 m-0 min-h-[10vh] bg-acm-black flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="flex flex-row items-center p-0 m-0">
        <Link href="/" className="no-underline">
          <div className="flex items-center justify-center">
            <Image
              src="/acm-ucr-logo.png"
              alt="ACM at UCR"
              width={50}
              height={50}
            />
            <div className="hidden lg:block">
              <p className="m-0 font-lexend font-medium text-2xl cursor-pointer text-white">
                Admin Portal
              </p>
            </div>
          </div>
        </Link>
      </Navbar.Brand>

      <>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse
          id="navbar-nav"
          className="flex justify-center md:justify-end items-center"
        >
          <Nav className="text-2xl mx-2 flex justify-center items-center">
            <Link href="/calendar" className="no-underline">
              <p className=" mb-0 text-acm-white font-medium hover:!text-acm-blue">
                Calendar
              </p>
            </Link>
          </Nav>
          <Nav className="text-2xl mx-2 flex justify-center items-center">
            <Link href="/resumes" className="no-underline">
              <p className=" mb-0 text-acm-white font-medium hover:!text-acm-blue">
                Resume
              </p>
            </Link>
          </Nav>
          <Nav className="text-2xl mx-2 flex justify-center items-center">
            <Link href="/lockers" className="no-underline">
              <p className=" mb-0 text-acm-white font-medium hover:!text-acm-blue">
                Lockers
              </p>
            </Link>
          </Nav>
          <Nav className="text-2xl mx-2 flex justify-center items-center">
            <Link href="/checkin" className="no-underline">
              <p className=" mb-0 text-acm-white font-medium hover:!text-acm-blue">
                Checkin
              </p>
            </Link>
          </Nav>
          <Nav className="text-2xl mx-2 flex justify-center items-center">
            <Link href="/resources" className="no-underline">
              <p className=" mb-0 text-acm-white font-medium hover:!text-acm-blue">
                Resources
              </p>
            </Link>
          </Nav>
          <Nav className="text-2xl mx-2 flex justify-center items-center">
            <Link href="/registration" className="no-underline">
              <p className=" mb-0 text-acm-white font-medium hover:!text-acm-blue">
                Registration
              </p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default Navigation;
