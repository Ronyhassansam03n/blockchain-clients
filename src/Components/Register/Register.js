import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useState } from 'react';


const Register = () => {
const [error, setError] =useState('')

const {createUser} = useContext(AuthContext)

        const handleSubmit = event =>{
                event.preventDefault();
                const form = event.target;
                const name = form.name.value;
                const photoURL = form.photoURL.value;
                const email = form.email.value;
                const password = form.password.value;
                console.log(name, photoURL, email, password);

                createUser(email, password)
                .then( result =>{
                        const user = result.user;
                        console.log(user);
                        setError('');
                        form.reset();
                })
                .catch(error =>{ 
                        
                        console.error(error);
                        setError(error.message);
                })
        }


    return (
        

        <Card className='w-50 m-auto mt-5 ' >

                 <h3 className='text-danger'> Please Register Your Account</h3>


        <Form  onSubmit={handleSubmit}>

        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicEmail">

                <Form.Label>Full Name</Form.Label>

                <Form.Control  name='name' type="text" placeholder="Enter Your Name"  />
          
        </Form.Group>

        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicEmail">

                <Form.Label>Photo URL</Form.Label>

                <Form.Control name='photoURL' type="text" placeholder="Enter Your URL" />
        </Form.Group>

        <Form.Group className="mb-  m-auto w-50" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>

                <Form.Control name='email' type="email" placeholder="Enter Your Email" required />
        </Form.Group>
  
        <Form.Group className="mb-3  m-auto w-50" controlId="formBasicPassword">

                 <Form.Label>Password</Form.Label>

                 <Form.Control name='password' type="password" placeholder=" Enter Your Password" required />

        </Form.Group>
        


{/*  LOG IN button */}

        <Button  className='mb-2' variant="outline-primary" type="submit">
        Register
        </Button>

        <Form.Text className='text-danger'>
         {error}
        </Form.Text>
        
        <p> Already have an account<Link to='/login'> Log in</Link></p>
      </Form>
      </Card>
    );
};

export default Register;