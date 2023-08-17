'use client'

import { createContext, useContext, useState } from "react";

const globalContext = createContext({});
export const GlobalContextProvider = ({ children }) => {
  const [ value, setValue ] = useState(2);
  return (
    <globalContext.Provider value={{ value, setValue }}>
      {children}
    </globalContext.Provider>
  )
}

export default function useGlobalContext() { return useContext(globalContext);}