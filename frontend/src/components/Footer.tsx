import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Sales Portal Pro</h5>
                        <p>
                            <FormattedMessage id="footer.description"
                                              defaultMessage="Sales Portal Pro is a web application that helps you to manage your sales."/>
                        </p>
                    </Col>
                    <Col md={3}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to={"/home"}>
                                    <FormattedMessage id="footer.home" defaultMessage="Home"/>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"}>
                                    <FormattedMessage id="footer.about" defaultMessage="About"/>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>
                                    <FormattedMessage id="footer.contact" defaultMessage="Contact"/>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123456789</p>
                    </Col>
                </Row>
            </Container>
            <div className="text-center py-3">
                <p>&copy; {new Date().getFullYear()} Sales Portal Pro. No rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
