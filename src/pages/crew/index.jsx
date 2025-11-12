import React from 'react'
import { CommonHeroComponent, Arsenal, Empire, Blueprint, EndCrew } from '../../components'
import heroBg from '../../assets/images/crew/HeroCrewLong.png'

function Crew() {
  return (
    <>
      <CommonHeroComponent
        backgroundImage={heroBg}
        title="FRAGRANCE IS THE"
        title2="NEW CURRENCY"
        subtitle="Every bottle is more than fragrance it's a key. A key to presence, to status, to the kind of legacy that can't be ignored"
        titleSize1="xl:text-72 lg:text-64 md:text-48 text-32"
        titleSize2="xl:text-72 lg:text-64 md:text-48 text-32"
        buttonText1="Unlock Your Vault"
        showVaultOverlays={false}
      />
      <div className='relative z-10'>
        {/* Additional crew sections can be added here */}
        <Arsenal />
        <Empire />
        <Blueprint />
        <EndCrew />
      </div>
    </>
  )
}

export default Crew

