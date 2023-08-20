'use client'

import { createContext, useContext, useState } from "react";

const joinContext = createContext({});
export const JoinContextProvider = ({ children }) => {
  const [formNum, setFormNum] = useState(1)
  const [user, setUser] = useState({
    name: "",
    myImg: null,
    birthday: new Date(),
    phone: "",
    nickname: "",
    password: "",
    password2: "",
    myCode: "",
    yourCode: "",
    avgcostpermonth: 0,
    avgnumpermonth: 0,
    coupleStartDate: new Date()
  });
  return (
    <joinContext.Provider value={{ user, setUser, formNum, setFormNum }}>
      {children}
    </joinContext.Provider>
  )
}

export default function useJoinContext() { return useContext(joinContext) }