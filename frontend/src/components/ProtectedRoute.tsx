import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

const ProtectedRoute = ({children}: any) => {
    const authContext = useContext(AuthContext);

    const unauthenticated = (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <h1 className="text-center">
                <FormattedMessage id={"unauthenticated"} defaultMessage={"Sorry to access this page you need to "}/>
                <Link to={"/login"}>
                    <FormattedMessage id={"unauthenticated.login"} defaultMessage={"log in"}/>
                </Link>
            </h1>
        </div>
    );

    return (
        authContext.auth
            ? children
            : unauthenticated
    )
}

export default ProtectedRoute;
