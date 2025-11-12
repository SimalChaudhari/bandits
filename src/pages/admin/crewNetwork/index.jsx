import React, { useState } from 'react'
import { FaFire, FaGem } from 'react-icons/fa'
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { CommonYellowButton } from '../../../components'
import starsIcon from '../../../assets/images/admin/crewNetwork/stars.png'
import bgImage from '../../../assets/images/admin/newDrops/bg.png'

function CrewNetwork() {
    const [activeTier, setActiveTier] = useState('Tier 1')

    const tiers = [
        { id: 'Tier 1', label: 'Tier 1', icon: FaFire },
        { id: 'Tier 2', label: 'Tier 2', icon: FaGem },
        { id: 'All Crew', label: 'All Crew', icon: null }
    ]

    const crewMembers = [
        { id: 1, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 2, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 3, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 4, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 5, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 6, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 7, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 8, name: 'John Brett', salesNov: 35, totalSales: 135 },
        { id: 9, name: 'John Brett', salesNov: 35, totalSales: 135 }
    ]

    return (
        <div className="p-4 lg:p-6">
            {/* Page Title */}
            <h1 className="text-20 lg:text-24 font-bold text-customeWhite mb-6">
                Your Crew Network
            </h1>

            {/* Filter Tabs and Add Button */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3">
                    {tiers.map((tier) => {
                        const Icon = tier.icon
                        const isActive = activeTier === tier.id

                        return (
                            <button
                                key={tier.id}
                                onClick={() => setActiveTier(tier.id)}
                                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-satoshi text-sm transition-all border border-customeYellow
                  ${isActive
                                        ? 'bg-white text-customeYellow font-bold'
                                        : 'bg-customeBlack1 text-customeWhite1'
                                    }
                `}
                            >
                                {Icon && <Icon size={16} />}
                                {tier.label}
                            </button>
                        )
                    })}
                </div>

                {/* Add New Button */}
                <CommonYellowButton
                    width="w-auto"
                    height="h-[44px]"
                    className="px-6 rounded-lg font-satoshi text-18 text-white"
                >
                    Add new +
                </CommonYellowButton>
            </div>

            {/* Crew Member Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {crewMembers.map((member) => (
                    <div
                        key={member.id}
                        className="bg-customeLightBlack rounded-lg border border-customeGray1 p-4 lg:p-6 relative hover:border-customeYellow transition-colors"
                    >
                        {/* Options Icon */}
                        <button className="absolute top-4 right-4 text-customeWhite1 hover:text-customeYellow transition-colors">
                            <TbDotsCircleHorizontal size={20} className='text-customeYellow h-[26px] w-[26px]' />
                        </button>

                        {/* Profile Placeholder */}
                        <div className="flex justify-center mb-4">
                            <div className="w-[148px] h-[148px] rounded-full bg-customeWhite1 flex items-center justify-center">
                                {/* <span className="text-customeWhite1 text-2xl font-bold">
                  {member.name.charAt(0)}
                </span> */}
                            </div>
                        </div>

                        {/* Name */}
                        <h3 className="text-customeWhite text-center text-26 font-satoshi font-bold mb-4">
                            {member.name}
                        </h3>

                        {/* Statistics */}
                        <div className="space-y-2 flex flex-col items-center">
                            <div className="flex items-center gap-2 text-customeWhite1 text-15 font-satoshi">
                                <img src={starsIcon} alt="Star" className="" />
                                <span>No of sales in Nov: {member.salesNov}</span>
                            </div>
                            <div className="flex items-center gap-2 text-customeWhite1 text-15 font-satoshi">
                                <img src={starsIcon} alt="Star" className="" />
                                <span>Total no of sales: {member.totalSales}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CrewNetwork