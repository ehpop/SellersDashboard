import React from "react";
import {FormattedMessage} from "react-intl";

const CustomerReviewsWidget = () => {
  return (
    <div>
      <h2>
          <FormattedMessage id="customer.reviews.widget.content" defaultMessage="Customer Reviews"/>
      </h2>
    </div>
  );
};

export default CustomerReviewsWidget;
