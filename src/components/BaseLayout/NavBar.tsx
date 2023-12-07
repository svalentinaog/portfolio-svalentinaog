import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
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

    // return (
    //     <Navbar
    //         expand="lg"
    //         className={`${scrolling ? 'scrolling ' : ''} bg-navbar-one`}
    //     >
    //         <Container fluid>
    //             <Navbar.Brand className="goHome">
    //                 <a href="/" className="go-home-content">
    //                     {/* <img
    //                         src="/images/logo/meduss.png"
    //                         alt="isotipo"
    //                         className="icon-headerPortfolio"
    //                     /> */}
    //                     <p className="text-headerPortfolio">
    //                         Valentina Ortiz
    //                     </p>
    //                 </a>
    //             </Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <div className='container-fluid'>
    //                 <Navbar.Collapse id="basic-navbar-nav">
    //                     <Nav className="me-auto">
    //                         <Nav.Link className="goContact">
    //                             <a href="/contact-us">Sobre mí</a>
    //                         </Nav.Link>
    //                         <Nav.Link className="goContact">
    //                             <a href="/contact-us">Proyectos</a>
    //                         </Nav.Link>
    //                         <Nav.Link className="goContact">
    //                             <a href="/contact-us">Contacto</a>
    //                         </Nav.Link>
    //                     </Nav>
    //                     <Switch />
    //                 </Navbar.Collapse>
    //             </div>
    //         </Container>
    //     </Navbar>
    // );

    return (
        <>
            {['sm'].map((expand) => (
                <Navbar
                    key={expand.toString()}
                    expand={expand}
                    className={`${scrolling ? 'scrolling ' : ''} bg-navbar-one`}
                >
                    <Container fluid>
                        <div>
                            <Navbar.Brand href="/" className="goHome">
                                <div className="go-home-content">
                                    {/* <img
                                        src="/logo/medusa.png"
                                        alt="isotipo"
                                        className="icon-headerPortfolio"
                                    /> */}
                                    <p className="text-headerPortfolio">
                                        Valentina Ortiz!
                                    </p>
                                </div>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        </div>
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
                                            Valentina Ortiz
                                        </p>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className="navbar-allitems">
                                <Nav className="itemsNav">
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
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}
