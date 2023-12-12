import React from "react";
import "./styles/NotFound.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import {FormattedMessage} from "react-intl";

function NotFound() {
    useDocumentTitle("Not found");

    return (
        <div className="main-div">
            <h1 className="error-code">404</h1>
            <h2 className="error-reason"><FormattedMessage id={"not-found.error-reason"} defaultMessage={"Not Found"}/>
            </h2>
            <h3 className="error-explanation"><FormattedMessage id={"not-found.error-explanation"}
                                                                defaultMessage={"Resource could not be found"}/></h3>
            <a className="return-home" href={"/home"}><FormattedMessage id={"not-found.return-home"}
                                                                        defaultMessage={"Return to home page"}/></a>
        </div>
    );
}

export default NotFound;