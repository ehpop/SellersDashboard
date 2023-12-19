import {useState} from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({children}: any) => {
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;