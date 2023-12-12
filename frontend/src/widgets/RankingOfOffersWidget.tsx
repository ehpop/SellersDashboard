
import React from "react";
import { FormattedMessage } from "react-intl";

export const widget_name = 'RankingOfOffers';

const RankingOfOffersWidget = () => {
  return (
    <div>
      <h2>
        <FormattedMessage id="ranking.of.offers.widget.title" defaultMessage="RankingOfOffers Widget" />
      </h2>
    </div>
  );
};

export default RankingOfOffersWidget;
