import React from 'react'
import { CommonEnd, CommonYellowButton } from '../index'
import BoldBg from '../../assets/images/compensationPlan/end.png'
import CheckIcon from '../../assets/images/compensationPlan/check.png'

function Bold() {
    return (
        <div className='bg-customeBlack1 pt-10'>
            {/* Built Section */}
            <div className="text-center max-w-7xl mx-auto mb-16">
                <h4 className="text-customeWhite text-24 font-satoshi font-bold mb-2">
                    Built
                </h4>
                <h2 className="text-customeYellow xl:text-64 text-44 font-cinzel capitalize font-bold mb-6">
                    For The Bold
                </h2>
                <p className="text-customeWhite text-20 md:text-22 lg:text-24 font-satoshi max-w-4xl mx-auto mb-10 px-10 md:px-0">
                    Most affiliate plans are smoke and mirrors. Ours is simple, transparent, and designed to keep money flowing.
                </p>

                {/* Benefits List */}
                <div className="flex flex-col md:flex-row justify-center md:items-center items-start gap-8 flex-wrap md:px-0 px-10">
                    {[
                        "Uncapped earning potential",
                        "Payouts on multiple levels",
                        "No fluff real rewards, real fast"
                    ].map((benefit, index) => (
                        <div key={index} className="flex flex-row items-center gap-3">
                            <img
                                src={CheckIcon}
                                alt="Check"
                                className="object-contain"
                            />
                            <p className="text-customeWhite text-16 md:text-18 font-satoshi">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <CommonEnd backgroundImage={BoldBg} className='md:min-h-[350px]' overlayColor="bg-[#21201F]/80">
                <div className="text-center max-w-5xl mx-auto px-4">

                    {/* Headline */}
                    <div className="mb-12">
                        <h1 className="md:text-48 text-40 font-cinzel font-bold capitalize leading-tight flex flex-wrap gap-4 items-center justify-center">
                            <span className="text-customeWhite font-cinzel">Your </span>
                            <span className="text-customeYellow font-cinzel">Empire </span>
                            <span className="text-customeWhite font-cinzel">Won't </span>
                            <span className="text-customeWhite font-cinzel">Build </span>
                            <span className="text-customeYellow font-cinzel">Itself</span>
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
        </div>
    )
}

export default Bold