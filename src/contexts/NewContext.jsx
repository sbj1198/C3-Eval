import { createContext } from "react";

export const NewContext = createContext();

export const NewContextProvider = ({children}) => {
    return <NewContext.Provider>{children}</NewContext.Provider>
}