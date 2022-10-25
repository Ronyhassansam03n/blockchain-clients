import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Login.css'
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        
        <Card className='w-50 m-auto mt-5 ' >
        <Form >

        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>

                <Form.Control type="email" placeholder="Enter Your Email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicPassword">

                 <Form.Label>Password</Form.Label>

                 <Form.Control type="password" placeholder=" Enter Your Password" required />

        </Form.Group>
        


{/*  LOG IN button */}

        <Button  className='mb-2' variant="outline-primary" type="submit">
         Log in
        </Button>
        <p> Create a new account <Link to='/register'>Register</Link></p> 

        <h5 className='login-title'> Login with </h5>

        <Button  className='mb-3 d-block m-auto' variant="outline-danger" type="submit">
         Log in via Google  <FaGoogle></FaGoogle>
        </Button>
        <Button  className='mb-3' variant="outline-dark" type="submit">
         Log in via Github <FaGithub></FaGithub>
        </Button>
      </Form>
      </Card>
    );
};

export default Login;