import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaLinkedin, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className='top-navbar'>
                <span><FaPhoneAlt size={20} color="white" />+91 999885223</span>
                <ul>
                    <li><a href=""><FaLinkedin size={20} /></a></li>
                    <li><a href=""><FaTwitter size={20} /></a></li>
                    <li><a href=""><FaInstagram size={20} /></a></li>
                    <li><a href=""><FaTelegram size={20} /></a></li>
                    <li><a href=""><FaWhatsapp size={20} /></a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
