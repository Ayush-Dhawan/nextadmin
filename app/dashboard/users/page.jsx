import React from 'react'
import '../../ui/userscomponents/users.css'
import Search from '@/app/ui/dashboardcomponents/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboardcomponents/Pagination'
import { getAllUsers } from '@/app/lib/data'

export default async function page({ searchParams }) {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {users, count} = await getAllUsers(query, page);

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
          {users?.map(user => (
            <tr>
            <td>
              <div className="user">
                <Image
                  src={user.img}
                  alt=''
                  height={40}
                  width={40}
                  className='user-image'
                   />
                   {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4, 16)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>{user.isActive ? "active" : "passive"}</td>
            <td>
              <div className="buttons">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${"button"} ${"view"}`}>View</button>
                  </Link>
                  <Link href={'/'}>
                    <button className={`${"button"} ${"del"}`}>Delete</button>
                  </Link>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
        <Pagination count={count} />  
    </div>
  )
}
