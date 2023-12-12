import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function CustomerReviews() {
    useDocumentTitle("Customer reviews");

    return (
        <div className="main-div">
            <h1>Customer reviews</h1>
            <p>Some text</p>
        </div>
    );

}


export function customerReviewsLoader() {
    return <></>;
}

export default CustomerReviews;