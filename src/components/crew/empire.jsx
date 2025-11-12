import React from 'react'
import ImpactIcon from '../../assets/images/crew/Impact.png'
import ExpandIcon from '../../assets/images/crew/Expand.png'
import TogetherIcon from '../../assets/images/crew/Together.png'

function Empire() {
  const features = [
    {
      icon: ImpactIcon,
      title: "Multiply Your Impact",
      description: "Every connection is locked to you in the Vault. Their moves become part of your story"
    },
    {
      icon: ExpandIcon,
      title: "Expand Your Reach",
      description: "Your network becomes your distribution, spreading the Vault further than one person ever could."
    },
    {
      icon: TogetherIcon,
      title: "Move Further Together",
      description: "Momentum moves quicker when the grind is shared."
    }
  ]

  return (
    <section className='bg-customeBlack3 py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Headline */}
        <div className='text-center mb-12'>
          <h4 className='text-customeWhite md:text-24 text-18 font-satoshi font-bold capitalize mb-2'>
            Why Build
          </h4>
          <h2 className='text-28 md:text-30 lg:text-40 xl:text-64 font-cinzel font-bold text-customeYellow capitalize mb-6'>
            AN EMPIRE?
          </h2>
          <p className='text-customeWhite text-16 md:text-22 lg:text-24 font-satoshi max-w-3xl mx-auto'>
            One seller makes income. An empire makes history.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-customeGray2 border border-customeYellow rounded-lg p-6 py-12 flex flex-col items-center text-center h-full'
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className='w-auto h-auto mb-4 object-contain'
              />
              <h3 className='text-customeYellow text-2xl font-cinzel font-bold uppercase mb-4'>
                {feature.title}
              </h3>
              <p className='text-customeWhite text-base font-satoshi leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Empire

