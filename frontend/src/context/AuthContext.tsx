import {createContext} from "react";

interface IAuthContext {
    auth: boolean,
    setAuth: (auth: boolean) => void
}

const AuthContext = createContext<IAuthContext>(
    {
        auth: false,
        setAuth: (auth: boolean) => {
        }
    }
)

export default AuthContext;