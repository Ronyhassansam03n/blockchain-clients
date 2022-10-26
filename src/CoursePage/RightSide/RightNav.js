import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RightNav = () => {

    const [courses, setCourses] = useState([])


    useEffect ( () =>{

        fetch('http://localhost:5000/all-course')
        .then(res => res.json())
        .then(data => setCourses(data))

    },[])

    return (

        <div className='container '>
         
                {

                  courses.map(subject => <div key={subject._id}> 

               

<div>

<Card style={{ width: '18rem' }} className=' mt-5 '>
      <Card.Img variant="top" src={subject.thumbnail_url} />
      <Card.Body>
        <Card.Title>{subject.header}</Card.Title>
        <Card.Text>
         {subject.title}
        </Card.Text>
        <Button variant="dark">Buy Now</Button>
      </Card.Body>
    </Card>

</div>

                  </div> )                

                }

        </div>
    );
};

export default RightNav;