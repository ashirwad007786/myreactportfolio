
import React from "react";
import { Button } from "react-bootstrap";
import Logo from "../Images/Abpng.gif";
import { Container, Navbar } from "react-bootstrap";
import NavB from "react-bootstrap/Nav";

export default function Nav() {
  return (
    <Navbar expand="lg" className="navbar p-0">
      <Container fluid className="px-1">
        <Navbar.Brand href="/myreactportfolio/">
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <NavB className="px-5">
            <NavB.Link href="/myreactportfolio/">Home</NavB.Link>
            <NavB.Link href="/myreactportfolio/about">About</NavB.Link>
            <NavB.Link href="/myreactportfolio/skills">Skills</NavB.Link>
            <NavB.Link href="/myreactportfolio/contact">Contact</NavB.Link>
            <Button
              className="resume-btn"
              onClick={() => {window.open("https://drive.google.com/file/d/1po5W7AWphOHMfo4ymGaNMjdYHuDRoHdi/view?usp=sharing");}}>
              <span>Resume</span>
            </Button>
          </NavB>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
