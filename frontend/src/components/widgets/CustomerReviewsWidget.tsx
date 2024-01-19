import React, {useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";
import {Table} from "react-bootstrap";
import Form from "react-bootstrap/Form";

type ratingType = "all" | "positive" | "negative";

const CustomerReviewsWidget = () => {
    const customerReviews = [
        {
            "firstName": "John",
            "lastName": "Doe",
            "rating": 4,
            "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        },
        {
            "firstName": "Jane",
            "lastName": "Doe",
            "rating": 5,
            "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        },
        {
            "firstName": "John",
            "lastName": "Smith",
            "rating": 3,
            "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        },
        {
            "firstName": "Jane",
            "lastName": "Smith",
            "rating": 4,
            "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        },
        {
            "firstName": "John",
            "lastName": "Doe",
            "rating": 5,
            "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        }
    ];
    const [filter, setFilter] = useState<ratingType>("all");
    const [filteredCustomerReviews, setFilteredCustomerReviews] = useState(customerReviews);

    useEffect(() => {
        switch (filter) {
            case "all":
                setFilteredCustomerReviews(customerReviews);
                break;
            case "positive":
                setFilteredCustomerReviews(customerReviews.filter(customerReview => customerReview.rating >= 4));
                break;
            case "negative":
                setFilteredCustomerReviews(customerReviews.filter(customerReview => customerReview.rating < 4));
                break;
            default:
                setFilteredCustomerReviews(customerReviews);
                break;
        }
        setFilteredCustomerReviews(filteredCustomerReviews.slice(0, 5));
    }, [filter]);

    let table = (
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
                </tr>
            ))}
            </tbody>
        </Table>
    )
    const filterSwitch = (
        <Form className="d-flex m-2">
            <Form.Label className="me-4 w-100">
                <FormattedMessage id={"customer.reviews.widget.filter.label"} defaultMessage={"Filter reviews: "}/>
            </Form.Label>
            <Form.Select aria-label="Default select example" onChange={(event) => {
                setFilter(event.target.value as ratingType)
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
    )


    return (
        <>
            {filterSwitch}
            {
                table
            }
        </>
    );
};

export default CustomerReviewsWidget;
