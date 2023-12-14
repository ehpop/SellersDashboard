import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import {Col, Row} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import Container from "react-bootstrap/Container";

function CustomerReviews() {
    useDocumentTitle("Customer reviews");

    return (
        <Container className="page-main-div">
            <Row>
                <Col>
                    <h1>
                        <FormattedMessage id={"customer.reviews.title"} defaultMessage={"Customer Reviews"}/>
                    </h1>
                </Col>
            </Row>
        </Container>
    );

}


export function customerReviewsLoader() {
    return <></>;
}

export default CustomerReviews;