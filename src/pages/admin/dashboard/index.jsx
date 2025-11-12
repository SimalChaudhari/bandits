import React from 'react'
import { HeistCards } from '../../../components'
import DetailComponent from '../../../components/admin/dashboard/detailComponent'
import LastComponent from '../../../components/admin/dashboard/lastComponent'

function Dashboard() {
  return (
    <div className="p-4 lg:p-6">
      {/* Welcome Message */}
      <div className="mb-6">
        <h2 className="text-customeWhite1 text-20 lg:text-24 font-bold capitalize tracking-wide">
          The Heist Is On — Keep Pushing!
        </h2>
      </div>

      {/* Key Metrics Cards */}
      <div className="mb-6">
        <HeistCards />
      </div>

      {/* Sales Details & Announcements Section */}
      <DetailComponent />

      {/* Bottom Cards */}
      <LastComponent />
    </div>
  )
}

export default Dashboard

