import React from 'react'
import { CommonEnd, CommonYellowButton } from '../index'
import JoinBg from '../../assets/images/home/joinBg.png'

function EndVault() {
    return (
        <CommonEnd backgroundImage={JoinBg} className='md:min-h-[650px]'>
            <div className="text-center max-w-5xl mx-auto px-4">
                {/* First Headline Line */}
                <div className="mb-8">
                    <h1 className="text-20 md:text-36 lg:text-40 xl:text-48 font-cinzel font-bold uppercase leading-tight">
                        <span className="text-customeWhite font-cinzel">THIS ISN'T JUST </span>
                        <span className="text-customeYellow font-cinzel">AFFILIATE MARKETING</span>
                    </h1>
                </div>
                
                {/* Second Headline Line */}
                <div className="mb-12">
                    <h1 className="text-20 md:text-36 lg:text-40 xl:text-48 font-satoshi font-bold uppercase leading-tight">
                        <span className="text-customeWhite font-cinzel">THIS IS THE </span>
                        <span className="text-customeYellow font-cinzel">HEIST LIFESTYLE</span>
                    </h1>
                </div>

                {/* Call to Action Button */}
                <div className="mt-12">
                    <CommonYellowButton width="w-auto" height="h-[50px]" className="px-8 capitalize text-16">
                        Get Started Now
                    </CommonYellowButton>
                </div>
            </div>
        </CommonEnd>
    )
}

export default EndVault