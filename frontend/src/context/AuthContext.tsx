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
        },
        user: null,
        setUser: (user: string | null) => {
        },
        account: null,
        setAccount: (account: string | null) => {
        }
    }
)

export default AuthContext;
