import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState({
        status: false,
        token: ''
    });

    const handleAuth = (state, t) => {
        setIsAuth({...isAuth, status: state, token: t});
    } ;
    return  <AuthContext.Provider value={{isAuth, handleAuth}}>{children}</AuthContext.Provider>
}