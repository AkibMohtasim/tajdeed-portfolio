import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const navigation = [
  { name: "HOME", link: "/home" },
  { name: "EDUCATION", link: "/education" },
  { name: "JOB EXPERIENCE", link: "/job-experience" },
  { name: "INDUSTRIAL PROJECTS", link: "/projects" },
  { name: "SOFTWARE SKILLS", link: "/softwares" },
  { name: "ACTIVITIES", link: "/activities" },
];

const Header = () => {
  return (
    <div>
      <Navbar className="navbar-container sticky-top" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {navigation.map((item) => (
                <Nav.Link>
                  <Link className="link" to={item.link}>
                    {item.name}
                  </Link>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
