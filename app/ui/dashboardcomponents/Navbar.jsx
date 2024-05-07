"use client"
import React from 'react'
import './Navbar.css'
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="title">{pathname.split("/").pop()}</div>
      <div className="menu">
        <div className="search">
          <MdSearch />
          <input type="text" placeholder='search...' className='input' />
        </div>
        <div className="icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </nav>
  )
}
