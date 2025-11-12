import React from 'react'
import { HomeHeroComponent } from '../../components'
import heroBg from '../../assets/images/home/heroBg.svg'
import { WhyJoin, Works, Collection, Join } from '../../components'

function Home() {
  return (
    <div className='relative'>
      <HomeHeroComponent
        title="THE HEIST BEGINS HERE"
        subtitle="The doors are locked, the table is set the only question is, are you in?"
        heroBg={heroBg}
      />
      <img className="group" src="https://c.animaapp.com/mfz1ytmtJuEhxk/img/group-2.png"/>
      <WhyJoin />
      <div className='bg-customeBlack1 mx-auto xl:px-16 lg:px-12 px-4'>
        <Works />
        <Collection />
        <Join />
      </div>
    </div>
  )
}

export default Home