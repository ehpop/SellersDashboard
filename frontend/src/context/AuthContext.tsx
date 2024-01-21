import {createContext} from "react";

interface IAuthContext {
    auth: boolean,
    setAuth: (auth: boolean) => void,
    account: string | null,
    setAccount: (account: string | null) => void,
    user: string | null,
    setUser: (user: string | null) => void
}

const AuthContext = createContext<IAuthContext>(
    {
        auth: false,
        setAuth: (auth: boolean) => {
            console.log("AuthContext: ", auth)
        },
        user: null,
        setUser: (user: string | null) => {
            console.log("AuthContext: ", user)
        },
        account: null,
        setAccount: (account: string | null) => {
            console.log("AuthContext: ", account)
        }
    }
)

export default AuthContext;
