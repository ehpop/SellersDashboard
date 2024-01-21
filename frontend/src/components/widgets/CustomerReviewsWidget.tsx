import React, {useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";
import {Button, Table} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

type ratingType = "all" | "positive" | "negative";
type customerReviewType = {
    firstName: string,
    lastName: string,
    rating: number,
    comment: string,
    date: Date
}

const CustomerReviewsWidget = () => {
    const customerReviews: Array<customerReviewType> = [
        {
            "firstName": "Jan",
            "lastName": "Nowakowski",
            "rating": 4,
            "comment": "Solidny zakup. Dobra wartość za pieniądze.",
            "date": new Date("2024-01-06")
        },
        {
            "firstName": "Jane",
            "lastName": "Doe",
            "rating": 5,
            "comment": "Great product! It exceeded my expectations. I would recommend it to anyone.",
            "date": new Date("2024-01-01")
        },
        {
            "firstName": "John",
            "lastName": "Smith",
            "rating": 3,
            "comment": "Average experience. Could be better, could be worse.",
            "date": new Date("2024-01-02")
        },
        {
            "firstName": "Jane",
            "lastName": "Smith",
            "rating": 4,
            "comment": "Outstanding product! I'm amazed by the quality and performance. One issue though - the delivery was late.",
            "date": new Date("2024-01-03")
        },
        {
            "firstName": "Kamil",
            "lastName": "Kowalski",
            "rating": 5,
            "comment": "Fantastyczna obsługa! Szybka dostawa i najwyższa jakość.",
            "date": new Date("2024-01-04")
        },
        {
            "firstName": "Anna",
            "lastName": "Nowak",
            "rating": 1,
            "comment": "Bardzo rozczarowana. Słaba jakość i nie warta ceny.",
            "date": new Date("2024-01-05")
        },
        {
            "firstName": "Janina",
            "lastName": "Nawalska",
            "rating": 2,
            "comment": "Niestety produkt nie spełnił moich oczekiwań. Nie polecam. Przynajmniej dostawa była szybka.",
            "date": new Date("2024-01-05")
        },
        {
            "firstName": "Mariusz",
            "lastName": "Dzieliński",
            "rating": 4,
            "comment": "Naprawdę porządny produkt, szkoda że tak drogo. Polecam.",
            "date": new Date("2024-01-06")
        },
        {
            "firstName": "Katarzyna",
            "lastName": "Dziewulska",
            "rating": 5,
            "comment": "Super produkt! Polecam każdemu.",
            "date": new Date("2024-01-07")
        },
        {
            "firstName": "Krzysztof",
            "lastName": "Kowal",
            "rating": 3,
            "comment": "Średni produkt. Nie polecam.",
            "date": new Date("2024-01-08")
        },
        {
            "firstName": "Stanley",
            "lastName": "Smith",
            "rating": 1,
            "comment": "Poor quality. I'm disappointed.",
            "date": new Date("2024-01-09")
        },
        {
            "firstName": "Jim",
            "lastName": "Hudson",
            "rating": 2,
            "comment": "Not worth the money. I'm disappointed.",
            "date": new Date("2024-01-10")

        }

    ];
    const [filter, setFilter] = useState<ratingType>("all");
    const [filteredCustomerReviews, setFilteredCustomerReviews] = useState(customerReviews);

    useEffect(() => {
        const sortedReviews = customerReviews.sort((a, b) => b.date?.getTime() - a.date?.getTime());
        switch (filter) {
            case "all":
                setFilteredCustomerReviews(sortedReviews.slice(0, 5));
                break;
            case "positive":
                setFilteredCustomerReviews(sortedReviews.filter(customerReview => customerReview.rating >= 4).slice(0, 5));
                break;
            case "negative":
                setFilteredCustomerReviews(sortedReviews.filter(customerReview => customerReview.rating < 4).slice(0, 5));
                break;
            default:
                setFilteredCustomerReviews(sortedReviews);
                break;
        }
    }, [filter]);

    const filterSwitch = (
        <Form className="m-2 d-flex align-items-center">
            <Form.Label className="me-1 mb-0" style={{whiteSpace: 'nowrap'}}>
                <h6>
                    <FormattedMessage id={"customer.reviews.widget.filter.label"} defaultMessage={"Filter reviews: "}/>
                </h6>
            </Form.Label>
            <Form.Select aria-label="Select reviews" size="sm" onChange={(event) => {
                setFilter(event.target.value as ratingType);
            }}>
                <option value="all">
                    <FormattedMessage id={"customer.reviews.widget.filter.all"} defaultMessage={"All"}/>
                </option>
                <option value="positive">
                    <FormattedMessage id={"customer.reviews.widget.filter.positive"} defaultMessage={"Positive"}/>
                </option>
                <option value="negative">
                    <FormattedMessage id={"customer.reviews.widget.filter.negative"} defaultMessage={"Negative"}/>
                </option>
            </Form.Select>
        </Form>
    );


    const noReviewsToPresent = (
        <div className="m-5">
            <h2>
                <FormattedMessage id="customer.reviews.widget.no.reviews" defaultMessage="No reviews to present"/>
            </h2>
        </div>
    )

    const noReviewsToPresentWithFilter = (
        <div className="m-5">
            <h2>
                <FormattedMessage id="customer.reviews.widget.no.reviews.with.filters"
                                  defaultMessage="No reviews to present with current filters"/>
            </h2>
        </div>
    )

    const customerReviewsTable = (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th><FormattedMessage id={"customer.reviews.widget.table.header.firstName"}
                                      defaultMessage={"First Name"}/></th>
                <th><FormattedMessage id={"customer.reviews.widget.table.header.lastName"}
                                      defaultMessage={"Last Name"}/></th>
                <th><FormattedMessage id={"customer.reviews.widget.table.header.rating"} defaultMessage={"Rating"}/>
                </th>
                <th><FormattedMessage id={"customer.reviews.widget.table.header.comment"}
                                      defaultMessage={"Comment"}/></th>
                <th>
                    <FormattedMessage id={"customer.reviews.widget.table.header.date"} defaultMessage={"Date"}/>
                </th>
            </tr>
            </thead>
            <tbody>
            {filteredCustomerReviews.map((customerReview, idx) => (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{customerReview.firstName}</td>
                    <td>{customerReview.lastName}</td>
                    <td>{customerReview.rating}</td>
                    <td>{customerReview.comment}</td>
                    <td>{customerReview.date.toLocaleDateString()}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )

    const customerReviewsWidget = (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {filterSwitch}
            {
                filteredCustomerReviews.length === 0
                    ? noReviewsToPresentWithFilter
                    : customerReviewsTable
            }
        </div>
    )


    return (
        <>
            {
                customerReviews.length === 0
                    ? noReviewsToPresent
                    : customerReviewsWidget
            }
            {
                <Link to="/customerReviews">
                    <Button variant="primary" type="submit">
                        <FormattedMessage id={"customer.reviews.widget.button.label"}
                                          defaultMessage={"Go to reviews page"}/>
                    </Button>
                </Link>
            }
        </>
    );
};

export default CustomerReviewsWidget;
