import React from "react";
import "./styles/SalesQuality.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {FormattedMessage} from "react-intl";

function SalesQuality() {
    useDocumentTitle("Sales quality");

    return (
        <Container className="page-main-div">
            <Row>
                <Col>
                    <h1>
                        <FormattedMessage id={"sales-quality.title"} defaultMessage={"Sales quality"}/>
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export function salesQualityLoader() {
    return <></>;
}

export default SalesQuality;