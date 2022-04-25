import { useState } from "react";
import { createContext } from "react";

export const TerminateContext = createContext();

export const TerminateContextProvider = ({children}) => {

    const [terminate, setTerminate] = useState(0);

    const handleTerminate = () => {

    };

    return <TerminateContext.Provider value={{terminate, handleTerminate}}>{children}</TerminateContext.Provider>
}