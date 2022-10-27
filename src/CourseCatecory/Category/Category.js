import React from 'react';
import {  Button, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftNav from '../../CoursePage/LeftSide/LeftNav';

const Category = () => {


    const courses = useLoaderData();
    const {title, image_url, details } = courses;


    return (

        <div >

            <div className='w-50 m-auto'>

            <LeftNav></LeftNav>

            </div>
         

          
            < h3 className='mt-5 mb-5 text-success '>" {title} "</h3>

            <Image rounded className='w-50 mb-5' src={image_url}></Image>

            <h4 className='w-50 m-auto mb-5' > {details}</h4>

            <Link to='/checkout'> <Button className='mb-5' variant="dark"> Get premium access</Button> </Link>

            
        </div>
    );
};

export default Category;