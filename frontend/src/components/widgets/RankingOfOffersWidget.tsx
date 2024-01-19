import React, {useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";
import Form from "react-bootstrap/Form";
import {Table} from "react-bootstrap";

type offer = {
    name: string,
    thumbnail: string,
    soldUnits: number,
    revenue: number,
    uniqueViews: number
}
type sortType = "Most frequently bought" | "Rarely bought";

const offers: Array<offer> = [
    {
        name: "Far Cry 5",
        thumbnail: "https://images.morele.net/i256/977348_0_i256.jpg",
        soldUnits: 100,
        revenue: 2000,
        uniqueViews: 500
    },
    {
        name: "Star Wars Jedi Fallen Order",
        thumbnail: "https://images.morele.net/i256/6315756_0_i256.jpg",
        soldUnits: 80,
        revenue: 1500,
        uniqueViews: 450
    },
    {
        name: "Need for speed payback",
        thumbnail: "https://images.morele.net/i256/978932_0_i256.jpg",
        soldUnits: 60,
        revenue: 1000,
        uniqueViews: 350
    },
    {
        name: "Battlefield 2042",
        thumbnail: "https://images.morele.net/i256/5948812_0_i256.jpg",
        soldUnits: 40,
        revenue: 500,
        uniqueViews: 250
    },
    {
        name: "Tom Clancy' s The Division",
        thumbnail: "https://images.morele.net/i256/773470_0_i256.jpeg",
        soldUnits: 20,
        revenue: 250,
        uniqueViews: 150
    },
    {
        name: "Tom Clancy' s Rainbow Six Siege",
        thumbnail: "https://images.morele.net/i256/826499_0_i256.jpeg",
        soldUnits: 10,
        revenue: 100,
        uniqueViews: 50
    },
    {
        name: "Dying Light",
        thumbnail: "https://images.morele.net/i256/720980_0_i256.jpeg",
        soldUnits: 5,
        revenue: 50,
        uniqueViews: 25
    },
    {
        name: "Assassin' s Creed Odyssey",
        thumbnail: "https://images.morele.net/i256/4140983_0_i256.jpg",
        soldUnits: 2,
        revenue: 25,
        uniqueViews: 10
    },
];


const RankingOfOffersWidget = () => {
    const [sortedOffers, setSortedOffers] = useState<Array<offer>>(offers);
    const [sortType, setSortType] = useState<string>("Most frequently bought");

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
    }, [sortType]);

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
