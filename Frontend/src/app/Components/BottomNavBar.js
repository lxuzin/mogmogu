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
import { useGlobalContext } from '../Context/store';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export const BottomNavBar = () => {
  const router = useRouter();
  const { value, setValue } = useGlobalContext();
  const [path, setPath] = useState(usePathname());

  const changeActiveColor = (index) => {
    if (index === value)
      return colors.purple[400] + ' !important';
  }

  const redirectTo = (link) => {
    return () => {
      router.push(link);
    }
  }

  return (
    <>
      { !path.includes('/login') ?
        <Box sx={{ width: `100vw` }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label='홈' icon={<Home />}
              sx={{ color: changeActiveColor(0) }}
              onClick={redirectTo('/home')}
            />
            <BottomNavigationAction label='캘린더' icon={<CalendarMonth />}
              sx={{ color: changeActiveColor(1) }}
              onClick={redirectTo('/calendar')}
            />
            <BottomNavigationAction label='가계부' icon={<BorderColor />}
              sx={{ color: changeActiveColor(2) }}
              onClick={redirectTo('/account')}
            />
            <BottomNavigationAction label='관리' icon={<Tune />}
              sx={{ color: changeActiveColor(3) }}
              onClick={redirectTo('/manage')}
            />
            <BottomNavigationAction label='설정' icon={<Settings />}
              sx={{ color: changeActiveColor(4) }}
              onClick={redirectTo('/settings')}
            />
          </BottomNavigation>
        </Box>
        : null
      }
    </>
  );
}