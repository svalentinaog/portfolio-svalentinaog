import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Offcanvas, Form, Tabs, Tab } from 'react-bootstrap';
import Switch from './Switch';

import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

import { useTheme } from '../context/ThemeContext';

export default function NavBar() {
    const [scrolling, setScrolling] = useState<boolean>(false);

    const { darkMode } = useTheme();

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

    const [lg] = useTranslation();

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        changeLanguage(selectedLanguage);
    };

    // Funcion para desplazarse a la sección que queramos en nuestra landing
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {['sm'].map((expand) => (
                <Navbar
                    key={expand.toString()}
                    expand={expand}
                    className={`${scrolling ? 'scrolling ' : ''} bg-navbar-one`}
                >
                    <Container fluid>
                        <Navbar.Brand href="/">

                            <div className="image-container">
                                {darkMode === 0 ? (
                                    <img src="/images/bee/bee-logo.png" alt="isotipo" className="image" />
                                ) : (
                                    <img src="/images/jellyfish/jellyfish-logo.png" alt="isotipo" className="image" />
                                )}
                            </div>

                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <div className="image-container">
                                        {darkMode === 0 ? (
                                            <img src="/images/bee/bee-logo.png" alt="isotipo" className="image" />
                                        ) : (
                                            <img src="/images/jellyfish/jellyfish-logo.png" alt="isotipo" className="image" />
                                        )}
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className="navbar-allitems">

                                <Nav className="items-navbar">
                                    <Nav.Link href="#" onClick={() => scrollToSection('section1')} className="nav-item">
                                        {lg('nav-item1')}
                                    </Nav.Link>
                                    <Nav.Link href="#" onClick={() => scrollToSection('section2')} className="nav-item">
                                        {lg('nav-item2')}
                                    </Nav.Link>
                                    <Nav.Link href="#" onClick={() => scrollToSection('section3')} className="nav-item">
                                        {lg('nav-item3')}
                                    </Nav.Link>
                                    <Nav.Link href="#" onClick={() => scrollToSection('section4')} className="nav-item">
                                        {lg('nav-item4')}
                                    </Nav.Link>
                                    <Nav.Link href="#" onClick={() => scrollToSection('section5')} className="nav-item">
                                        {lg('nav-item5')}
                                    </Nav.Link>
                                </Nav>

                                <div className='nav-options'>
                                    <div>
                                        <Form.Select aria-label="Default select example" onChange={handleChangeLanguage} defaultValue="es">
                                            <option value="es">ES</option>
                                            <option value="en">EN</option>
                                        </Form.Select>
                                    </div>

                                    <Switch />
                                </div>
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}
