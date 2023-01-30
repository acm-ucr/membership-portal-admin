import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link"
import Image from "next/image"

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-lexend w-full px-3 m-0 min-h-[10vh] bg-white flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="flex flex-row items-center p-0 m-0">
        <Link href="/">
          <Image
            src="/acm-ucr-logo.png"
            alt="ACM at UCR"
            width={80}
            height={80}
          />
        </Link>
        <div className="hidden lg:block">
          <p className="m-0 font-lexend font-medium text-2xl">
            Admin Portal
          </p>
        </div>
      </Navbar.Brand>

      <>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse
          id="navbar-nav"
          className="flex justify-center md:justify-end items-center"
        >
          <Nav className="text-2xl flex justify-center items-center">
            <Link href="/" className="no-underline">
              <p className=" mb-0 text-acm-black font-medium hover:!text-acm-blue">
                Quick Actions
              </p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default Navigation;
