import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='d-grid m-auto'>
            <Image className='m-auto' src='https://media.istockphoto.com/vectors/vector-concept-illustration-of-page-error-404-vector-id1269245576?k=20&m=1269245576&s=170667a&w=0&h=iW8rPfHpAUBHQJwo0YQFOx_rNvHcoIixb9HtoyjIOfk='></Image>
   
            <Link to='/'><Button variant="outline-dark" > Go back to homepage</Button></Link> 


        </div>
    );
};

export default About;