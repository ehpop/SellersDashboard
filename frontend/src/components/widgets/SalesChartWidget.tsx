import React from "react";
import {FormattedMessage} from "react-intl";

const SalesChartWidget = () => {
  return (
    <div>
      <h2>
          <FormattedMessage id="sales.chart.widget.content" defaultMessage="Sales Chart"/>
      </h2>
    </div>
  );
};

export default SalesChartWidget;
