import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Rigth.css'

const RightNav = () => {

    const [courses, setCourses] = useState([])


    useEffect ( () =>{

        fetch(' https://blockchain-course-server.vercel.app/all-course')
        .then(res => res.json())
        .then(data => setCourses(data))

    },[])

    return (

        <div className='container '>
         
                {

                  courses.map(subject => <Card  key={subject._id} style={{ width : '500px'}} className=' mt-5  m-auto mb-5 '>

      <Card.Img variant="top" src={subject.thumbnail_url} />
      <Card.Body >
        <Card.Title>{subject.header}</Card.Title>
        <Card.Text>
         {subject.title}
        </Card.Text>
        <Button variant="dark">Buy Now</Button>
      </Card.Body>
    </Card>)                

                }




        </div>
    );
};

export default RightNav;