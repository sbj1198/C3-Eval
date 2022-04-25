import { createContext } from "react";

export const TerminateContext = createContext();

export const TerminateContextProvider = ({children}) => {
    return <TerminateContext.Provider>{children}</TerminateContext.Provider>
}