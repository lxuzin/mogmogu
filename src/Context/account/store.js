'use client'

import { createContext, useContext, useState } from "react";

const accountContext = createContext({});
export const AccountContextProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  return (
    <accountContext.Provider value={{ date, setDate}}>
      {children}
    </accountContext.Provider>
  )
}

export default function useAccountContext() { return useContext(accountContext) }