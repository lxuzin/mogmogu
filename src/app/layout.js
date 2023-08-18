'use client'
import { BottomNavBar } from './Components/BottomNavBar'
import './globals.css'
import Style from "./page.module.css";
import { GlobalContextProvider } from './Context/store';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const path = usePathname();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    console.log(`isOnline: ${isOnline}`);
    if (path.startsWith('/login') || path.startsWith('/join'))
      setIsOnline(false);
  }, [isOnline])

  return (
    <html lang="en">
      <head>
        <title>모앙</title>
        <meta name="description" content="Moang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/assets/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png" />
      </head>
      <body>
        <GlobalContextProvider>
          <div className={`${Style.root} ${isOnline ? Style.rootOnline : Style.rootOffline}`}>
            <div className={Style.app}>
              {children}
            </div>
          </div>
          <BottomNavBar />
        </GlobalContextProvider>
      </body>
    </html >
  )
}
