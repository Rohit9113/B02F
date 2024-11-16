import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome CSS
import Arrowimg from './images/OBJECTS (1).png';
import starimg from './images/OBJECTS.png';

const Main = () => {

    return (
        <>
            <img src={Arrowimg} alt="right-arrow-image" className="rounded float-start" />
            <div className='count-container'>
                <p className='count-head'>700+ students saved, and counting</p>
                <p className="count-txt">50K new study notes added every day, from the world’s most active student communities</p>
                <div className='count-details'>
                    <p>350+</p>
                    <p>115+</p>
                    <p>700+</p>
                </div>
                <div className='count-details-icon'>
                    <span><i className="fa fa-file-text" style={{ fontSize: 22, color: 'cyan' }} /></span>
                    <span><i className="fa fa-university" style={{ fontSize: 22, color: 'cyan' }} /></span>
                    <span><i className="fa fa-user" style={{ fontSize: 22, color: 'cyan' }} /></span>
                </div>
            </div>
            <img src={starimg} alt="right-arrow-image" className="rounded float-end" />
        </>
    );
};

export default Main;
