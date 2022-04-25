import { useState } from "react";
import { createContext } from "react";

export const NewContext = createContext();

export const NewContextProvider = ({children}) => {

    const [newEmp, setNewEmp] = useState(0);

    const handleNewEmp = () => {

    };

    return <NewContext.Provider value={{newEmp, handleNewEmp}}>{children}</NewContext.Provider>
}