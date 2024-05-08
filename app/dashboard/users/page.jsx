import React from 'react'
import '../../ui/userscomponents/users.css'
import Search from '@/app/ui/dashboardcomponents/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboardcomponents/Pagination'

export default function page() {
  return (
    <div className='users-container'>
      <div className="top">
          <Search placeholder={"search users.."} />
          <Link href={'/dashboard/users/add'}>
              <button className='add-btn'>Add new</button>
          </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="user">
                <Image
                  src={'/noavatar.png'}
                  alt=''
                  height={40}
                  width={40}
                  className='user-image'
                   />
                   Test user
              </div>
            </td>
            <td>test@user.com</td>
            <td>13.01.2023</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className="buttons">
                  <Link href={'/'}>
                    <button className={`${"button"} ${"view"}`}>View</button>
                  </Link>
                  <Link href={'/'}>
                    <button className={`${"button"} ${"del"}`}>Delete</button>
                  </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
        <Pagination />  
    </div>
  )
}
