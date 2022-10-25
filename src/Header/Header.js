import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg"  variant="dark">
        <Container fluid >

        <div>

            <img   
              src={'./../NavImg/logo.jpg'}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />

        <Navbar.Brand  className="d-inline-block " href="#">Blockchain Education</Navbar.Brand>

        </div>

       <div>
       <Navbar.Collapse id="navbarScroll">

          <Nav>

                <div className='me-5 '>

                <NavLink className='me-2 navLink' to='/'> HOME</NavLink>
                <NavLink className='me-2 navLink' to='/course'> COURSES</NavLink>
                <NavLink className='me-2 navLink' to='/faq'> FAQ</NavLink>
                <NavLink className='me-2 navLink' to='/blog'> BLOG</NavLink>

                </div>
                
  
              </Nav>
  
              <Form className="d-flex me-2 ">
                <Button className='me-2' variant="outline-success">Log in</Button>
                <Button variant="outline-warning">Register</Button>
              </Form>

          </Navbar.Collapse>

       </div>

        </Container>
      </Navbar>
    )
};

export default Header;