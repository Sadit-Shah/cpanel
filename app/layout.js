

import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/header/header';
import NextuiProvider from './components/nextuiProvider/nextuiProvider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cPanel-Openskytrips',
  description: 'Generated',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NextuiProvider>
          <div className='dark:bg-[#201919]'>
            <Header />
            <div className='mt-[70px]'>
              {children}
            </div>
          </div>
        </NextuiProvider>
      </body>
    </html>
  )
}
