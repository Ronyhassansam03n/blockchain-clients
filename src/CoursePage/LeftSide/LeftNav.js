import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const LeftNav = () => {

    const [categories, setCategories] = useState([])

useEffect( () => {

    fetch('http://localhost:5000/course-categories')
    .then(res => res.json())
    .then( data => setCategories(data))

}, [])

    return (

        <Card  className='bg-light' style={{marginTop : '70px' }}>
        <div>

        <h2 className='text-success' style={{marginBottom : '20px' }} > All Categories</h2>
          {

                categories.map(category => <p key={category.id}>

                <Link>  <Button variant="outline-dark"> {category.name}  </Button>   </Link>

                </p>)

          }
        </div>
        </Card>
    );
};

export default LeftNav;