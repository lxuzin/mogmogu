import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import BorderColor from '@mui/icons-material/BorderColor';
import Settings from '@mui/icons-material/Settings';
import Home from '@mui/icons-material/Home';
import Tune from '@mui/icons-material/Tune';
import { useGlobalContext } from '../Context/store';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const BottomNavBar = () => {
  const path = usePathname();
  const router = useRouter();
  const { navIdx, setNavIdx } = useGlobalContext();

  const redirectTo = (link) => {
    return () => {
      router.push(link);
    }
  }

  useEffect(() => {
    const routes = ['/home', '/calendar', '/account', '/manage', '/settings'];
    let idx = -1;
    routes.forEach((x, i) => {
      if (path.includes(x)) {
        idx = i
      }
    })
    // const idx = routes.findIndex(x => x === path);

    if (idx !== -1)
      setNavIdx(idx);

    document.querySelectorAll('#bottom-nav button').forEach((x, idx) => {
      if (idx === navIdx)
        x.style.color = '#AB47BC';
      else
        x.style.color = '#A9A9A9';
    });
  }, [navIdx, path])

  if (path.startsWith('/login')) {
    document.body.style.backgroundColor = '#C998DC';
    return (
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, height: '56px' }}></Box>
    );
  }

  if (path.startsWith('/join')) {
    document.body.style.backgroundColor = '#FFFFFF';
    return (
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, height: '56px' }}></Box>
    );
  }

  const loadingColor = {
    color: '#A9A9A9'
  }

  return (
    <Box sx={{ width: `100%`, position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        id='bottom-nav'
        showLabels
        value={navIdx}
        onChange={(event, idx) => {
          setNavIdx(idx);
        }}
      >

        <BottomNavigationAction label='홈' icon={<Home />}
          style={loadingColor}
          onClick={redirectTo('/home')}
        />
        <BottomNavigationAction label='캘린더' icon={<CalendarMonth />}
          style={loadingColor}
          onClick={redirectTo('/calendar')}
        />
        <BottomNavigationAction label='가계부' icon={<BorderColor />}
          style={loadingColor}
          onClick={redirectTo('/account')}
        />
        <BottomNavigationAction label='관리' icon={<Tune />}
          style={loadingColor}
          onClick={redirectTo('/manage')}
        />
        <BottomNavigationAction label='설정' icon={<Settings />}
          style={loadingColor}
          onClick={redirectTo('/settings')}
        />
      </BottomNavigation>
    </Box >
  );
}