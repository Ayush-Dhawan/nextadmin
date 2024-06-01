
import { Inter } from 'next/font/google'
import '../globals.css'
import Sidebar from '../ui/dashboardcomponents/sidebar'
import Navbar from '../ui/dashboardcomponents/navbar'
import '../ui/dashboardcomponents/dashboard.css'
// import '../'
// import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next app',
  description: 'Next.js Tutorial',
}

export default function Layout({ children }) {
  // const router = useRouter();
  // const pathname = router.pathname;

  // if (pathname === '/login') {
  //   return (
  //     <html lang="en">
  //       <body className={inter.className}>
  //         {children}
  //       </body>
  //     </html>
  //   )
  // }
  
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
