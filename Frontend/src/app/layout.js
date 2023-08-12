import { BottomNavBar } from './Components/BottomNavBar'
import './globals.css'
import { Nanum_Gothic_Coding } from 'next/font/google'
import Style from "./page.module.css";
import { GlobalContextProvider } from './Context/store';
import { useRouter, useParams } from 'next/navigation'

const inter = Nanum_Gothic_Coding({
  subsets: ['latin'],
  weight: '700'
})

export const metadata = {
  title: '모앙',
  description: 'Moang',
  manifest: '/manifest.json',
  themeColor: '#fff',
  icon: {
    src: '/assets/icons/icon-192x192',
    sizes: [192, 256, 384, 512],
    type: 'image/png',
    purpose: 'any maskable',
  },
}

export default function RootLayout({ children }) {
  // get currunt param
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={Style.root}>
          <GlobalContextProvider>
            {children}
            <BottomNavBar />
          </GlobalContextProvider>
        </div>
      </body>
    </html >
  )
}
