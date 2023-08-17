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
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const BottomNavBar = () => {
  const path = usePathname();
  const router = useRouter();
  const { navIdx, setNavIdx } = useGlobalContext();

  const changeActiveColor = (index) => {
    if (index === navIdx)
      return colors.purple[400] + ' !important';
  }

  const redirectTo = (link) => {
    return () => {
      router.push(link);
    }
  }

  useEffect(() => {
    const routes = ['/home', '/calendar', '/account', '/manage', '/settings'];
    const idx = routes.findIndex(x => path.startsWith(x));
    if (idx === -1)
      return;
    setNavIdx(idx);
  }, [navIdx])

  if (path.startsWith('/login'))
    return (
      <Box sx={{ width: `100%`, position: 'fixed', bottom: 0, left: 0, right: 0, height: '56px', backgroundColor: '#C998DC' }}>
        </Box>
  );

  if (path.startsWith('/join'))
  return (
    <Box sx={{ width: `100%`, position: 'fixed', bottom: 0, left: 0, right: 0, height: '56px', backgroundColor: 'none' }}>
      </Box>
);

  return (
    <Box sx={{ width: `100%`, position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={navIdx}
        onChange={(event, idx) => {
          setNavIdx(idx);
        }}
        sx={{ position : 'fixed', bottom: 0}}
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
    </Box >
  );
}