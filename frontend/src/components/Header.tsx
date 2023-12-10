import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from "react";
import {Dropdown, Stack} from "react-bootstrap";
import {labelNames} from "../dictionary/HeaderDictionary";
import {NavLink} from "react-router-dom";

function Header() {
    const expand = 'lg';
    const [theme, setTheme] = useState('dark');
    const [language, setLanguage] = useState<'pl' | 'en'>('en');

    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme={theme}>
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/home">Sales Portal Pro</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    data-bs-theme={theme}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Stack direction="horizontal" gap={3}>
                            <Form className="d-flex vertical align-items-center">
                                <Form.Check
                                    data-bs-theme={theme}
                                    type="switch"
                                    id="custom-switch"
                                    onChange={() => {
                                        setTheme(theme === 'light' ? 'dark' : 'light');
                                    }}
                                />
                                <Form.Label className={`ms-2 mb-0 ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                    {theme === 'light' ? labelNames.lightTheme[language] : labelNames.darkTheme[language]}
                                </Form.Label>
                            </Form>
                            <Form className={`d-flex align-items-center ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                        {labelNames.selectLanguageButtonLabel[language]}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            Object.keys(labelNames.language).map((key) => (
                                                <Dropdown.Item
                                                    key={key}
                                                    onClick={() => {
                                                        setLanguage(key as 'pl' | 'en');
                                                    }}
                                                >
                                                    {labelNames.language[key as 'pl' | 'en']}
                                                </Dropdown.Item>
                                            ))
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </Stack>

                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={NavLink} to="/home">
                                {labelNames.home[language]}
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/orders">
                                {labelNames.orders[language]}
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/salesQuality">
                                {labelNames.salesQuality[language]}
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/customerReviews">
                                {labelNames.customerReviews[language]}
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/login">
                                {labelNames.signIn[language]}
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
}

export default Header;