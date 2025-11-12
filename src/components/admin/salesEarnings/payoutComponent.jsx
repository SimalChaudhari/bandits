import React from 'react'
import gearIcon from '../../../assets/images/admin/salesEarnings/gear.png'
import perIcon from '../../../assets/images/admin/salesEarnings/per.png'
import cycleIcon from '../../../assets/images/admin/salesEarnings/cycle.png'
import checkIcon from '../../../assets/images/admin/salesEarnings/check.png'

function PayoutComponent() {
    const metrics = [
        {
            id: 1,
            label: 'Total Sales',
            value: '$12,540',
            icon: gearIcon
        },
        {
            id: 2,
            label: 'Commission Earned',
            value: '$2,340',
            icon: perIcon
        },
        {
            id: 3,
            label: 'Pending Commission',
            value: '$540',
            icon: cycleIcon
        },
        {
            id: 4,
            label: 'Paid Out',
            value: '$1,800',
            icon: checkIcon
        }
    ]

    return (
        <div className="mb-6">
            {/* Title */}
            <h2 className="text-customeWhite text-center text-20 lg:text-24 font-satoshi mb-6">
                Track your sales, commissions, and payouts in one place
            </h2>

            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {metrics.map((metric) => (
                    <div
                        key={metric.id}
                        className="bg-customeLightBlack rounded-lg border border-customeYellow p-4 lg:p-6 flex items-center justify-between"
                    >
                        <div className="space-y-4">
                            {/* Label */}
                            <p className="text-customeWhite md:text-16 text-10 font-satoshi">
                                {metric.label}
                            </p>

                            {/* Value */}
                            <p className="text-white text-19 lg:text-28 font-semibold font-satoshi">
                                {metric.value}
                            </p>
                        </div>

                        <div>
                            {/* Icon */}
                            <div className="rounded-full bg-customeYellow flex items-center justify-center">
                                <img src={metric.icon} alt={metric.label} className="" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default PayoutComponent