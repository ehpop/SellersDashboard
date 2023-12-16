import React from "react";
import {FormattedMessage} from "react-intl";

const SalesTipsWidget = () => {
    return (
        <div>
            <h2>
                <FormattedMessage id="sales.tips.widget.content" defaultMessage="Sales Tips"/>
            </h2>
        </div>
    );
};

export default SalesTipsWidget;
