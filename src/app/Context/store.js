'use client'

import { createContext, useContext, useState } from "react";

const globalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [navIdx, setNavIdx] = useState(0);
  const [maxcostPerDate] = useState(70000);
  const [daysElapsed, setDaysElapsed] = useState('2023-01-01');
  const [calendarContents, setCalendarContents] = useState(contents);
  const [selectedBankName, setSelectedBankName] = useState({})

  const value = {
    navIdx,
    setNavIdx,
    daysElapsed,
    calendarContents,
    setCalendarContents,
    maxcostPerDate,
    selectedBankName,
    setSelectedBankName
  }
  return (
    <globalContext.Provider value={value}>
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(globalContext);

const contents = [
  {
    startDate: new Date('2023-08-15'),
    endDate: new Date('2023-08-15'),
    keyword: '광복절',
    food: '',
    place: '',
    image: {
      name: 'Photo',
      base64: '',
    },
    diary: '',
    cost: 815,
  },
  {
    startDate: new Date('2023-08-25'),
    endDate: new Date('2023-08-25'),
    cost: 10000,
    keyword: '월급날',
    food: '',
    place: '',
    image: {
      name: 'Photo',
      base64: '',
    },
    diary: '',
  },
  {
    startDate: new Date('2023-08-18'),
    endDate: new Date('2023-08-28'),
    cost: 5000,
    keyword: '배고파',
    food: '',
    place: '',
    image: {
      name: 'Photo',
      base64: '',
    },
    diary: '',
  },
]

export const getEmptyContent = (date) => {
  return {
    startDate: new Date(date),
    endDate: new Date(date),
    keyword: '',
    food: '',
    place: '',
    image: {
      name: 'Photo',
      base64: '',
    },
    diary: '',
    cost: 0,
  };
};

