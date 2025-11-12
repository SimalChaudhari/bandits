import React, { useState } from 'react'
import LineChart from '../../common/lineChart'
import CommonDropdown from '../../common/commonDropdown'
import ppIcon from '../../../assets/images/admin/dashboard/pp.png'
import nwIcon from '../../../assets/images/admin/dashboard/nw.png'

function DetailComponent() {
  const [selectedMonth, setSelectedMonth] = useState('October')
  // Sample sales data
  const salesData = [
    { x: 1, y: 100 },
    { x: 4, y: 250 },
    { x: 7, y: 500 },
    { x: 9, y: 1200 },
    { x: 12, y: 3932.98 },
    { x: 15, y: 2000 },
    { x: 18, y: 1500 },
    { x: 20, y: 2500 },
    { x: 23, y: 1800 },
    { x: 26, y: 2200 },
    { x: 30, y: 3000 }
  ]

  const xAxisLabels = ['1', '4', '7', '9', '12', '15', '18', '20', '23', '26', '30']
  const yAxisLabels = ['$100', '$250', '$500', '$1,000', '$5,000']

  const announcements = [
    {
      icon: ppIcon,
      iconAlt: 'PayPal',
      title: 'Payment Processed',
      rightText: '+$2,500'
    },
    {
      icon: nwIcon,
      iconAlt: 'New',
      title: 'New Drop',
      rightText: 'Check Out'
    }
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
      {/* Sales Details Section - Left (2/3 width) */}
      <div className="bg-customeLightBlack rounded-[14px] p-4 lg:p-6 border border-customeYellow flex-[2]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-24 font-bold capitalize">Sales Details</h3>
          <CommonDropdown
            variant="golden"
            options={['October', 'November', 'December']}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
        <div className="rounded-lg md:p-4 overflow-x-auto">
          <LineChart
            data={salesData}
            xAxisLabels={xAxisLabels}
            yAxisLabels={yAxisLabels}
            height={300}
          />
        </div>
      </div>

      {/* Announcements Section - Right (1/3 width) */}
      <div className="bg-customeLightBlack rounded-[14px] p-4 lg:p-6 border border-customeYellow flex-1">
        <h3 className="text-customeWhite text-24 font-bold mb-4">Announcements</h3>
        <div className="space-y-3">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex items-center justify-between gap-4 bg-customeLightBlack rounded-[10px] p-4 border border-customeYellow">
              <div className=" rounded-full bg-customeYellow flex items-center justify-center flex-shrink-0">
                <img src={announcement.icon} alt={announcement.iconAlt} className="h-[40px] w-[40px]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-customeWhite font-satoshi text-16 text-center">{announcement.title}</p>
              </div>
              <div>
                <p className="text-customeWhite text-16 font-satoshi whitespace-nowrap">{announcement.rightText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailComponent

