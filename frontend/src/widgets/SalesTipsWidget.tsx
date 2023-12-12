
import React from "react";
import { FormattedMessage } from "react-intl";

export const widget_name = 'SalesTips';

const SalesTipsWidget = () => {
  return (
    <div>
      <h2>
        <FormattedMessage id="sales.tips.widget.title" defaultMessage="SalesTips Widget" />
      </h2>
    </div>
  );
};

export default SalesTipsWidget;
