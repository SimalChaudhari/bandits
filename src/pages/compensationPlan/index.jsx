import React from 'react'
import { CommonHeroComponent, Paid, Secure, Bold } from '../../components'
import compPlanBg from '../../assets/images/compensationPlan/compensationPlan.png'

function CompensationPlan() {
  return (
    <>
      <CommonHeroComponent
        backgroundImage={compPlanBg}
        title="THE BLUEPRINT TO"
        title2="BUILD YOUR EMPIRE"
        subtitle="This isn't guesswork it's strategy. Our comp plan is designed to reward hustlers, leaders, and visionaries at every step."
        titleSize1="xl:text-72 lg:text-64 md:text-48 text-32"
        titleSize2="xl:text-72 lg:text-64 md:text-48 text-32"
        buttonText1="Join the Plan"
        showVaultOverlays={false}
      />
      <div className='relative z-10'>
        {/* Additional compensation plan sections can be added here */}
        <Paid />
        <Secure />
        <Bold />
      </div>
    </>
  )
}

export default CompensationPlan

