import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Switch from './Switch';

export default function NavBar() {
    const [scrolling, setScrolling] = useState<boolean>(false);
    
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolling(scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            className={`${scrolling ? 'scrolling ' : ''} bg-navbar-one`}
        >
            <Container>
                <Navbar.Brand className="goHome">
                    <a href="/" className="go-home-content">
                        {/* <img
                            src="/images/logo/meduss.png"
                            alt="isotipo"
                            className="icon-headerPortfolio"
                        /> */}
                        <p className="text-headerPortfolio">
                            Valentina Ortiz
                        </p>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="goContact">
                                <a href="/contact-us">Sobre mí</a>
                            </Nav.Link>
                            <Nav.Link className="goContact">
                                <a href="/contact-us">Proyectos</a>
                            </Nav.Link>
                            <Nav.Link className="goContact">
                                <a href="/contact-us">Contacto</a>
                            </Nav.Link>
                        </Nav>
                        <Switch />
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}
