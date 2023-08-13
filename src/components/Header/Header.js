import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar } from 'flowbite-react';

const navigation = [
  { name: "Home", link: "/home" },
  { name: "Job Experience", link: "/job-experience" },
  { name: "Industrial Projects", link: "/projects" },
  { name: "Software Skills", link: "/softwares" },
  { name: "Activities", link: "/activities" },
];

const Header = () => {
  return (
    <div className="navbar-container">
      <Navbar fluid>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-center">
          {navigation.map((item, index) => (
            <Navbar.Link active>
              <Link key={index} className="link" to={item.link}>
                {item.name}
              </Link>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
