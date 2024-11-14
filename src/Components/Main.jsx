import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Group from './images/Group.png';
import Arrowimg from './images/OBJECTS (1).png';
import starimg from './images/OBJECTS.png';
import enrimg1 from './images/Rectangle 98.png';
import enrimg2 from './images/layer.png';
import enrimg3 from './images/Group 1984.png';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import icon1 from './images/icon1 (1).png';
import icon2 from './images/icon1 (2).png';
import icon3 from './images/icon1 (3).png';
import icon4 from './images/icon1 (4).png';
import Services from './Services.jsx';
import Assistence from './Assistance.jsx';

const Main = () => {

    const cardData = [
        {
            img: icon1,
            title: "Plagiarism Checker",
            description: "We will provide access to assignments free of plagiarism"
        },
        {
            img: icon2,
            title: "Free Publications",
            description: "We will provide access to publication"
        },
        {
            img: icon3,
            title: "Provides Free Books and PDF",
            description: "Free Books and PDF will be provided"
        },
        {
            img: icon4,
            title: "Paraphraser",
            description: "A paraphraser will be provided"
        }
    ];

    return (
        <>
            <div className='count-container'>
                <div className='main-container'>
                    <div className='rightimg-container'>
                        <img src={Arrowimg} alt="right-arrow-image" className="rounded float-start" />
                    </div>
                    <div>
                        <div className='head-container'>
                            <h1 className='heading-text'>700+ students saved, and counting</h1>
                        </div>
                        <div>
                            <p className="pratxt">50K new study notes added every day, from the world’s most active student communities</p>
                        </div>
                    </div>

                    <div className="details">
                        <img src={Group} alt="right-arrow-image" className="dtimg" />
                    </div>


                    <div className='starimg-container'>
                        <img src={starimg} alt="right-arrow-image" className=" rounded float-end" />
                    </div>
                </div>
            </div>

            <div className='enroll-container'>
                <img src={enrimg1} alt="background-img" className="enroll-background-img" />
                <div className='text-over-img'>
                    <h1 className='enroll-headtxt'>
                        <span className='headtxt1'>IELTS Preparation</span><br />
                        <span className='headtxt2'>Online Best Learning</span><br />
                        <span className='headtxt3'>opportunities in The World</span><br />
                    </h1>
                    <div className='enroll-para-container'>
                        <p className='enroll-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax negotium, dicerem impudens, nisi hoc institut translatum ad philosophos nostros esset.</p>
                    </div>
                    <Button className='enroll-btn'>ENROLL NOW</Button>
                </div>
                <img src={enrimg2} alt="background-img" className="rounded float-end layer2-image" />
                <img src={enrimg3} alt="background-img" className="rounded float-end layer3-image" />
            </div>

            <div className='features-container'>
                <p className='feature-heading'>Awesome Features</p>
                <p className='feature-sub-heading'>Get ready to unlock the next level of features</p>

                <Container>
                    <Row>
                        {cardData.map((card, index) => (
                            <Col sm={12} md={6} lg={3} key={index}>
                                <Card className="feature-card card-container">
                                    <Card.Img className="cardimg" variant="top" src={card.img} />
                                    <Card.Body className="card-txt">
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>

            <Services />
            <Assistence />
        </>
    );
};

export default Main;
