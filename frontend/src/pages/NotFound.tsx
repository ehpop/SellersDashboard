import React from "react";
import "./styles/NotFound.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

function NotFound() {
    useDocumentTitle("Not found");

    return (
        <div className="main-div">
            <h1 className="error-code">404</h1>
            <h2 className="error-reason">Not found</h2>
            <h3 className="error-explanation">Resource could not be found</h3>
            <a className="return-home" href={"/home"}>Return to home page</a>
        </div>
    );
}

export default NotFound;