import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from "react";

function Header() {
    const expand = 'lg';
    const [theme, setTheme] = useState('dark');

    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme={theme}>
            <Container fluid>
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
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
                        {theme === 'light' ? 'Light' : 'Dark'}
                    </Form.Label>
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
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#orders">Orders</Nav.Link>
                            <Nav.Link href="#salesQuality">Sales Quality</Nav.Link>
                            <Nav.Link href="#customerReviews">Customer Reviews</Nav.Link>
                            <Nav.Link href="#offerRanking">Offer Ranking</Nav.Link>
                            <Nav.Link href="#salesChart">Sales Chart</Nav.Link>
                            <Nav.Link href="#salesTips">Sales Tips</Nav.Link>
                            <Nav.Link href="#action6">Sing in</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
}

export default Header;