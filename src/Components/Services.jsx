import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import servimg1 from './images/Services Images/image 2.svg';
import servimg2 from './images/Services Images/image 3.svg';
import servimg3 from './images/Services Images/image 7.svg';
import servimg4 from './images/Services Images/image 5.svg';
import servimg5 from './images/Services Images/image 6.svg';
import servimg6 from './images/Services Images/image 8.svg';
import servimg7 from './images/Services Images/image 9.svg';
import servimg8 from './images/Services Images/image 10.svg';
import servimg9 from './images/Services Images/image 11.svg';
import servimg10 from './images/Services Images/image 12.svg';
import servimg11 from './images/Services Images/image 13.svg';
import servimg12 from './images/Services Images/image 14.svg';
import servimg13 from './images/Services Images/image 15.png';
import servimg14 from './images/Services Images/image 16.svg';
import './Services.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Services = () => {
    const servicesData = [
        {
            img: servimg1,
            title: "Assignment",
            description: "(178)"
        },
        {
            img: servimg2,
            title: "Dissertation",
            description: "(150)"
        },
        {
            img: servimg3,
            title: "Course work",
            description: "(120)"
        },
        {
            img: servimg4,
            title: "Thesis",
            description: "(129)"
        },
        {
            img: servimg5,
            title: "Essay",
            description: "(47)"
        },
        {
            img: servimg6,
            title: "Research Paper",
            description: "(59)"
        },
        {
            img: servimg7,
            title: "Power Point Presentation",
            description: "(89)"
        },
        {
            img: servimg8,
            title: "Programming",
            description: "(134)"
        },
        {
            img: servimg9,
            title: "Paper Writing",
            description: "(193)"
        }
        ,
        {
            img: servimg10,
            title: "Case Study",
            description: "(125)"
        }
        ,
        {
            img: servimg11,
            title: "Speech Writing",
            description: "(100)"
        }
        ,
        {
            img: servimg12,
            title: "Term Paper Writing",
            description: "(135)"
        }
        ,
        {
            img: servimg13,
            title: "Cover Letter Writing",
            description: "120"
        }
        ,
        {
            img: servimg14,
            title: "Resume Maker",
            description: "132"
        }
    ];

    return (
        <>
            <div className='services-container'>
                <p className='feature-heading'>Our Services</p>
                <p className='feature-sub-heading'>We offer some fantastic services</p>

                <Container className='Service-card-container'>
                    <Row>
                        {servicesData.map((serv, i) => (
                            <Col sm={12} md={6} lg={3} key={i}>
                                <Card className="service-card ">
                                    <Card.Img className="servimg" variant="top" src={serv.img} />
                                    <Card.Body>
                                        <Card.Title className='service-card-headtxt'>{serv.title}</Card.Title>
                                        <div className='rating'>
                                            <div className="icon-container">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <i key={index} className="far fa-star"></i>
                                                ))}
                                            </div>
                                            <Card.Text>{serv.description}</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Services;
