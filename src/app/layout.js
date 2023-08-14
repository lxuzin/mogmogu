'use client'
import { BottomNavBar } from './Components/BottomNavBar'
import './globals.css'
import { Nanum_Gothic_Coding } from 'next/font/google'
import Style from "./page.module.css";
import { GlobalContextProvider, useGlobalContext } from './Context/store';
import { useRouter } from 'next/navigation';

const inter = Nanum_Gothic_Coding({
  subsets: ['latin'],
  weight: '700'
})



export default function RootLayout({ children }) {
  const router = useRouter();
  const showNav = router.pathname === '/login' ? false : true;

  return (
    <html lang="en">
      <head>
        <title>모앙</title>
        <meta name="description" content="Moang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/assets/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:700&display=swap" />
      </head>
      <body className={inter.className}>
        <div className={Style.root}>
          <GlobalContextProvider>
            {children}
            {showNav && <BottomNavBar/>}
          </GlobalContextProvider>
        </div>
      </body>
    </html >
  )
}
