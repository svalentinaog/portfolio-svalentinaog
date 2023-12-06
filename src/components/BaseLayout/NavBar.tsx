// import React from 'react'

// function NavBar() {
//   return (
//     <div>NavBar</div>
//   )
// }

// export default NavBar

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Button } from 'react-bootstrap';
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
                            className="icon-eventox"
                        /> */}
                        <p className="text-eventox">
                            Valentina Ortiz <span className="color-x"></span>
                        </p>
                    </a>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="goContact">
                            <a href="/contact-us">Acerca de</a>
                        </Nav.Link>
                        <Nav.Link className="goContact">
                            <a href="/contact-us">Proyectos</a>
                        </Nav.Link>
                        <Nav.Link className="goContact">
                            <a href="/contact-us">Contacto</a>
                        </Nav.Link>
                    </Nav>

                    {/* <div className="container-btn-navbar">
                        <a href="">
                            <Button className="button-login">Contacto</Button>
                        </a>
                    </div> */}

                    <Switch />
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}
