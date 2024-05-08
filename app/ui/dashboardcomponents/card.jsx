import React from 'react'
import './card.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

export default function Card() {
  return (
    <div className='container-card'>
      <MdSupervisedUserCircle size={24}/>
      <div className="texts">
        <span className="title">Total Users</span>
        <span className="number">10.273</span>
        <span className="detail">
          <span className="positive">12%</span> more than previous week
        </span>
      </div>
    </div>
  )
}
