import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Login.css'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';




const Login = () => {

        const [error, setError] = useState('')
        const { providerLogin, signIn, providerGithub } = useContext(AuthContext);
        const navigate = useNavigate();

        const googleProvider = new GoogleAuthProvider()
        const githubProvider = new GithubAuthProvider()

        const loginHandle = () => {

                providerLogin(googleProvider)
                        .then(result => {
                                const user = result.user;
                                console.log(user);
                                navigate('/')
                        })

                        .catch(error => console.error(error))
        }

        const loginSubHandle = event => {
                event.preventDefault();
                const form = event.target;
                const email = form.email.value;
                const password = form.password.value;

                signIn(email, password)
                        .then(result => {
                                const user = result.user;
                                console.log(user);
                                form.reset();
                                setError('');
                                navigate('/')

                        })
                        .catch(error => {

                                console.error(error)
                                setError(error.message);
                        })
        }


        const githubHandle = () => {
                providerGithub(githubProvider)
                        .then(result => {
                                const user = result.user;
                                console.log(user);
                                navigate('/')
                        })

                        .catch(error => console.error(error))
        }


        return (

                <Card className='w-50 m-auto mt-5 ' >

                        <h3 className='text-danger'> Please Log In Your Account</h3>
                        <Form onSubmit={loginSubHandle}>

                                <Form.Group className="mb-3  m-auto w-50" controlId="formBasicEmail">

                                        <Form.Label>Email address</Form.Label>

                                        <Form.Control name='email' type="email" placeholder="Enter Your Email" required />

                                </Form.Group>

                                <Form.Group className="mb-3  m-auto w-50" controlId="formBasicPassword">

                                        <Form.Label>Password</Form.Label>

                                        <Form.Control name='password' type="password" placeholder=" Enter Your Password" required />

                                </Form.Group>





                                <Button className='mb-2' variant="outline-primary" type="submit">
                                        Log in
                                </Button>
                                <p> Create a new account <Link to='/register'>Register</Link></p>

                                <Form.Text className='text-danger'>
                                        {error}
                                </Form.Text>

                                <h5 className='login-title'> Login with </h5>

                                <Button onClick={loginHandle} className='mb-3 d-block m-auto' variant="outline-danger" type="submit">
                                        <FaGoogle></FaGoogle> Log in via Google
                                </Button>
                                <Button onClick={githubHandle} className='mb-3' variant="outline-dark" type="submit">
                                        <FaGithub></FaGithub> Log in via Github
                                </Button>
                        </Form>

                </Card>
        );
};

export default Login;