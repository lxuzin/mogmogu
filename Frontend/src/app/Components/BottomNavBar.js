'use client'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import BorderColor from '@mui/icons-material/BorderColor';
import Settings from '@mui/icons-material/Settings';
import Home from '@mui/icons-material/Home';
import Tune from '@mui/icons-material/Tune';
import { colors } from '@mui/material';
import { useState } from 'react';
import { useGlobalContext } from '../Context/store';

export const BottomNavBar = () => {
  const { value, setValue } = useGlobalContext();
  // const [value, setValue] = useState(data);


  const changeActiveColor = (index) => {
    if (index === value)
      return colors.purple[400] + ' !important';
  }

  return (
    <Box sx={{ width: `100%` }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='홈' icon={<Home />} 
          sx={{ color: changeActiveColor(0) }} 
          href='/home'
        />
        <BottomNavigationAction label='캘린더' icon={<CalendarMonth />} 
          sx={{ color: changeActiveColor(1) }} 
          href='/calendar'
        />
        <BottomNavigationAction label='가계부' icon={<BorderColor />}
          sx={{ color: changeActiveColor(2) }} 
          href='/account'
        />
        <BottomNavigationAction label='관리' icon={<Tune />} 
          sx={{ color: changeActiveColor(3) }} 
          href='/manage'
        />
        <BottomNavigationAction label='설정' icon={<Settings />} 
          sx={{ color: changeActiveColor(4) }} 
          href='/settings'
        />
      </BottomNavigation>
    </Box>
  );
}