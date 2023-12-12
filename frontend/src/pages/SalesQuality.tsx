import React from "react";
import "./styles/SalesQuality.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

function SalesQuality() {
    useDocumentTitle("Sales quality");

    return (
        <div className="main-div">
            <h1>Sales quality</h1>
            <p>Some text</p>
        </div>
    );
}

export function salesQualityLoader() {
    return <></>;
}

export default SalesQuality;