import React from 'react'
import Stats from '../../assets/images/vault/stats.png'
import Money from '../../assets/images/vault/Money.png'
import Team from '../../assets/images/vault/Team.png'

function Unlock() {
  const features = [
    {
      icon: Stats,
      title: "REAL-TIME DASHBOARD",
      description: "Track your clicks, sales, and commissions instantly."
    },
    {
      icon: Team,
      title: "CREW MANAGEMENT",
      description: "See who's joined your crew and how they're performing."
    },
    {
      icon: Money,
      title: "LIFETIME EARNINGS",
      description: "Monitor payouts from every order, every level, every day."
    }
  ]

  return (
    <section className='bg-customeBlack3 text-white py-20'>
      <div className='mx-auto xl:px-16 lg:px-12 px-4 relative z-30'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-32 md:text-40 lg:text-48  font-bold uppercase mb-6'>
            <span className='text-white font-cinzel'>WHAT YOU'LL </span>
            <span className='text-customeYellow font-cinzel'>UNLOCK</span>
          </h1>
          <p className='text-white text-18 md:text-20 lg:text-24 font-satoshi max-w-4xl mx-auto leading-relaxed'>
            Everything you need to build your empire and keep the money flowing
          </p>
        </div>

        {/* Features Grid */}
        <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 flex-wrap'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-customeGray2 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition-all duration-300 relative z-20 flex flex-col max-w-[390px] w-full md:w-auto'
            >
              {/* Icon */}
              <div className='flex justify-center mb-6'>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className=''
                />
              </div>

              {/* Title */}
              <h3 className='text-customeYellow text-20 md:text-24 font-cinzel font-bold uppercase mb-4'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-white text-16 font-satoshi flex-grow'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Unlock