import React from 'react';
import './Navbar.css';
import {Navbar, Nav } from 'react-bootstrap';

const Navbars = () => {
    return (
        <Navbar className="px-5 nav-bar" expand="lg">
        <Navbar.Brand href="#home"><span>CARWASH</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <li>
            <Nav.Link href="/"><span>Home</span></Nav.Link>
            </li>
            <li>
            <Nav.Link href="/"><span>About Us</span></Nav.Link>
            </li>
            <li>
            <Nav.Link href="/"><span>Services</span></Nav.Link>
            </li>
            <li>
            <Nav.Link href="/"><span>Testimonials</span></Nav.Link>
            </li>
            <li>
            <Nav.Link href="/"><span>Contact</span></Nav.Link>
            </li>
            <li>
            <Nav.Link href="dashboard"><button className="login-btn">Login</button></Nav.Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  

   
    );
};

export default Navbars;