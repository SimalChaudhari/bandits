import React from 'react'
import { CommonYellowButton } from '../index'

function NeedToWin() {
    return (
        <div className="bg-customeBlack3 flex items-center justify-center px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
                {/* Main Headline */}
                <div className="mb-6">
                    <div className="text-customeWhite text-24 font-satoshi font-semibold capitalize tracking-wide mb-2">
                    Everything You
                    </div>
                    <div className="text-customeYellow md:text-64 text-48 font-cinzel font-bold capitalize">
                    Need to Win
                    </div>
                </div>

                {/* Subtitle */}
                <p className="text-white text-lg md:text-xl mb-8 mx-auto font-satoshi">
                    Get access to scripts, graphics, and insider strategies — built to help you sell fast.
                </p>

                {/* Call to Action Button */}
                <CommonYellowButton className='text-16 capitalize'>
                    Get Started Now
                </CommonYellowButton>
            </div>
        </div>
    )
}

export default NeedToWin
