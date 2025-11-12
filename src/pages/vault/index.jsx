import React from 'react'
import { CommonHeroComponent, Unlock, Rewards, NeedToWin, EndVault } from '../../components'
import vaultBg from '../../assets/images/vault/valutBg.png'

function Vault() {
  return (
    <>
      <CommonHeroComponent
        backgroundImage={vaultBg}
        title="WELCOME TO THE"
        title2="VAULT"
        subtitle="Your one-stop portal to track sales, grow your crew, and collect your cut."
        titleSize1="xl:text-72 lg:text-64 md:text-48 text-32"
        titleSize2="xl:text-72 lg:text-64 md:text-48 text-32"
        defaultButtonText1="Login to the Vault"
        defaultButtonText2="Join the Heist"
      />
      <div className='relative z-10'>
      {/* <img src={WinLeft} alt="WinLeft" className='absolute left-0 z-20'/> */}
      {/* <img src={WinLeft} alt="WinLeft" className='absolute left-[799px] z-20'/> */}
      <Unlock />
      <Rewards />
      <NeedToWin />
      <EndVault />
      </div>
    </>
  )
}

export default Vault