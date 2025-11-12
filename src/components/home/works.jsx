import React from 'react'
import Line from '../../assets/images/home/line.svg'

function Works() {
  const steps = [
    {
      number: "1",
      title: "RECRUIT YOUR CREW",
      description: "Share your link. Every sign-up is locked in for life."
    },
    {
      number: "2",
      title: "SELL THE SCENT",
      description: "Fragrances built for demand, designed to sell themselves."
    },
    {
      number: "3",
      title: "COLLECT COMMISSIONS",
      description: "Earn on every sale, every reorder, every referral."
    }
  ]

  return (
    <section className='bg-customeBlack1 text-white py-20'>
      <div className=''>
        {/* Header Section */}
        <div className='text-center mb-16 flex flex-col items-center'>
          <h2 className='text-24 text-customeWhite font-cinzel font-bold uppercase tracking-wider mb-2'>
            HOW THE
          </h2>
          <h1 className='md:text-64 text-48 font-cinzel font-bold text-customeYellow uppercase mb-4'>
            HEIST WORKS
          </h1>
          {/* Golden Underline */}
          {/* <div className='w-20 h-1 bg-customeYellow mx-auto mb-6'></div> */}

          <p className='md:text-24 text-18 font-satoshi text-customeWhite max-w-4xl mx-auto leading-relaxed'>
            Three simple steps to start building your fragrance empire.
          </p>
          <img src={Line} alt="Line" className='w-[439.5px] h-full items-center mt-5' />

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
              <h3 className='text-24 font-cinzel font-bold text-customeYellow uppercase mb-4'>
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

export default Works
