import { useState } from "react";
import { createContext } from "react";

export const PromoteContext = createContext();

export const PromoteContextProvider = ({children}) => {

    const [promote, setPromote] = useState(0);

    const handlePromote = () => {

    };

    return <PromoteContext.Provider value={{promote, handlePromote}}>{children}</PromoteContext.Provider>
}