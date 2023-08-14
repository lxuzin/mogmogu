'use client'

import { createContext, useContext, useState } from "react";

const globalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [ navIdx, setNavIdx ] = useState(0);

  const value = {
    navIdx,
    setNavIdx,
  }
  return (
    <globalContext.Provider value={value}>
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(globalContext);