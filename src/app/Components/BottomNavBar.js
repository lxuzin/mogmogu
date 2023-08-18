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
    const idx = routes.findIndex(x => x === path);

    if (idx !== -1)
      setNavIdx(idx);

    document.querySelectorAll('#bottom-nav button').forEach((x, idx) => {
      x.style.color = (idx === navIdx ? '#AB47BC' : '#A9A9A9');
    });
  }, [navIdx, path])

  const loadingColor = {
    color: '#A9A9A9'
  }

  if (path.startsWith('/login') || path.startsWith('/join')) {
    return (<></>)
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