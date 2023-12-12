
import React from "react";
import { FormattedMessage } from "react-intl";

export const widget_name = 'SalesChart';

const SalesChartWidget = () => {
  return (
    <div>
      <h2>
        <FormattedMessage id="sales.chart.widget.title" defaultMessage="SalesChart Widget" />
      </h2>
    </div>
  );
};

export default SalesChartWidget;
