
import React from "react";
import { FormattedMessage } from "react-intl";

const OrdersWidget = () => {
  return (
    <div>
      <h2>
        <FormattedMessage id="orders.widget.title" defaultMessage="Orders Widget" />
      </h2>
    </div>
  );
};

export default OrdersWidget;
