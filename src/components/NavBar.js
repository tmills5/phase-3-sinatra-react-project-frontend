import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavBar = () => {

    return (
      <Navbar bg="dark" variant="dark" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">The Cocktail Companion</Navbar.Brand>
            {/* <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to='/add'>Add Cocktail</Nav.Link>
              </Nav.Item>
              
              <Nav.Link as={Link} to='/mycocktails'>My Cocktails</Nav.Link> 
             </Nav> */}
        </Container>
    </Navbar>
    );
};

export default NavBar;