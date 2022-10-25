import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from './../Header/NavImg/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {

const {user, logOut} = useContext(AuthContext)

const handelLogOut = () => {
  logOut()
  .then ( () => {})
  .catch (error => console.error(error))

}
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
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

                <NavLink className='me-4 navLink' to='/'> HOME</NavLink>
                <NavLink className='me-4 navLink' to='/course'> COURSES</NavLink>
                <NavLink className='me-4 navLink' to='/faq'> FAQ</NavLink>
                <NavLink className='me-4 navLink' to='/blog'> BLOG</NavLink>

                </div>
                
  
              </Nav>
  
              

          </Navbar.Collapse>

       </div>

       
       <div className='d-flex'>

        { 
        user?.uid ?
        <>
          <span className='text-white me-3'> Welcome to Blockchain course, {user?.displayName}</span>
          <Button  onClick= {handelLogOut} className='me-5 ' variant="outline-light">LogOut</Button>
        </>
          :
          <>
         
            <Link to='/login'>  <Button  className='me-2' variant="outline-success">Log in</Button> </Link>
            <Link to='/register'> <Button variant="outline-warning">Register</Button> </Link>
            
          </>
        }

           { user?.photoURL ?
            <Image className='' style={{ height : '25px'}} roundedCircle src={user?.photoURL}></Image>
           :
           <FaUser></FaUser>
          } 
        
        </div>
        
               </Container>
              </Navbar>
            )
        };

export default Header;