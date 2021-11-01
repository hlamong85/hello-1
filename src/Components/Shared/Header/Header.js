import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import logo from '../../../images/logo/logo.svg'


const Header = () => {
 const {user, logOut}=useAuth();


    return (
        <div >
             <Navbar className="navbar" collapseOnSelect expand="lg" fixed="top" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
           <Nav.Link as={NavLink} to ="/myOrder">Add New Service</Nav.Link>
           <Nav.Link as={NavLink} to="/manageServices">Manage All Order</Nav.Link>
           {
             user?.email ?
             <Button onClick={logOut} variant="light">Logout</Button> :
             <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
           
           }
          <Navbar.Text>

      </Navbar.Text>
    </Navbar.Collapse>
     
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;