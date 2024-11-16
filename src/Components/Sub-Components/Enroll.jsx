import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assists/Styles/Enroll.css';
import enrimg1 from '../images/Rectangle 98.png';
import enrimg2 from '../images/layer.png';
import enrimg3 from '../images/Group 1984.png';
import { Button } from 'react-bootstrap';

const Main = () => {

    return (
        <>
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
                </div>
                <div className="button-container">
                    <Button className='enroll-btn'>ENROLL NOW</Button>
                </div>
                <img src={enrimg2} alt="background-img" className="layer2-image" />
                <img src={enrimg3} alt="background-img" className="layer3-image" />
            </div>
        </>
    );
};

export default Main;
