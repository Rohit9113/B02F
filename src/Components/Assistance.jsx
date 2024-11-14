import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Assistance.css';
import starimg from './images/Services Images/OBJECTS (1).png'
import arrowimg from './images/Services Images/OBJECTS.png'


const Assistence = () => {
    const servicesData = [
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
            {/* <div className='arrowimg-container'>
                <img src={arrowimg} alt="right-arrow-image" className="rounded float-end " />
            </div> */}

            <div className='assis-container'>
                <p className='assis-heading'>Our Assistance's advantages</p>
                <p className='assis-sub-heading'>The Assigner wants to build a strong foundation that will enable students to soar to achievement.</p>

                <Container className='assis-card-container'>
                    <Row>
                        {servicesData.map((serv, i) => (
                            <Col sm={12} md={6} lg={3} key={i}>
                                <Card className="assis-card ">
                                    <Card.Body className='txtbody'>
                                        <Card.Title className='assis-card-headtxt'>{serv.title}</Card.Title>
                                        <Card.Text className='description-paragraph'>{serv.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* <div className='starimg-container'>
                <img src={starimg} alt="right-arrow-image" className="rounded float-start" />
            </div> */}
        </>
    );
};

export default Assistence;
