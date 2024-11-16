import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Assists/Styles/Assistance.css';
import starimg from '../images/Services Images/OBJECTS (1).png'
import arrowimg from '../images/Services Images/OBJECTS.png'


const Assistence = () => {
    const assisData = [
        {
            title: "No Plagiarism",
            description: "100% original answers that lessen the possibility of receiving a bad grade."
        },
        {
            title: "On-time Submission",
            description: "We promise to turn in the job ahead of schedule, no matter how difficult it is."
        },
        {
            title: "24/7 support",
            description: "Help for homework is available 24/7; we are always here to assist students with their assignments. "
        },
        {
            title: "Rewrites that satisfy",
            description: "Get your schoolwork redone as many times as you like till you are happy."
        }
    ];

    return (
        <>
            <div className='assistence-container'>
                <img src={starimg} alt="right-arrow-image" className="rounded float-start" />
                <div className='assistence-sub-container'>
                    <p className='assis-heading'>Our Assistance's advantages</p>
                    <p className='assis-sub-heading'>The Assigner wants to build a strong foundation that will enable students to soar to achievement.</p>

                    <Container className='assis-card-container'>
                        <Row>
                            {assisData.map((assis, i) => (
                                <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card className="assis-card ">
                                        <Card.Body className='txtbody'>
                                            <Card.Title className='assis-card-headtxt'>{assis.title}</Card.Title>
                                            <Card.Text className='description-paragraph'>{assis.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                </div>
                <img src={arrowimg} alt="right-arrow-image" className="rounded float-end" />
            </div>
        </>
    );
};

export default Assistence;
