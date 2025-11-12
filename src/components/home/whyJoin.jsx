import React from 'react'
import Users from '../../assets/images/home/Users.svg'
import Exclusive from '../../assets/images/home/Exclusive.svg'
import Uncapped from '../../assets/images/home/Uncapped.svg'

function WhyJoin() {
  const features = [
    {
      icon: Uncapped,
      title: "UNCAPPED COMMISSION",
      description: "Earn on every sale and every referral with no limits."
    },
    {
      icon: Exclusive,
      title: "EXCLUSIVE SCENTS",
      description: "Premium fragrances crafted to sell themselves."
    },
    {
      icon: Users,
      title: "POWER IN NUMBERS",
      description: "Grow your crew, expand your reach, and get rewarded forever."
    }
  ]

  return (
    <section className='bg-customeBlack3 text-white py-20'>
      <div className='mx-auto xl:px-16 lg:px-12 px-4 relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-24 text-white font-cinzel font-bold uppercase tracking-wider mb-2'>
            WHY JOIN
          </h2>
          <h1 className='md:text-64 text-40 font-cinzel font-bold text-customeYellow uppercase mb-6'>
            THE CREW?
          </h1>
          <p className='md:text-24 text-18  font-satoshi text-white max-w-4xl mx-auto leading-relaxed'>
            This isn't just fragrance. This is the heist of a lifetime and your cut is waiting.
          </p>
        </div>

        {/* Features Grid */}
        <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 flex-wrap'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-customeGray2 rounded-2xl max-w-[390px] w-full md:w-auto p-8 text-center shadow-lg hover:scale-105 transition-all duration-300 flex flex-col'
            >
              {/* Icon */}
              <div className='flex justify-center mb-6'>
                <img
                  src={feature.icon}
                  alt={feature.title}
                // className='w-16 h-16'
                />
              </div>

              {/* Title */}
              <h3 className='text-24 font-cinzel font-bold text-customeYellow uppercase mb-4'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-16 font-satoshi text-white leading-relaxed max-w-[400px] mx-auto flex-grow'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoin