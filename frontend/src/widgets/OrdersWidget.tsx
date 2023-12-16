import React from "react";
import {FormattedMessage} from "react-intl";
import Container from "react-bootstrap/Container";

const OrdersWidget = () => {
  return (
      <Container fluid>
      <h2>
          <FormattedMessage id="orders.widget.content" defaultMessage="Orders Widget"/>
      </h2>
      </Container>
  );
};

export default OrdersWidget;
