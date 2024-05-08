import React from 'react'
import Card from '../ui/dashboardcomponents/card'
import '../ui/dashboardcomponents/dashboard.css'
import RightBar from '../ui/dashboardcomponents/RightBar'
import Transactions from '../ui/dashboardcomponents/transactions'
import Chart from '../ui/dashboardcomponents/chart'

export default function dashboardpage() {
  return (
    <div className='wrapper'>
      <div className="main">
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="side">
        <RightBar />
      </div>
    </div>
  )
}
