import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OrdersWidget from "../widgets/OrdersWidget";
import CustomerReviewsWidget from "../widgets/CustomerReviewsWidget";
import SalesQualityWidget from "../widgets/SalesQualityWidget";
import RankingOfOffersWidget from "../widgets/RankingOfOffersWidget";
import SalesChartWidget from "../widgets/SalesChartWidget";
import SalesTipsWidget from "../widgets/SalesTipsWidget";
import ThemeContext from "../context/ThemeContext";

import "./styles/MainTabs.css";
import Container from "react-bootstrap/Container";

const MainTabs = () => {
    const {theme} = React.useContext(ThemeContext);

    return (
        <Container fluid>
            <Tabs
                defaultActiveKey="orders"
                id="main-tabs"
                className="mb-5"
                data-bs-theme={theme}
                fill
            >
                <Tab eventKey="orders" title="Orders">
                    <Container className="widget">
                        <OrdersWidget/>
                    </Container>
                </Tab>
                <Tab eventKey="customerReviews" title="Customer Reviews">
                    <Container className="widget">
                        <CustomerReviewsWidget/>
                    </Container>
                </Tab>
                <Tab eventKey="salesQuality" title="Sales Quality">
                    <Container className="widget">
                        <SalesQualityWidget/>
                    </Container>
                </Tab>
                <Tab eventKey="rankingOfOffers" title="Ranking Of Offers">
                    <Container className="widget">
                        <RankingOfOffersWidget/>
                    </Container>
                </Tab>
                <Tab eventKey="salesChart" title="Sales Chart">
                    <Container className="widget">
                        <SalesChartWidget/>
                    </Container>
                </Tab>
                <Tab eventKey="salesTips" title="Sales Tips">
                    <Container className="widget">
                        <SalesTipsWidget/>
                    </Container>
                </Tab>
            </Tabs>
        </Container>

    );
}

export default MainTabs;
