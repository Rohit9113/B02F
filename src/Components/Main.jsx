import React from 'react';
// import {Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Group from './images/Group.png';
import Arrowimg from './images/OBJECTS (1).png';
import starimg from './images/OBJECTS.png';
import enrimg1 from './images/Rectangle 98.png'
import enrimg2 from './images/layer.png'
import enrimg3 from './images/Group 1984.png'
import { Button } from 'react-bootstrap';

const Main = () => {
    return (
        <>
            <div className='count-container'>
                {/* <img src={Group} alt="Count-Image" className="count-image" /> */}
                <div className='main-container'>
                    <div className='rightimg-container'>
                        <img src={Arrowimg} alt="right-arrow-image" className="rounded float-start" />
                    </div>
                    <div className='headtxt'>
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
                    <h1 className='enroll-headtxt'><span className='headtxt1'>IELTS Preparation</span><br /> <span className='headtxt2'>Online Best Learning</span><br /> <span className='headtxt3'>opportunities in The World</span><br></br></h1>
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

                <div className='feature-cards'>
                    <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
