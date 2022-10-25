import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from './../Header/NavImg/logo.jpg'

const Header = () => {




    return (
        <Navbar expand="lg" bg="dark"   variant="dark">
        <Container fluid >

        <div>

            <img   
              src={logo} 
              width="50"
              height="50"
              className="d-inline-block align-top me-2 rounded"
              alt=""
            />

        <Link to='/'><Navbar.Brand className="d-inline-block">Blockchain Education</Navbar.Brand> </Link>

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
              <Link to='/login'>  <Button  className='me-2' variant="outline-success">Log in</Button> </Link>
              <Link to='/register'> <Button variant="outline-warning">Register</Button> </Link>
              </Form>

          </Navbar.Collapse>

       </div>

        </Container>
      </Navbar>
    )
};

export default Header;