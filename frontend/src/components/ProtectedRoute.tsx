import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";

const ProtectedRoute = ({children}: any) => {
    const authContext = useContext(AuthContext);

    const unauthenticated = (
        <div className="d-flex justify-content-center align-items-center h-100">
            <h1 className="text-center">
                Sorry to access this page you need to <Link to={"/login"}>log in</Link>
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
