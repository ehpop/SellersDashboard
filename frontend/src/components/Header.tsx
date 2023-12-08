import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import {labelNames} from "../dictionary/HeaderDictionary";

function Header() {
    const expand = 'lg';
    const [theme, setTheme] = useState('dark');
    const [language, setLanguage] = useState<'pl' | 'en'>('en');

    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme={theme}>
            <Container fluid>
                <Navbar.Brand href="#">Sales Portal Pro</Navbar.Brand>
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
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">
                                {labelNames.home[language]}
                            </Nav.Link>
                            <Nav.Link href="#orders">
                                {labelNames.orders[language]}
                            </Nav.Link>
                            <Nav.Link href="#salesQuality">
                                {labelNames.salesQuality[language]}
                            </Nav.Link>
                            <Nav.Link href="#customerReviews">
                                {labelNames.customerReviews[language]}
                            </Nav.Link>
                            <Nav.Link href="#offerRanking">
                                {labelNames.offerRanking[language]}
                            </Nav.Link>
                            <Nav.Link href="#salesChart">
                                {labelNames.salesChart[language]}
                            </Nav.Link>
                            <Nav.Link href="#salesTips">
                                {labelNames.salesTips[language]}
                            </Nav.Link>
                            <Nav.Link href="#action6">
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