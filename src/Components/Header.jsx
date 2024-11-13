import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: '#641566' }} variant="dark" expand="lg" className="p-1 d-none d-md-block">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="https://www.linkedin.com" target="_blank">
                            <FaLinkedin size={20} style={{ color: 'white', marginRight: '10px' }} />
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com" target="_blank">
                            <FaTwitter size={20} style={{ color: 'white', marginRight: '10px' }} />
                        </Nav.Link>
                        <Nav.Link href="https://instagram.com" target="_blank">
                            <FaInstagram size={20} style={{ color: 'white', marginRight: '10px' }} />
                        </Nav.Link>
                        <Nav.Link href="https://telegram.org" target="_blank">
                            <FaTelegram size={20} style={{ color: 'white', marginRight: '10px' }} />
                        </Nav.Link>
                        <Nav.Link href="https://whatsapp.com" target="_blank">
                            <FaWhatsapp size={20} style={{ color: 'white' }} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
