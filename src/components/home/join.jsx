import React from 'react'
import { CommonEnd, CommonYellowButton } from '../index'
import JoinBg from '../../assets/images/home/joinBg.png'
import Network from '../../assets/images/home/network.svg'
import Support from '../../assets/images/home/support.svg'
import Value from '../../assets/images/home/value.svg'

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center gap-1 w-full md:w-auto">
        <span className='h-[56px] w-[56px] flex items-center justify-center'>
            {icon}
        </span>
        <h3 className="text-customeYellow text-20 md:text-24 font-cinzel font-bold uppercase text-center">{title}</h3>
        <p className="text-customeWhite text-16 md:text-20 max-w-xs text-center">{description}</p>
    </div>
)

function Join() {
    const features = [
        {
            icon: <img src={Value} alt="Value" />,
            title: "LIFETIME VALUE",
            description: "Repeat customers keep paying you."
        },
        {
            icon: <img src={Network} alt="Network" />,
            title: "NETWORK POWER",
            description: "Earn on every level of your crew."
        },
        {
            icon: <img src={Support} alt="Support" />,
            title: "ALL-IN SUPPORT",
            description: "Starter kits, scripts & training included."
        }
    ]

    return (
        <CommonEnd backgroundImage={JoinBg}>
            <div className='text-center'>
                <h5 className='text-customeWhite text-24 font-cinzel font-bold uppercase tracking-wider'>Join the</h5>
                <h1 className='text-customeYellow lg:text-96 xl:text-64 text-48 font-cinzel font-bold uppercase tracking-wider'>Heist</h1>
                <p className='text-customeWhite text-24 max-w-[944px] mx-auto'>Turn your passion for fragrance into freedom. Build wealth, build your crew, and join the movement.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-16 mx-auto px-4">
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        <FeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                        {index < features.length - 1 && (
                            <div className="hidden md:block h-[92px] bg-customeGray1 rounded-[2px] border-2 border-customeGray1"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <CommonYellowButton width="w-[240px]" height="h-[50px]" className="rounded-[10px] text-16 font-bold">
                    Start Your Empire Today
                </CommonYellowButton>
            </div>
        </CommonEnd>
    )
}

export default Join