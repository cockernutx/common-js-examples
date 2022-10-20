import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import githubIcon from './images/GitHub-Mark-32px.png'

import {LayoutNavBar} from './NavMenu.styled'

function NavMenu() {


  return (
    <LayoutNavBar>
      <Navbar.Brand as={Link} to="/">
        JS Homeworks
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>*/}
        </Nav>

        <Navbar.Text>
          <a href="https://github.com/cockernutx/js_homework" target="_blank"><img src={githubIcon}/></a>
        </Navbar.Text> 
        
      </Navbar.Collapse>
    </LayoutNavBar>
  );
}

export default NavMenu;
