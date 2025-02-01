import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const useDataContext = () => {
    return useContext(DataContext);
}

export const DataContextProvider = (props) =>{
    const [data,setData] = useState(null);

    return (<DataContext.Provider value={{data,setData}}>
        {props.children}
    </DataContext.Provider>)
}