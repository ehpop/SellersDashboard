import React from "react";
import "./styles/Orders.css";

function Orders() {
    return <div className="main-div">
        <h1>Orders</h1>
        <p>Some text</p>
    </div>
}

export function ordersLoader() {
    return <h1>loader</h1>;
}

export default Orders;