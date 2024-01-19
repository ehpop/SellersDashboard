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
    return (
        <Row xs={1} md={2} className="g-4">
            {widgets.map((widget, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {widget.name}
                            </Card.Title>
                            {widget.component()}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );

}


export default WidgetsGroup;
