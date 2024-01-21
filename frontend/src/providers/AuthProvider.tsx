import {useState} from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({children}: any) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [account, setAccount] = useState<string | null>(null);
    const [user, setUser] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{auth, setAuth, user, setUser, account, setAccount}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
