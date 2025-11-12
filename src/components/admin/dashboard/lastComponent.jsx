import React from 'react'
import qrImage from '../../../assets/images/admin/dashboard/qr.png'
import playImage from '../../../assets/images/admin/dashboard/play.png'
import newImage from '../../../assets/images/admin/dashboard/new.png'

// Reusable Card Component
function DashboardCard({ children, className = '' }) {
  return (
    <div className={`bg-customeLightBlack w-full rounded-lg p-4 border border-customeYellow ${className}`}>
      {children}
    </div>
  )
}

function LastComponent() {
  const handleCopyLink = () => {
    // Copy link functionality
    const link = 'https://example.com/your-link'
    navigator.clipboard.writeText(link).then(() => {
      // You can add a toast notification here
      console.log('Link copied to clipboard')
    })
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* QR Code Card */}
      <DashboardCard className="text-center">
        <div className="mb-3">
          <img 
            src={qrImage} 
            alt="QR Code" 
            className="mx-auto rounded"
          />
        </div>
        <p className="text-customeWhite1 text-11 md:text-14 font-satoshi">Share This To Grow Your Team</p>
      </DashboardCard>

      {/* Copy Link Card */}
      <DashboardCard>
        <div className="flex items-center gap-2 bg-customeYellow/20 rounded p-2 mb-2">
          <p className="text-customeWhite1 text-xs font-satoshi flex-1 truncate">
            https://example.com/your-link
          </p>
        </div>
        <button 
          onClick={handleCopyLink}
          className="text-white md:text-14 text-10 font-satoshi hover:underline w-full text-bottom"
        >
          Copy Link
        </button>
      </DashboardCard>

      {/* View Training Card */}
      <DashboardCard className="flex flex-col items-center justify-center gap-3">
        <img 
          src={playImage} 
          alt="Training" 
          className=""
        />
        <p className="text-customeWhite1 font-satoshi md:text-14 text-10">View Training</p>
      </DashboardCard>

      {/* New Drops Card */}
      <DashboardCard className="flex flex-col items-center justify-center gap-3">
        <img 
          src={newImage} 
          alt="New Drops" 
          className=""
        />
        <p className="text-customeWhite1 font-satoshi md:text-14 text-10">New Drops</p>
      </DashboardCard>
    </div>
  )
}

export default LastComponent

