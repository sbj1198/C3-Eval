
import { createContext, useState, useEffect } from "react";

export const TotalContext = createContext();

export const TotalContextProvider = ({children}) => {

    const [total, setTotal] = useState()

    return <TotalContext.Provider>{children}</TotalContext.Provider>
};