import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../CoursePage/LeftSide/LeftNav';
import RightNav from '../../CoursePage/RightSide/RightNav';

const Course = () => {



    return (
        <div>
            <Container>

                <Row>

                <Col lg="3">

                      <LeftNav></LeftNav>
                    
                </Col>


                <Col lg="9">

                    <RightNav></RightNav>
                 
                </Col>

                </Row>

            </Container>
        </div>

       
    );
};

export default Course;