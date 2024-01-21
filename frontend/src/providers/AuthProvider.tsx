import {useState} from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({children}: any) => {
    //TODO: set to false
    const [auth, setAuth] = useState<boolean>(true);
    //TODO: set to null
    const [account, setAccount] = useState<string | null>('gameseller@spp.com');
    //TODO: set to null
    const [user, setUser] = useState<string | null>('gameseller@spp.com');

    return (
        <AuthContext.Provider value={{auth, setAuth, user, setUser, account, setAccount}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
