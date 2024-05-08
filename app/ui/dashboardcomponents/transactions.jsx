import Image from 'next/image'
import React from 'react'
import './transactions.css'

export default function Transactions() {
  return (
    <div className="transaction-container">
      <h2 className="title">Latest Transactions</h2>
      <table className='table'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src={'/noavatar.png'} alt='pfp' height={40} width={40} className='user-image' />
            </td>
            <td>
              <span className={`status pending`}>pending</span>
            </td>
            <td>
              <span>14.02.2024</span>
            </td>
            <td>
              <span>$350</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
