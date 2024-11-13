import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImage from './images/Hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-image-container">
                <img src={HeroImage} alt="Hero Banner" className="hero-image" />

                <div className="text-container">
                    <div className="first-text">
                        <p>Navigate Your Academic Journey with Confidence</p>
                    </div>
                    <div className="second-text">
                        <p>Providing high-quality and comprehensive assistance with assignments and thesis writing for students at all academic levels.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
