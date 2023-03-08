import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const navigation = [
  { name: "Home", link: "/home" },
  // { name: "EDUCATION", link: "/education" },
  { name: "Job Experience", link: "/job-experience" },
  { name: "Industrial Projects", link: "/projects" },
  { name: "Software Skills", link: "/softwares" },
  { name: "Activities", link: "/activities" },
];

const Header = () => {
  return (
    <div>
      <Navbar className="navbar-container" expand="lg">
        <Container className="m-0 p-2">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {navigation.map((item) => (
                <Link key={item.name} className="link" to={item.link}>
                  {item.name}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
