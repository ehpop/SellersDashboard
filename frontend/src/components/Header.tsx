import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useContext, useEffect, useState} from "react";
import {Button, Dropdown, Image, Stack} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LocaleContext} from "../context/LocaleContext";
import ThemeContext from "../context/ThemeContext";
import {FormattedMessage} from "react-intl";
import {locales} from "../lang/i18n/i18n-config";
import {users} from "../data/mockAccounts";

import './styles/Header.css';
import AuthContext from "../context/AuthContext";

function Header() {
    const expand = 'lg';
    const {theme, setTheme} = useContext(ThemeContext);
    const {locale, setLocale} = useContext(LocaleContext);
    const {account, setAccount} = useContext(AuthContext);
    const {user, setUser} = useContext(AuthContext);
    const {auth, setAuth} = useContext(AuthContext);

    const [linkedAccounts, setLinkedAccounts] = useState<Array<string>>([]);

    useEffect(() => {
        const foundUser = users.filter((userObject) => userObject.username === user)[0];
        if (foundUser) {
            setLinkedAccounts(foundUser.linkedAccounts);
        }
    }, [user]);

    const logoPath = theme === 'light'
        ? "logos/svg/logo-no-background.svg"
        : "logos/svg/logo-no-background-white.svg";

    const setThemeIcon = theme === 'light'
        ? "icons/svg/sun.svg"
        : "icons/svg/moon.svg";

    const handleLogout = () => {
        setAuth(false);
        setUser(null);
        setAccount(null);
    }

    console.log("Header: ", auth, account, user)

    return (
        <Navbar sticky="top" key={expand} expand={expand} className="bg-body-tertiary mb-2" data-bs-theme={theme}>
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
                            <Button variant="link" onClick={() => {
                                setTheme(theme === 'light' ? 'dark' : 'light');
                            }}>
                                <Image className="theme-icon" src={setThemeIcon} alt="theme-icon"/>
                            </Button>
                            <Form
                                className={`d-flex align-items-center ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <FormattedMessage id={"selectLanguageButtonLabel"} defaultMessage={"Language"}/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            Object.keys(locales).map((key) => (
                                                <Dropdown.Item
                                                    key={key}
                                                    className={locale === key ? 'active-dropdown-item' : ''}
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
                            {auth && linkedAccounts &&
                                <Form
                                    className={`d-flex align-items-center ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-account">
                                            <FormattedMessage id={"selectAccountButton"}
                                                              defaultMessage={"Select account"}/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {
                                                linkedAccounts.map((accountInList, index) => (
                                                    <Dropdown.Item
                                                        key={index}
                                                        className={account === accountInList ? 'active-dropdown-item' : ''}
                                                        onClick={() => {
                                                            setAccount(accountInList);
                                                        }}
                                                    >
                                                        {accountInList}
                                                    </Dropdown.Item>
                                                ))
                                            }

                                        </Dropdown.Menu>

                                    </Dropdown>
                                </Form>
                            }
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
                            {
                                auth
                                    ? (
                                        <Nav.Link onClick={handleLogout}>
                                            <FormattedMessage id={"logout"} defaultMessage={"Logout"}/>
                                        </Nav.Link>
                                    )
                                    : (
                                        <Nav.Link as={NavLink} to="/login">
                                            <FormattedMessage id={"signIn"} defaultMessage={"Sing In"}/>
                                        </Nav.Link>
                                    )
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
}

export default Header;
