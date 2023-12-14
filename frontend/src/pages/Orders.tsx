import React from "react";
import "./styles/Orders.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import {Col, Row} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import Container from "react-bootstrap/Container";

function Orders() {
    useDocumentTitle("Orders");

    return (
        <Container className="page-main-div">
            <Row>
                <Col>
                    <h1>
                        <FormattedMessage id={"orders.title"} defaultMessage={"Orders"}/>
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export function ordersLoader() {
    return <h1>loader</h1>;
}

export default Orders;