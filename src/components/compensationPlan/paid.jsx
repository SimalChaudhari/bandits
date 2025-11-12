import React from 'react'
import VaultIcon from '../../assets/images/crew/Vault.png'
import QrIcon from '../../assets/images/crew/Qr.png'
import MarketingIcon from '../../assets/images/crew/Marketing.png'
import PlaybooksIcon from '../../assets/images/crew/Playbooks.png'

function Paid() {
    const features = [
        {
            icon: VaultIcon,
            title: "Direct Commissions",
            description: "Earn instantly on every fragrance sold through your Vault link"
        },
        {
            icon: QrIcon,
            title: "Team Overrides",
            description: "Build your crew, get paid on their wins"
        },
        {
            icon: MarketingIcon,
            title: "Residual Income",
            description: "Repeat customers keep paying you every month"
        },
        {
            icon: MarketingIcon,
            title: "Rank Bonuses",
            description: "Level up your status, unlock stacks of extra cash"
        },
        {
            icon: PlaybooksIcon,
            title: "Lifestyle Rewards",
            description: "Trips, luxury gifts, and recognition when you rise"
        }
    ]

    return (
        <section className='bg-customeBlack1 py-20 px-4'>
            <div className='max-w-7xl mx-auto'>
                {/* Main Headline */}
                <div className='text-center mb-16'>
                    <h4 className='text-customeWhite md:text-24 text-18 font-bold mb-2'>How You</h4>
                    <h2 className='text-customeYellow xl:text-64 md:text-48 text-32 font-cinzel uppercase font-bold'>GET PAID</h2>
                    <p className='text-customeWhite xl:text-24 text-18 font-satoshi'>Every sale, every recruit, every reorder builds your bag</p>
                </div>

                {/* Feature Cards Grid */}
                <div className='space-y-8'>
                    {/* Top Row - First 3 cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {features.slice(0, 3).map((feature, index) => (
                            <div
                                key={index}
                                className='bg-customeGray4 rounded-lg p-6 flex flex-col items-center text-center h-full'
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className='mb-4 object-contain'
                                />
                                <h3 className='text-customeYellow md:text-24 text-18 font-bold font-satoshi capitalize mb-4'>
                                    {feature.title}
                                </h3>
                                <p className='text-customeWhite md:text-16 text-14 leading-relaxed font-light'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - Last 2 cards centered */}
                    <div className='flex flex-col md:flex-row justify-center gap-8'>
                        {features.slice(3, 5).map((feature, index) => (
                            <div
                                key={index + 3}
                                className='bg-customeGray4 rounded-lg p-6 flex flex-col items-center text-center h-full md:w-[calc(33.333%-1rem)]'
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className='mb-4 object-contain'
                                />
                                <h3 className='text-customeYellow md:text-24 text-18 font-bold font-satoshi capitalize mb-4'>
                                    {feature.title}
                                </h3>
                                <p className='text-customeWhite text-base font-satoshi leading-relaxed'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Paid

