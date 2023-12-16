import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bd-footer mt-5 pt-4 bg-body-tertiary">
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
                        <h5>
                            <FormattedMessage id="footer.links" defaultMessage="Links"/>
                        </h5>
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
                        <h5>
                            <FormattedMessage id="footer.contact" defaultMessage="Contact"/>
                        </h5>
                        <ul className="list-unstyled">
                            <li>
                                <FormattedMessage id="footer.email" defaultMessage="Email"/>: info@example.com
                            </li>
                            <li>
                                <FormattedMessage id="footer.phone" defaultMessage="Phone"/>: +123456789
                            </li>
                        </ul>


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
