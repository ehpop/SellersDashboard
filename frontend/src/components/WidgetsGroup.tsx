import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomerReviewsWidget from "./widgets/CustomerReviewsWidget";
import OrdersWidget from "./widgets/OrdersWidget";
import RankingOfOffersWidget from "./widgets/RankingOfOffersWidget";
import SalesChartWidget from "./widgets/SalesChartWidget";
import SalesQualityWidget from "./widgets/SalesQualityWidget";
import SalesTipsWidget from "./widgets/SalesTipsWidget";
import {useIntl} from "react-intl";
import Container from "react-bootstrap/Container";
import React from "react";
import {Stack} from "react-bootstrap";

const WidgetsGroup = () => {
    const intl = useIntl();

    const widgets = [
        {
            "component": CustomerReviewsWidget,
            "name": intl.formatMessage({id: "customer.reviews.widget.content", defaultMessage: "Customer Reviews"})
        },
        {
            "component": OrdersWidget,
            "name": intl.formatMessage({id: "orders.widget.content", defaultMessage: "Orders"})
        },
        {
            "component": RankingOfOffersWidget,
            "name": intl.formatMessage({id: "ranking.of.offers.widget.content", defaultMessage: "Ranking of Offers"})
        },
        {
            "component": SalesChartWidget,
            "name": intl.formatMessage({id: "sales.chart.widget.content", defaultMessage: "Sales Chart"})
        },
        {
            "component": SalesQualityWidget,
            "name": intl.formatMessage({id: "sales.quality.widget.content", defaultMessage: "Sales Quality"})
        },
        {
            "component": SalesTipsWidget,
            "name": intl.formatMessage({id: "sales.tips.widget.content", defaultMessage: "Sales Tips"})
        },
    ];

    const mapWidgetToCard = (widget: any) => {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <h5>
                            {widget.name}
                        </h5>
                    </Card.Title>
                    {widget.component()}

                </Card.Body>
            </Card>
        );
    }

    return (
        <Container fluid>
            <Row>
                <Col lg={5}>
                    <Stack gap={2}>
                        {mapWidgetToCard({
                            "component": SalesChartWidget,
                            "name": intl.formatMessage({id: "sales.chart.widget.content", defaultMessage: "Sales Chart"})
                        })}
                        {mapWidgetToCard({
                            "component": CustomerReviewsWidget,
                            "name": intl.formatMessage({id: "customer.reviews.widget.content", defaultMessage: "Customer Reviews"})
                        })}

                    </Stack>
                </Col>
                <Col lg={4}>
                    <Stack gap={2}>
                        {mapWidgetToCard({
                            "component": RankingOfOffersWidget,
                            "name": intl.formatMessage({id: "ranking.of.offers.widget.content", defaultMessage: "Ranking of Offers"})
                        })}

                    </Stack>
                </Col>
                <Col>
                    <Stack gap={2}>
                        {mapWidgetToCard({
                            "component": SalesQualityWidget,
                            "name": intl.formatMessage({id: "sales.quality.widget.content", defaultMessage: "Sales Quality"})
                        })}
                        {mapWidgetToCard({
                            "component": SalesTipsWidget,
                            "name": intl.formatMessage({id: "sales.tips.widget.content", defaultMessage: "Sales Tips"})
                        })}
                        {mapWidgetToCard({
                            "component": OrdersWidget,
                            "name": intl.formatMessage({id: "orders.widget.content", defaultMessage: "Orders"})
                        })}
                    </Stack>
                </Col>
            </Row>
        </Container>
    );

}


export default WidgetsGroup;

/*
{widgets.map((widget, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h1>
                                    {widget.name}
                                </h1>
                            </Card.Title>
                            {widget.component()}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
 */
