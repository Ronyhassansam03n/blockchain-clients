import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Register = () => {
    return (

        <Card className='w-50 m-auto mt-5 ' >
        <Form >

        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicEmail">

                <Form.Label>Full Name</Form.Label>

                <Form.Control type="text" placeholder="Enter Your Name" required />
          
        </Form.Group>
        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicEmail">

                <Form.Label>Photo URL</Form.Label>

                <Form.Control type="text" placeholder="Enter Your URL" required />
          
        </Form.Group>
        <Form.Group className="mb-  m-auto w-50" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>

                <Form.Control type="email" placeholder="Enter Your Email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicPassword">

                 <Form.Label>Password</Form.Label>

                 <Form.Control type="password" placeholder=" Enter Your Password" required />

        </Form.Group>
        


{/*  LOG IN button */}

        <Button  className='mb-2' variant="outline-primary" type="submit">
        Register
        </Button>
        <p> Already have an account<Link to='/login'> Log in</Link></p>
      </Form>
      </Card>
    );
};

export default Register;