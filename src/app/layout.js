'use client'
import { BottomNavBar } from './Components/BottomNavBar'
import './globals.css'
import Style from "./page.module.css";
import { GlobalContextProvider, useGlobalContext } from './Context/store';
import { useRouter } from 'next/navigation';
import { Height } from '@mui/icons-material';

export default function RootLayout({ children }) {
  const router = useRouter();

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
          <div className={Style.root}>
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
