import React from 'react'
import Card from '../../common/cards'
import usersIcon from '../../../assets/images/admin/dashboard/users.png'
import boxIcon from '../../../assets/images/admin/dashboard/boc.png'
import clockIcon from '../../../assets/images/admin/dashboard/clock.png'
import upIcon from '../../../assets/images/admin/dashboard/up.png'

function HeistCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        title="Today's Sales"
        value="40,689"
        trend="8.5% Up from yesterday"
        trendColor="text-green-500"
        icon={<img src={usersIcon} alt="Users" className="md:h-[60px] md:w-[60px] h-[38px] w-[38px]" />}
      />
      
      <Card
        title="Commissions"
        value="$8,950"
        trend="1.3% Up from past week"
        trendColor="text-green-500"
        icon={<img src={boxIcon} alt="Box" className="md:h-[60px] md:w-[60px] h-[38px] w-[38px]" />}
      />
      
      <Card
        title="Pending Payouts"
        value="$89,000"
        trend="Last Payment $34,000"
        trendColor="text-customeWhite1"
        icon={<img src={clockIcon} alt="Clock" className="md:h-[60px] md:w-[60px] h-[38px] w-[38px]" />}
      />
      
      <Card
        title="Network Sales"
        value="140"
        trend="1.8% Up from yesterday"
        trendColor="text-green-500"
        icon={<img src={upIcon} alt="Up" className="md:h-[60px] md:w-[60px] h-[38px] w-[38px]" />}
      />
    </div>
  )
}

export default HeistCards

