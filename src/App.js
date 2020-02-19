import React, { Component } from "react";
import "./App.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from './Route'
export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to ="/">Fisher Bookstore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
           <Nav>
             <NavItem>
               <Nav.Link href="/books">Books</Nav.Link>
               </NavItem>
               </Nav> 
               <NavItem>
                 <Nav.Link href="/authors">Authors </Nav.Link>
               </NavItem>
          </Navbar.Collapse>
        </Navbar>
     <Routes />
      </div>
    );
  }
}