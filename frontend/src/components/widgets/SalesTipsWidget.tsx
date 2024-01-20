import React, {useContext} from "react";
import {FormattedMessage} from "react-intl";
import WorstAspectsContext from "../../context/WorstAspectsContext";
import {SellersAspect, SellersAspectName} from "./SalesQualityWidget";
import {Table} from "react-bootstrap";

type SellersTip = {
    aspectName: SellersAspectName;
    tip: any;
};

function mapAspectToTip(aspectName: SellersAspectName): SellersTip {
    switch (aspectName) {
        case "Communication":
            return {
                aspectName: "Communication",
                tip: <FormattedMessage id="sales.tips.widget.communication"
                                       defaultMessage="You should improve your communication."/>
            };
        case "Courtesy":
            return {
                aspectName: "Courtesy",
                tip: <FormattedMessage id="sales.tips.widget.courtesy"
                                       defaultMessage="You should improve your courtesy."/>
            };
        case "Friendliness":
            return {
                aspectName: "Friendliness",
                tip: <FormattedMessage id="sales.tips.widget.friendliness"
                                       defaultMessage="You should improve your friendliness."/>
            };
        case "Helpfulness":
            return {
                aspectName: "Helpfulness",
                tip: <FormattedMessage id="sales.tips.widget.helpfulness"
                                       defaultMessage="You should improve your helpfulness."/>
            };
        case "Knowledge":
            return {
                aspectName: "Knowledge",
                tip: <FormattedMessage id="sales.tips.widget.knowledge"
                                       defaultMessage="You should improve your knowledge."/>
            };
        case "Professionalism":
            return {
                aspectName: "Professionalism",
                tip: <FormattedMessage id="sales.tips.widget.professionalism"
                                       defaultMessage="You should improve your professionalism."/>
            };
        case "Punctuality":
            return {
                aspectName: "Punctuality",
                tip: <FormattedMessage id="sales.tips.widget.punctuality"
                                       defaultMessage="You should improve your punctuality."/>
            };
        case "Responsiveness":
            return {
                aspectName: "Responsiveness",
                tip: <FormattedMessage id="sales.tips.widget.responsiveness"
                                       defaultMessage="You should improve your responsiveness."/>
            };
        case "Salesmanship":
            return {
                aspectName: "Salesmanship",
                tip: <FormattedMessage id="sales.tips.widget.salesmanship"
                                       defaultMessage="You should improve your salesmanship."/>
            };
    }
}

function mapAspectsToTips(aspects: Array<SellersAspect>): Array<SellersTip> {
    return aspects.map((aspect) => aspect.aspectName).map(mapAspectToTip);
}

const SalesTipsWidget = () => {
    const worstAspectsContext = useContext(WorstAspectsContext);
    const worstAspects = worstAspectsContext.worstAspects;

    const tips = mapAspectsToTips(worstAspects);

    const tipsTable = (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>
                    <FormattedMessage
                        id="sales.quality.widget.table.aspect"
                        defaultMessage="Aspect"
                    />
                </th>
                <th>
                    <FormattedMessage
                        id="sales.tips.widget.table.tip"
                        defaultMessage="Tip"
                    />
                </th>
            </tr>
            </thead>
            <tbody>
            {tips.map((tip, index) => (
                <tr key={index}>
                    <td>
                        {<FormattedMessage id={`sales.quality.widget.aspect.${tip.aspectName.toLowerCase()}`}/>}
                    </td>
                    <td>{tip.tip}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );

    const noTips = (
        <h5>
            <FormattedMessage
                id="sales.tips.widget.no.tips"
                defaultMessage="No tips for you!"
            />
        </h5>
    );

    return tips.length === 0 ? noTips : tipsTable;
};

export default SalesTipsWidget;
