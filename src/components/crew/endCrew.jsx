import React from 'react'
import { CommonEnd, CommonYellowButton } from '../index'
import JoinBg from '../../assets/images/home/joinBg.png'

function EndCrew() {
    return (
        <CommonEnd backgroundImage={JoinBg} className='md:min-h-[650px]'>
            <div className="text-center max-w-5xl mx-auto px-4">
                {/* Headlines */}
                <div className="mb-12 space-y-4">
                    <h1 className="text-20 md:text-36 lg:text-40 xl:text-48 font-cinzel font-bold capitalize leading-tight">
                        <span className="text-customeWhite font-cinzel">This Isn't Just </span>
                        <span className="text-customeYellow font-cinzel">Affiliate Marketing</span>
                    </h1>
                    <h1 className="text-20 md:text-36 lg:text-40 xl:text-48 font-cinzel font-bold capitalize leading-tight">
                        <span className="text-customeWhite font-cinzel">This Is The </span>
                        <span className="text-customeYellow font-cinzel">Heist </span>
                        <span className="text-white font-cinzel"> Lifestyle</span>
                    </h1>
                    <h1 className="text-20 md:text-36 lg:text-40 xl:text-48 font-cinzel font-bold capitalize leading-tight">
                        <span className="text-customeWhite font-cinzel">This Is </span>
                        <span className="text-customeYellow font-cinzel">Your Crew</span>
                    </h1>
                </div>

                {/* Call to Action Button */}
                <div className="mt-12">
                    <CommonYellowButton width="w-auto" height="h-[50px]" className="px-8 text-16">
                        Join the Heist Today
                    </CommonYellowButton>
                </div>
            </div>
        </CommonEnd>
    )
}

export default EndCrew