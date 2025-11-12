import React from 'react'
import Header from '../layout/header'
import { CommonYellowButton, CommonWhiteButton } from '../index'

function HomeHeroComponent({ title, subtitle, heroBg, children }) {
  return (
    <div className="relative bg-black w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Main Hero Image */}
        <img
          src='https://c.animaapp.com/mfz1ytmtJuEhxk/img/b2d04aaf-e388-471f-a883-3eb194446a23-1.png'
          alt="Hero Image"
          className="absolute top-0 right-0 w-full xl:w-7/10 h-screen object-cover"
        />
        {/* Overlay Layer using gradient - Hidden on mobile */}
        <div
          className="hidden xl:block absolute inset-0 z-1"
          style={{
            backgroundImage: `linear-gradient(to right, 
            #0b0b0c -30%, 
            #1c1c1c 30%, 
            transparent 100%)`
          }}
        />
        <div className="xl:hidden absolute top-0 left-0 w-full h-full bg-[#1c1c1c91] z-1"></div>
      </div>

      {/* Hero Content - Responsive */}
      <div className="relative z-10 flex items-center min-h-screen xl:px-16 lg:px-12  px-4 ">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-72 font-cinzel font-bold text-customeYellow mb-4 lg:mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-customeWhite text-lg md:text-xl lg:text-24 font-satoshi mb-6 lg:mb-8 max-w-lg">
                {subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <CommonYellowButton className="px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base" width="w-auto" height="h-auto">
                  Join the Heist
                </CommonYellowButton>
                <CommonWhiteButton className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base" width="w-auto" height="h-auto">
                  Shop the Vault
                </CommonWhiteButton>
              </div>
            </div>

            {/* Right Content - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block w-1/2">
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeHeroComponent