import React, {useContext, useEffect} from "react";
import {FormattedMessage, useIntl} from "react-intl";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import WorstAspectsContext from "../../context/WorstAspectsContext";

export type SellersAspectName =
    "Communication"
    | "Knowledge"
    | "Friendliness"
    | "Helpfulness"
    | "Professionalism"
    | "Punctuality"
    | "Responsiveness"
    | "Salesmanship"
    | "Courtesy";

export type SellersAspect = {
    aspectName: SellersAspectName;
    weight: number;
    rating: number;
};

type SellersGrade = "Excellent" | "Good" | "Average" | "Poor" | "Very Poor";

const sellersAspects: SellersAspect[] = [
    {aspectName: "Communication", weight: 5, rating: 3},
    {aspectName: "Knowledge", weight: 4, rating: 2},
    {aspectName: "Friendliness", weight: 3, rating: 4},
    {aspectName: "Helpfulness", weight: 4, rating: 3},
    {aspectName: "Professionalism", weight: 5, rating: 2},
    {aspectName: "Punctuality", weight: 3, rating: 2},
    {aspectName: "Responsiveness", weight: 4, rating: 4},
    {aspectName: "Salesmanship", weight: 3, rating: 3},
    {aspectName: "Courtesy", weight: 4, rating: 4},
];

function getScoreBasedOnAspects(sellersAspects: Array<SellersAspect>): { score: number, maxScore: number } {
    let score = 0;
    let maxScore = 0;
    for (let aspect of sellersAspects) {
        score += aspect.rating;
        maxScore += aspect.weight;
    }
    return {
        score: score,
        maxScore: maxScore
    };
}

function getWorstsAspects(sellersAspects: Array<SellersAspect>): Array<SellersAspect> {
    return sellersAspects.sort((a, b) => {
        return a.rating - b.rating
    }).slice(0, 3);
}

function getGradeBasedOnAspects(sellersAspects: Array<SellersAspect>): SellersGrade {
    const {score, maxScore} = getScoreBasedOnAspects(sellersAspects);
    const averageScore = Math.floor((score / maxScore) * 5);
    switch (averageScore) {
        case 0:
            return "Very Poor" as SellersGrade;
        case 1:
            return "Poor" as SellersGrade;
        case 2:
            return "Average" as SellersGrade;
        case 3:
            return "Good" as SellersGrade;
        case 4:
        case 5:
            return "Excellent" as SellersGrade;
        default:
            return "Average" as SellersGrade;

    }
}

const SalesQualityWidget = () => {
    const worstAspectsContext = useContext(WorstAspectsContext);

    const {score, maxScore} = getScoreBasedOnAspects(sellersAspects);
    const grade = getGradeBasedOnAspects(sellersAspects);
    const worstAspects = getWorstsAspects(sellersAspects);
    const intl = useIntl();

    useEffect(() => {
        worstAspectsContext.setWorstAspects(worstAspects);
    }, []);

    const translateGrad = (grade: SellersGrade) => {
        switch (grade) {
            case "Excellent":
                return intl.formatMessage({id: "sales.quality.widget.grade.excellent", defaultMessage: "Excellent"});
            case "Good":
                return intl.formatMessage({id: "sales.quality.widget.grade.good", defaultMessage: "Good"});
            case "Average":
                return intl.formatMessage({id: "sales.quality.widget.grade.average", defaultMessage: "Average"});
            case "Poor":
                return intl.formatMessage({id: "sales.quality.widget.grade.poor", defaultMessage: "Poor"});
            case "Very Poor":
                return intl.formatMessage({id: "sales.quality.widget.grade.very.poor", defaultMessage: "Very Poor"});
            default:
                return intl.formatMessage({id: "sales.quality.widget.grade.average", defaultMessage: "Average"});
        }
    }
    const translateAspect = (aspect: SellersAspectName) => {
        switch (aspect) {
            case "Communication":
                return intl.formatMessage({id: "sales.quality.widget.aspect.communication", defaultMessage: "Communication"});
            case "Knowledge":
                return intl.formatMessage({id: "sales.quality.widget.aspect.knowledge", defaultMessage: "Knowledge"});
            case "Friendliness":
                return intl.formatMessage({id: "sales.quality.widget.aspect.friendliness", defaultMessage: "Friendliness"});
            case "Helpfulness":
                return intl.formatMessage({id: "sales.quality.widget.aspect.helpfulness", defaultMessage: "Helpfulness"});
            case "Professionalism":
                return intl.formatMessage({id: "sales.quality.widget.aspect.professionalism", defaultMessage: "Professionalism"});
            case "Punctuality":
                return intl.formatMessage({id: "sales.quality.widget.aspect.punctuality", defaultMessage: "Punctuality"});
            case "Responsiveness":
                return intl.formatMessage({id: "sales.quality.widget.aspect.responsiveness", defaultMessage: "Responsiveness"});
            case "Salesmanship":
                return intl.formatMessage({id: "sales.quality.widget.aspect.salesmanship", defaultMessage: "Salesmanship"});
            case "Courtesy":
                return intl.formatMessage({id: "sales.quality.widget.aspect.courtesy", defaultMessage: "Courtesy"});
            default:
                return intl.formatMessage({id: "sales.quality.widget.aspect.communication", defaultMessage: "Communication"});
        }
    }

    const scoreTable = (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="sales.quality.widget.table.grade" defaultMessage="Grade"/>
                </th>
                <th>
                    <FormattedMessage id="sales.quality.widget.table.score" defaultMessage="Score"/>
                </th>
                <th>
                    <FormattedMessage id="sales.quality.widget.table.max" defaultMessage="Max"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    {translateGrad(grade)}
                </td>
                <td>
                    {score}
                </td>
                <td>
                    {maxScore}
                </td>
            </tr>
            </tbody>
        </Table>
    )

    const worstAspectsTable = (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="sales.quality.widget.table.aspect" defaultMessage="Aspect"/>
                </th>
                <th>
                    <FormattedMessage id="sales.quality.widget.table.rating" defaultMessage="Rating"/>
                </th>
                <th>
                    <FormattedMessage id="sales.quality.widget.table.weight" defaultMessage="Weight"/>
                </th>
            </tr>
            </thead>
            <tbody>
            {worstAspects.map((aspect, index) => (
                <tr key={index}>
                    <td>
                        {translateAspect(aspect.aspectName)}
                    </td>
                    <td>
                        {aspect.rating}
                    </td>
                    <td>
                        {aspect.weight}
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    )

    const salesQualityWidget = (
        <>
            {scoreTable}
            <h5>
                <FormattedMessage id="sales.quality.widget.worst.aspects" defaultMessage="Worst Aspects"/>
            </h5>
            {worstAspectsTable}
            {
                <Link to="/salesQuality">
                    <Button variant="primary" type="submit">
                        <FormattedMessage id={"sales.quality.widget.button.label"}
                                          defaultMessage={"Go to sales quality page"}/>
                    </Button>
                </Link>
            }
        </>
    )

    const noSalesQualityToPresent = (
        <h5>
            <FormattedMessage id="sales.quality.widget.no.sales.quality" defaultMessage="No sales quality to present"/>
        </h5>
    )

    return (
        sellersAspects.length === 0
            ? noSalesQualityToPresent
            : salesQualityWidget
    );
};

export default SalesQualityWidget;
