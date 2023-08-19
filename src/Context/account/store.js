'use client'

import { createContext, useContext, useState } from "react";

const accountContext = createContext({});
export const AccountContextProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [datingCostList, setDatingCostList] = useState([]);
  const [datingCostObject, setDatingCostObject] = useState({
    trans_id: 0,
    bank_id: 0,
    trans_date: new Date(),
    trans_time: new Date(),
    content: "",
    cost: 0,
    deposit: 0,
    balance: 0});


  return (
    <accountContext.Provider value={{
      date, setDate,
      datingCostList, setDatingCostList,
      datingCostObject, setDatingCostObject
    }}>
      {children}
    </accountContext.Provider>
  )
}

export default function useAccountContext() { return useContext(accountContext) }