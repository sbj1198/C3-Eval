import axios from 'axios';
import { createContext, useState, useEffect } from "react";

export const TotalContext = createContext();

export const TotalContextProvider = ({children}) => {

    const [total, setTotal] = useState(null)

    useEffect(() => {
        async function getTotal(){
            const res = await axios.get("http://localhost:8080/employee");
            // console.log(res);
            // console.log(Object.keys(res.data).length);
            setTotal(Object.keys(res.data).length);
        }
        getTotal();
    }, []);

    return <TotalContext.Provider value={{total}}>{children}</TotalContext.Provider>
};