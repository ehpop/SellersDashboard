import React from "react";
import {FormattedMessage} from "react-intl";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

type orderStatusType = "waiting for payment" | "not sent" | "returned";
type orderType = {
    id: number,
    status: orderStatusType,
    date: Date,
}
type orderCountType = {
    [key in orderStatusType]: number
}

const orders: Array<orderType> = [
    {
        id: 1,
        status: "waiting for payment",
        date: new Date("2024-01-01")
    },
    {
        id: 2,
        status: "not sent",
        date: new Date("2024-01-02")
    },
    {
        id: 3,
        status: "returned",
        date: new Date("2024-01-03")
    },
    {
        id: 4,
        status: "waiting for payment",
        date: new Date("2024-01-04")
    },
    {
        id: 5,
        status: "not sent",
        date: new Date("2024-01-05")
    },
    {
        id: 6,
        status: "returned",
        date: new Date("2024-01-06")
    }
];


const OrdersWidget = () => {
    const orderCounts: orderCountType = {
        "waiting for payment": 0,
        "not sent": 0,
        "returned": 0,
    }

    orders.forEach((order) => {
        orderCounts[order.status] += 1;
    });

    const translateOrderStatus = (orderStatus: orderStatusType) => {
        switch (orderStatus) {
            case "waiting for payment":
                return <FormattedMessage id={"waiting for payment"} defaultMessage={"Waiting for payment"}/>
            case "not sent":
                return <FormattedMessage id={"not sent"} defaultMessage={"Not sent"}/>
            case "returned":
                return <FormattedMessage id={"returned"} defaultMessage={"Returned"}/>
            default:
                return <FormattedMessage id={"unknown"} defaultMessage={"Unknown"}/>
        }
    }

    const ordersTable = (
        <Table striped bordered hover size="sm" style={{cursor: "pointer"}}>
            <thead>
            <tr>
                <th>#</th>
                <th>
                    <FormattedMessage id={"orderStatus"} defaultMessage={"Order status"}/>
                </th>
                <th>
                    <FormattedMessage id={"numberOfOrders"} defaultMessage={"Number of orders"}/>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(orderCounts).map((key, index) => (
                    <tr key={key}>
                        <td>{index + 1}</td>
                        <td>
                            <Link to={`/orders/${key}`}>
                                {translateOrderStatus(key as orderStatusType)}
                            </Link>
                        </td>
                        <td>{orderCounts[key as orderStatusType]}</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )

    const promotionBanner = (
        <div className="alert alert-warning" role="alert">
            <h3>
                <FormattedMessage id={"promotion"} defaultMessage={"No sales recorded..."}/>
            </h3>
            <h3>
                <FormattedMessage id={"promotionBanner"}
                                  defaultMessage={"You can get get our promoting package for 50% off!"}/>
            </h3>
        </div>
    )

    return (
        <>
            {
                orders.length > 0
                    ? ordersTable
                    : promotionBanner
            }
        </>
    );
};

export default OrdersWidget;
