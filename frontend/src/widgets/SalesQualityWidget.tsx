
import React from "react";
import { FormattedMessage } from "react-intl";

export const widget_name = 'SalesQuality';

const SalesQualityWidget = () => {
  return (
    <div>
      <h2>
        <FormattedMessage id="sales.quality.widget.title" defaultMessage="SalesQuality Widget" />
      </h2>
    </div>
  );
};

export default SalesQualityWidget;
