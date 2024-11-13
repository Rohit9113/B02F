import React from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/AssignerLogo.png';
import './Nav.css'

const NavBar = () => {
    return (
        <header>
            <Navbar expand="lg" style={{ backgroundColor: '#fff', padding: '10px' }} className="main-navbar">
                <Container className="d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            alt="Assigner Logo"
                            style={{ height: '60px' }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="ml-auto d-flex align-items-center">
                            <div className='underNav'>
                                <Nav.Link href="#home" style={{ color: '#641566', fontWeight: 'bold' }}>Home</Nav.Link>
                                <Nav.Link href="#about-us" style={{ color: '#641566', fontWeight: 'bold' }}>About Us</Nav.Link>
                                <Nav.Link href="#blog" style={{ color: '#641566', fontWeight: 'bold' }}>Blog</Nav.Link>
                                <Nav.Link href="#services" style={{ color: '#641566', fontWeight: 'bold' }}>Our Services</Nav.Link>
                                <Nav.Link href="#ielts-pte" style={{ color: '#641566', fontWeight: 'bold' }}>IELTS & PTE</Nav.Link>
                                <Nav.Link href="#contact" style={{ color: '#641566', fontWeight: 'bold' }}>Contact Us</Nav.Link>
                            </div>

                                <Button
                                    style={{
                                        width: '139.6px',
                                        height: '40.24px',
                                        backgroundColor: '#641566',
                                        border: 'none',
                                        borderRadius: '20px',
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        marginLeft: '20px',
                                    }}
                                >
                                    Login
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
