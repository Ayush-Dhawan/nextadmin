import React from 'react'
import './Sidebar.css'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
import MenuLink from './MenuLink';
import Image from 'next/image';

export default function Sidebar() {
    const menuItems = [
        {
          title: "Pages",
          list: [
            {
              title: "Dashboard",
              path: "/dashboard",
              icon: <MdDashboard />,
            },
            {
              title: "Users",
              path: "/dashboard/users",
              icon: <MdSupervisedUserCircle />,
            },
            {
              title: "Products",
              path: "/dashboard/products",
              icon: <MdShoppingBag />,
            },
            {
              title: "Transactions",
              path: "/dashboard/transactions",
              icon: <MdAttachMoney />,
            },
          ],
        },
        {
          title: "Analytics",
          list: [
            {
              title: "Revenue",
              path: "/dashboard/revenue",
              icon: <MdWork />,
            },
            {
              title: "Reports",
              path: "/dashboard/reports",
              icon: <MdAnalytics />,
            },
            {
              title: "Teams",
              path: "/dashboard/teams",
              icon: <MdPeople />,
            },
          ],
        },
        {
          title: "User",
          list: [
            {
              title: "Settings",
              path: "/dashboard/settings",
              icon: <MdOutlineSettings />,
            },
            {
              title: "Help",
              path: "/dashboard/help",
              icon: <MdHelpCenter />,
            },
          ],
        },
      ];
  return (
    <div className='main-container'>
        <div className="user">
            <Image className='userImage' src={"/noavatar.png"} alt='pfp' width={50} height={50} />
            <div className="userDetail">
                <span className="username">Cute snake</span>
                <span className="userTitle">Admin</span>
            </div>
        </div>
        <ul style={{width: "100%"}}>
            {menuItems.map(cat => (
                <li style={{listStyle: 'none', width: '100%', display: 'block'}} key={cat.title}>
                <span className='category'>{cat.title}</span>
                {cat.list.map(item => (
                    <MenuLink item={item} key={item.title} />
                ))}
                </li>
            )
            )}
        </ul>

        <button className='logout'><MdLogout /> LogOut</button>
    </div>
  )
}
