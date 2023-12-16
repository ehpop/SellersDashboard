import React from "react";
import {FormattedMessage} from "react-intl";

const SalesQualityWidget = () => {
  return (
    <div>
      <h2>
          <FormattedMessage id="sales.quality.widget.content" defaultMessage="Sales Quality"/>
      </h2>
    </div>
  );
};

export default SalesQualityWidget;
