import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assists/Styles/Features.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icon1 from '../images/icon1 (1).png';
import icon2 from '../images/icon1 (2).png';
import icon3 from '../images/icon1 (3).png';
import icon4 from '../images/icon1 (4).png';

const Main = () => {
    const cardData = [
        {
            img: icon1,
            title: "Plagiarism Checker",
            description: "We will provide access to assignments free of plagiarism",
        },
        {
            img: icon2,
            title: "Free Publications",
            description: "We will provide access to publication",
        },
        {
            img: icon3,
            title: "Provides Free Books and PDF",
            description: "Free Books and PDF will be provided",
        },
        {
            img: icon4,
            title: "Paraphraser",
            description: "A paraphraser will be provided",
        },
    ];

    return (
        <div className='feature-container'>
            <p className='heading'>Awesome Features</p>
            <p className='para'>Get ready to unlock the next level of features</p>
            <Container>
                <Row>
                    {cardData.map((card, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex justify-content-center">
                            <Card className='features-cards'>
                                <Card.Img className='card-picture' variant="top" src={card.img} />
                                <Card.Body>
                                    <Card.Title className='cards-title'>{card.title}</Card.Title>
                                    <Card.Text className='cards-description'>{card.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Main;
