import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useContext} from "react";
import {Dropdown, Image, Stack} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LocaleContext} from "./LocaleContext";
import ThemeContext from "./ThemeContext";
import {FormattedMessage} from "react-intl";
import {locales} from "../i18n/i18n-config";

import './styles/Header.css';

function Header() {
    const expand = 'lg';
    const {theme, setTheme} = useContext(ThemeContext);
    const {setLocale} = useContext(LocaleContext);

    const logoPath = theme === 'light'
        ? "logos/svg/logo-no-background.svg"
        : "logos/svg/logo-no-background-white.svg";

    return (
        <Navbar sticky="top" key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme={theme}>
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/home">
                    <Container fluid className="d-flex align-items-center">
                        <Image className="logo" src={logoPath} alt="logo"/>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    data-bs-theme={theme}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <FormattedMessage id={"app.title"} defaultMessage={"Offcanvas"}/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Stack direction="horizontal" gap={3}>
                            <Form className="d-flex vertical align-items-center">
                                <Form.Label className={`ms-2 mb-0 ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                    <FormattedMessage id={"lightTheme"} defaultMessage={"Light Theme"}/>
                                </Form.Label>
                                <Form.Check
                                    data-bs-theme={theme}
                                    type="switch"
                                    id="custom-switch"
                                    onChange={() => {
                                        setTheme(theme === 'light' ? 'dark' : 'light');
                                    }}
                                />
                                <Form.Label className={`ms-2 mb-0 ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                    <FormattedMessage id={"darkTheme"} defaultMessage={"Dark Theme"}/>
                                </Form.Label>
                            </Form>
                            <Form
                                className={`d-flex align-items-center ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                <Dropdown>
                                    <Dropdown.Toggle size="sm" variant="outline-success" id="dropdown-basic">
                                        <FormattedMessage id={"selectLanguageButtonLabel"} defaultMessage={"Language"}/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            Object.keys(locales).map((key) => (
                                                <Dropdown.Item
                                                    key={key}
                                                    onClick={() => {
                                                        setLocale(key as 'pl' | 'en');
                                                    }}
                                                >
                                                    {locales[key as 'pl' | 'en']?.name}
                                                </Dropdown.Item>
                                            ))
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </Stack>

                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={NavLink} to="/home">
                                <FormattedMessage id={"home"} defaultMessage={"Home"}/>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/orders">
                                <FormattedMessage id={"orders"} defaultMessage={"Orders"}/>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/salesQuality">
                                <FormattedMessage id={"salesQuality"} defaultMessage={"Sales Quality"}/>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/customerReviews">
                                <FormattedMessage id={"customerReviews"} defaultMessage={"Customer Reviews"}/>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/login">
                                <FormattedMessage id={"signIn"} defaultMessage={"Sing In"}/>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
}

export default Header;
