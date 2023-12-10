import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Offcanvas, Form } from 'react-bootstrap';
import Switch from './Switch';

import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";


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

    const [lg] = useTranslation();

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        changeLanguage(selectedLanguage);
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

                        <Navbar.Brand href="/" className="goHome">
                            <div className="go-home-content">
                                <img
                                        src="/images/mdza.png"
                                        alt="isotipo"
                                        className="icon-headerPortfolio"
                                    />
                                {/* <p className="text-headerPortfolio">
                                   VO
                                </p> */}
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
                                    <div className="go-home-content">
                                        {/* <img
                                            src="/logo/meduss.png"
                                            alt="isotipo"
                                            className="icon-headerPortfolio"
                                        /> */}
                                        <p className="text-headerPortfolio">
                                           VO
                                        </p>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className="navbar-allitems">
                                <Nav className="itemsNav">
                                    <Nav.Link className="goContact">
                                        <a href="/contact-us">{lg("nav-item1")}</a>
                                    </Nav.Link>
                                    <Nav.Link className="goContact">
                                        <a href="/contact-us">{lg("nav-item2")}</a>
                                    </Nav.Link>
                                    <Nav.Link className="goContact">
                                        <a href="/contact-us">{lg("nav-item3")}</a>
                                    </Nav.Link>
                                    <Nav.Link className="goContact">
                                        <a href="/contact-us">{lg("nav-item4")}</a>
                                    </Nav.Link>
                                </Nav>
                                <div>
                                    <Form.Select aria-label="Default select example" onChange={handleChangeLanguage} defaultValue="es">
                                        <option value="es">ES</option>
                                        <option value="en">EN</option>
                                    </Form.Select>
                                </div>
                                <Switch />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}
