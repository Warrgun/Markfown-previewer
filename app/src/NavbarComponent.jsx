import React, { useState } from "react";
import ExportButton from "./ExportButton";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarComponent = ({ exportFile }) => {
  return (
    <Navbar expand='lg' className="w-100">
      <Container>
        <div className="d-block d-lg-none">
          <ExportButton exportFile={exportFile} />
        </div>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          className='d-lg-flex justify-content-lg-center align-items-lg-center offcanvas-right '
        >
          <Offcanvas.Header className="pb-0" closeButton />
          <Offcanvas.Body className=" text-center align-content-center pt-0">
            <Nav className="justify-content-end flex-grow-1 mb-5">
              <Nav.Link href="https://markdown-landing-page.vercel.app">Home</Nav.Link>
              <Nav.Link href="https://markdown-landing-page.vercel.app/about-us">About</Nav.Link>
              <Nav.Link href="https://markdown-landing-page.vercel.app/contact">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;