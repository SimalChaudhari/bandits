import React from 'react'
import Line from '../../assets/images/home/line.svg'

function Blueprint() {
  const steps = [
    {
      number: "1",
      title: "Join",
      description: "Unlock your vault and load up your arsenal"
    },
    {
      number: "2",
      title: "Recruit",
      description: "Share your Vault Link, flash your QR, and build your crew"
    },
    {
      number: "3",
      title: "Earn",
      description: "Every bottle sold by you and your crew pays you for life"
    }
  ]

  return (
    <section className='bg-customeBlack1 text-white py-20'>
      <div className=''>
        {/* Header Section */}
        <div className='text-center mb-16 flex flex-col items-center'>
          <h2 className='text-24 text-customeWhite font-satoshi font-bold mb-2'>
            the
          </h2>
          <h1 className='md:text-64 text-48 font-cinzel font-bold text-customeYellow uppercase mb-4'>
            HEIST BLUEPRINT
          </h1>

          <p className='md:text-24 text-20 font-satoshi text-customeWhite md:max-w-4xl md:px-0 px-5 mx-auto leading-relaxed mb-5'>
            Every great heist runs on a plan. Here's yours
          </p>
          <img src={Line} alt="Line" className='w-[439.5px] h-full items-center md:px-0 px-5' />

        </div>

        {/* Steps Grid */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap px-4'>
          {steps.map((step, index) => (
            <div key={index} className='text-center max-w-[364px] w-full'>
              {/* Number Badge */}
              <div className='flex justify-center mb-6'>
                <div className='w-[88px] h-[88px] rounded-full bg-customeYellow flex items-center justify-center p-2'>
                  <span className='text-48 font-cinzel font-bold text-customeBlack1 border-2 border-dashed rounded-full border-customeBlack1 w-[73px] h-[73px] flex items-center justify-center p-3'>
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className='text-24 font-satoshi font-bold text-customeYellow mb-4'>
                {step.title}
              </h3>

              {/* Description */}
              <p className='text-16 font-satoshi text-customeWhite max-w-sm mx-auto'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blueprint
