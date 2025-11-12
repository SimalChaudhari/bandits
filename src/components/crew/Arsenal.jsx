import React from 'react'
import VaultIcon from '../../assets/images/crew/Vault.png'
import QrIcon from '../../assets/images/crew/Qr.png'
import MarketingIcon from '../../assets/images/crew/Marketing.png'
import PlaybooksIcon from '../../assets/images/crew/Playbooks.png'

function Arsenal() {
    const features = [
        {
            icon: VaultIcon,
            title: "Vault Link",
            description: "Your branded portal, clean, sharp, undeniable. Every sale tracked, every dollar tied to your name"
        },
        {
            icon: QrIcon,
            title: "Instant QR Code Generator",
            description: "Close deals in seconds. Spray, scan, secure. Fast money, no excuses"
        },
        {
            icon: MarketingIcon,
            title: "Affiliate Dashboard",
            description: "Watch the numbers climb in real time. Your empire, live and breathing"
        },
        {
            icon: MarketingIcon,
            title: "Marketing Arsenal",
            description: "Flyers, banners, visuals — pre-built with cinematic luxury that pulls eyes like gravity"
        },
        {
            icon: PlaybooksIcon,
            title: "Playbooks & Training",
            description: "Step-by-step blueprints. From first sale to empire builder — the path is already paved"
        }
    ]

    return (
        <section className='bg-customeBlack1 py-20 px-4'>
            <div className='max-w-7xl mx-auto'>
                {/* Main Headline */}
                <div className='text-center mb-16'>
                    <h4 className='text-customeWhite md:text-24 text-18 font-bold mb-2'>The</h4>
                    <h2 className='text-customeYellow xl:text-64 md:text-48 text-32 font-cinzel uppercase font-bold'>Arsenal</h2>
                    <p className='text-customeWhite xl:text-24 text-18 font-satoshi'>An empire doesn’t rise on scraps. It rises on weapons of influence</p>
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

export default Arsenal

