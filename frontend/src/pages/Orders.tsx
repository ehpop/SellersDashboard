import React from "react";
import "./styles/Orders.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import {Col, Row} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";

function Orders() {
    useDocumentTitle("Orders");
    const {orderStatus} = useParams()

    return (
        <Container className="page-main-div">
            <Row>
                <Col>
                    <h1>
                        <FormattedMessage id={"orders.title"} defaultMessage={"Orders"}/>
                    </h1>
                    {
                        orderStatus &&
                        <h2>
                            <FormattedMessage id={orderStatus} defaultMessage={orderStatus}/>
                        </h2>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export function ordersLoader() {
    return <h1>loader</h1>;
}

export default Orders;
