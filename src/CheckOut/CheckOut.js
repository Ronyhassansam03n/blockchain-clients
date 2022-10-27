import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdLogin } from "react-icons/md";


const CheckOut = () => {


    return (
        <div>
            <Card className='m-auto mt-5' style={{ width: '40rem' }}>
                <Card.Body>
                    <h4 className='mb-5'>Thank you for Using this course.</h4>

                    <Button variant="outline-success"> <MdLogin></MdLogin> Payment Processed</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CheckOut;