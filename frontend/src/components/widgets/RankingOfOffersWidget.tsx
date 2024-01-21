import React, {useContext, useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";
import Form from "react-bootstrap/Form";
import {Table} from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import {mockRankingForAllUsers, offer} from "../../data/mockRanking";
import "./styles/RankingOfOffersWidget.css";


type sortType = "Most frequently bought" | "Rarely bought";

const RankingOfOffersWidget = () => {
    const {account} = useContext(AuthContext);

    const [sortedOffers, setSortedOffers] = useState<Array<offer>>([]);
    const [sortType, setSortType] = useState<string>("Most frequently bought");
    const [offers, setOffers] = useState<Array<offer>>([]);

    useEffect(() => {
        if (account) {
            setOffers(mockRankingForAllUsers[account])
        }
    }, [account]);

    useEffect(() => {
        const offersToSort = offers;
        switch (sortType) {
            case "Most frequently bought":
                offersToSort.sort((a, b) => b.revenue - a.revenue);
                offersToSort.sort((a, b) => b.soldUnits - a.soldUnits);
                setSortedOffers(offersToSort.slice(0, 5));
                break;
            case "Rarely bought":
                offersToSort.sort((a, b) => b.uniqueViews - a.uniqueViews);
                offersToSort.sort((a, b) => a.soldUnits - b.soldUnits);
                setSortedOffers(offersToSort.slice(0, 5));
                break;
            default:
                setSortedOffers(sortedOffers);
                break;
        }
    }, [sortType, offers]);

    const noOffersToPresent = (
        <div>
            <h2>
                <FormattedMessage id="ranking.of.offers.widget.no.offers" defaultMessage="No offers to present"/>
            </h2>
        </div>
    )

    const SortOfferHeader = (
        <Form className="d-flex m-2">
            <Form.Label className="me-1 w-100">
                <h5>
                    <FormattedMessage id={"ranking.of.offers.widget.label.sorter"} defaultMessage={"Sort offers by: "}/>
                </h5>
            </Form.Label>
            <Form.Select aria-label="Sort offers by" onChange={(event) => {
                setSortType(event.target.value as sortType);
            }}>
                <option value="Most frequently bought">
                    <FormattedMessage id={"ranking.of.offers.widget.label.all"}
                                      defaultMessage={"Most frequently bought"}/>
                </option>
                <option value="Rarely bought">
                    <FormattedMessage id={"ranking.of.offers.widget.label.positive"} defaultMessage={"Rarely bought"}/>
                </option>
            </Form.Select>
        </Form>
    )

    const offersTable = (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th><FormattedMessage id={"ranking.of.offers.widget.table.header.name"} defaultMessage={"Name"}/></th>
                <th><FormattedMessage id={"ranking.of.offers.widget.table.header.thumbnail"}
                                      defaultMessage={"Thumbnail"}/></th>
                <th><FormattedMessage id={"ranking.of.offers.widget.table.header.soldUnits"}
                                      defaultMessage={"Sold units"}/></th>

                {
                    sortType === "Most frequently bought"
                        ? <th><FormattedMessage id={"ranking.of.offers.widget.table.header.revenue"}
                                                defaultMessage={"Revenue"}/></th>
                        : <th><FormattedMessage id={"ranking.of.offers.widget.table.header.uniqueViews"}
                                                defaultMessage={"Unique views"}/></th>

                }
            </tr>
            </thead>
            <tbody>
            {sortedOffers.length === 0 ? noOffersToPresent : sortedOffers.map((offer, idx) => (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{offer.name}</td>
                    <td><img src={offer.thumbnail} alt={offer.name} style={{width: "100px"}}/></td>
                    <td>{offer.uniqueViews}</td>
                    {
                        sortType === "Most frequently bought" ?
                            <td>{offer.revenue}</td>
                            :
                            <td>{offer.soldUnits}</td>
                    }
                </tr>
            ))}
            </tbody>
        </Table>
    )

    return (
        <>
            {SortOfferHeader}
            {offersTable}
        </>
    );
};

export default RankingOfOffersWidget;
