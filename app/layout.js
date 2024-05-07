import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './ui/dashboardcomponents/sidebar'
import Navbar from './ui/dashboardcomponents/navbar'
import './ui/dashboardcomponents/dashboard.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next app',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
            <div className='sidebar-container'>
              <Sidebar />
            </div>
            <div className='content'>
              <Navbar />
              {children}
            </div>
        </div>
      </body>
    </html>
  )
}
