import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Faq = () => {
    return (
        <Row xs={1} md={2} className="g-4 w-50 m-auto mt-5 mb-5">
     
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='text-danger mb-5'>Why You Learn Programming</Card.Title>
                <Card.Text>
                When you learn programming, it is not only about the knowledge you acquire, but also (and specially) about the useful transferable skills you get. And the fact is that, in addition to becoming more precise and methodic, when you learn programming, you significantly improve your problem solving and abstraction skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='text-danger mb-5 mb-5'>Who We Are ? </Card.Title>
                <Card.Text>
                          We are the first people who bring this course. We are the best in time . we have 24/7 student support .
                            We have Dynamic mentors  who will guide you   to become a  great devoloper  and a great programmer . all we ahve to do is practics and practics and be focused. only we can try but all is up to you . so keep learning with all you got .
                            
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='text-danger mb-5'>Where We Locate ?</Card.Title>
                <Card.Text>
                 This Course is fully Online line based . Very soon We will come with Offline course
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='text-danger mb-4'>Have Remote Job Opportunity  </Card.Title>
                <Card.Text>
                   After Complete the Course we  send your resume in top class companies .
                   we also have a remote job hunting team .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        
      </Row>
    );
};

export default Faq;