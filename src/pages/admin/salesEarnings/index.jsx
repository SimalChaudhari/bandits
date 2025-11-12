import React from 'react'
import { PayoutComponent, DetailEarningsComponent, EndComponent } from '../../../components'

function SalesEarnings() {
  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-20 lg:text-24 font-bold text-customeWhite mb-6">
        Sales & Earnings
      </h1>
      
      <PayoutComponent />
      <DetailEarningsComponent />
      <EndComponent />
    </div>
  )
}

export default SalesEarnings
