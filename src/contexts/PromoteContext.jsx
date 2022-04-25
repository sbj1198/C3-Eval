import { createContext } from "react";

export const PromoteContext = createContext();

export const PromoteContextProvider = ({children}) => {
    return <PromoteContext.Provider>{children}</PromoteContext.Provider>
}