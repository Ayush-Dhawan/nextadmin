"use client"
import React from 'react'
import './MenuLink.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'

export default function MenuLink({item}) {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <Link href={item.path} className={`menu-link-container ${pathname === item.path && "active"}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}
