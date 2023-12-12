
import React from "react";
import { FormattedMessage } from "react-intl";

export const widget_name = 'CustomerReviews';

const CustomerReviewsWidget = () => {
  return (
    <div>
      <h2>
        <FormattedMessage id="customer.reviews.widget.title" defaultMessage="CustomerReviews Widget" />
      </h2>
    </div>
  );
};

export default CustomerReviewsWidget;
