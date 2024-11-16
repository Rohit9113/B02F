import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Footerimg from './images/Services Images/footer-image.png'
import { FaLinkedin, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="footer-container">
            <img src={Footerimg} alt="Footer-Image" className="footer-image" />

            <div className='links-container'>
                <ul className="footer-list">
                    <p>Quick Links</p>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#about-us">Blog</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#services">How We Help?</a></li>
                    <li><a href="#services">Community</a></li>
                </ul>
                <ul className="footer-list">
                    <p>Features</p>
                    <li><a href="#home">Plagiarism Checker</a></li>
                    <li><a href="#about-us">Free Publications</a></li>
                    <li><a href="#about-us">Provides Books</a></li>
                    <li><a href="#faq">Provides PDF</a></li>
                    <li><a href="#contact">Paraphraser</a></li>
                </ul>
                <ul className="footer-list">
                    <p>Our Offering</p>
                    <li><a href="#home">IELTS & PTE Masterclass</a></li>
                    <li><a href="#about-us">Talk to Cousellor</a></li>
                    <li><a href="#about-us">IELTS Exam Overviews</a></li>
                    <li><a href="#faq">Important IELTS Articals</a></li>
                </ul>
                <ul className="footer-list Newslinks">
                    <p>Newsletter</p>
                    <li><span>You can trust us, We only send promo offers.</span></li>
                    <li className="email-btn">
                        <button className="btn btn-primary">Your email here</button>
                        <button className="btn btn-secondary">Subscribe</button>
                    </li>

                    <li className='footer-icons'>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                                <FaTelegram size={30} />
                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={30} />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
