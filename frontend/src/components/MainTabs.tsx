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
                    <OrdersWidget/>
                </Tab>
                <Tab eventKey="customerReviews" title="Customer Reviews">
                    <CustomerReviewsWidget/>
                </Tab>
                <Tab eventKey="salesQuality" title="Sales Quality">
                    <SalesQualityWidget/>
                </Tab>
                <Tab eventKey="rankingOfOffers" title="Ranking Of Offers">
                    <RankingOfOffersWidget/>
                </Tab>
                <Tab eventKey="salesChart" title="Sales Chart">
                    <SalesChartWidget/>
                </Tab>
                <Tab eventKey="salesTips" title="Sales Tips">
                    <SalesTipsWidget/>
                </Tab>
            </Tabs>
        </Container>

    );
}

export default MainTabs;
