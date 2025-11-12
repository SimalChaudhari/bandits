import React from 'react'
import RewardImg from '../../assets/images/vault/Rewards.png'
import Checkmark from '../../assets/images/vault/checkmark.png'

function Rewards() {
    const benefits = [
        "$10+ EVERY SALE YOU MAKE.",
        "EARN LIFETIME COMMISSIONS ON REORDERS.",
        "BUILD YOUR CREW, EARN ON MULTIPLE LEVELS.",
        "EXCLUSIVE BONUSES FOR TOP RECRUITERS."
    ]

    return (
        <section className='bg-customeBlack1 text-white py-20'>
            <div className='mx-auto xl:px-16 lg:px-12 px-4 relative z-20'>
                {/* Header Section - Centered */}
                <div className='text-center mb-16'>
                    <h1 className='text-32 md:text-38 lg:text-48 font-bold uppercase mb-6'>
                        <span className='font-cinzel text-white'>AFFILIATE </span>
                        <span className='font-cinzel text-customeYellow'>REWARDS</span>
                    </h1>

                    {/* Tagline */}
                    <p className='text-white text-20 md:text-22 lg:text-24 capitalize mb-12'>
                        Your Hustle. Your Pay
                    </p>
                </div>

                {/* Content Grid */}
                <div className='flex flex-col lg:flex-row justify-center items-center gap-12 max-w-[1200px] mx-auto'>
                    {/* Left Side - Benefits List */}
                    <div className='w-full lg:w-auto'>
                        <div className='space-y-6'>
                            {benefits.map((benefit, index) => (
                                <div key={index} className='flex items-center gap-4 justify-center lg:justify-start'>
                                    {/* Checkmark Image */}
                                    <img
                                        src={Checkmark}
                                        alt="Checkmark"
                                    className='md:w-auto w-10 md:h-auto h-10'
                                    />

                                    {/* Benefit Text */}
                                    <p className='text-white text-18 md:text-24 font-cinzel font-bold xl:whitespace-nowrap'>
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className='flex justify-center'>
                        <img
                            src={RewardImg}
                            alt="Affiliate Rewards"
                            className='w-full max-w-lg h-auto rounded-lg'
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Rewards
