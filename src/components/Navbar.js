import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg" className='py-5'>
        <Container>
          <Navbar.Brand href="home">
            <img src="https://i.imgur.com/88AlrS5.jpg" 
            className='logo shadow-lg'
            alt="" 
            height="90" 
            width="90"
            
            
            />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                <NavDropdown.Item href="/food">Menu</NavDropdown.Item>
                <NavDropdown.Item href="/email">Email</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <SocialIcon url="https://www.instagram.com/cohealthyhomemade/?hl=en" target="_blank"/>
        </Container>
      </Navbar>

    
    )
  }
  
  export default Navigation;