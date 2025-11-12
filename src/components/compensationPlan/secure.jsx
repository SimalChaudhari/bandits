import React from 'react'
import ImpactIcon from '../../assets/images/crew/Impact.png'
import ExpandIcon from '../../assets/images/crew/Expand.png'
import TogetherIcon from '../../assets/images/crew/Together.png'

function Secure() {
  const features = [
    {
      icon: ImpactIcon,
      title: "Hustler",
      description: "Start selling, get your first wins"
    },
    {
      icon: ExpandIcon,
      title: "Crew Leader",
      description: "Build a small team, unlock overrides."
    },
    {
      icon: TogetherIcon,
      title: "Boss",
      description: "Multiple legs, consistent volume, serious checks."
    }
  ]

  return (
    <section className='bg-customeBlack3 py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Headline */}
        <div className='text-center mb-12'>
          <h4 className='text-customeWhite md:text-24 text-18 font-satoshi font-bold capitalize mb-2'>
            Climb the Ladder
          </h4>
          <h2 className='text-28 md:text-30 lg:text-40 xl:text-64 font-cinzel font-bold text-customeYellow uppercase mb-6'>
            SECURE THE BAG
          </h2>
          <p className='text-customeWhite text-16 md:text-22 lg:text-24 font-satoshi max-w-3xl mx-auto'>
            From hustler to kingpin every step comes with bigger rewards
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
              <p className='text-customeWhite text-base font-satoshi leading-relaxed md:max-w-[230px] max-w-sm mx-auto'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Secure

