import { useEffect, useState } from "react"
import Header from "./header"
import { CommonYellowButton, CommonWhiteButton } from "../index"
import topLeft from '../../assets/images/vault/topLeft.png'
import topRight from '../../assets/images/vault/topRight.png'
import bottomLeft from '../../assets/images/vault/bottomLeft.png'
import bottomRight from '../../assets/images/vault/bottomRight.png'
import center from '../../assets/images/vault/center.png'

const CommonHeroComponent = ({
  backgroundImage,
  title,
  titleSize1 = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  title2,
  titleSize2 = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  subtitle,
  buttonText1,
  buttonText2,
  defaultButtonText1 = "Login to the Vault",
  defaultButtonText2 = "Join the Heist",
  showButtons = true,
  showVaultOverlays = true,
  children,
}) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        // backgroundPosition: `center ${offset * 0.4}px`,
        backgroundPosition: `center`,
      }}
    >
      {/* Header inside Hero */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#21201F]/70 z-10" />

      {/* Vault Overlay Images */}
      {showVaultOverlays && (
        <div className="absolute inset-0 z-15">
          {/* Top Left */}
          <img
            src={topLeft}
            alt="Top Left Overlay"
            className="absolute top-[0px] left-[0px] w-auto h-auto"
            // className="absolute -top-[159px] -left-[299px] w-[871px] h-[782px]"
          />
          
          {/* Top Right */}
          <img
            src={topRight}
            alt="Top Right Overlay"
            className="absolute top-0 right-0 w-auto h-auto"
            // className="absolute -top-[256px] -left-[796px] w-[710px] h-[634px] rotate-[89.15deg]"
          />
          
          {/* Bottom Left */}
          <img
            src={bottomLeft}
            alt="Bottom Left Overlay"
            className="absolute bottom-0 left-0 w-auto h-auto"
          />
          
          {/* Bottom Right */}
          <img
            src={bottomRight}
            alt="Bottom Right Overlay"
            className="absolute bottom-0 right-0 w-auto h-auto"
          />
          
          {/* Center */}
          <img
            src={center}
            alt="Center Overlay"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
          />
        </div>
      )}

       {/* Hero Content */}
       <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4">
         {title && (
           <div className="text-center max-w-4xl mx-auto">
             <h1 className={`${titleSize1} text-white drop-shadow-2xl font-cinzel font-bold uppercase`}>
               {title}
             </h1>
           </div>
         )}
         {title2 && (
           <div className="text-center max-w-4xl mx-auto mt-4">
             <h1 className={`${titleSize2} text-customeYellow drop-shadow-2xl font-cinzel font-bold uppercase`}>
               {title2}
             </h1>
           </div>
         )}
         {subtitle && (
           <div className="text-center max-w-2xl mx-auto mt-8">
             <p className="text-white text-lg md:text-xl lg:text-24 font-satoshi">
               {subtitle}
             </p>
           </div>
         )}
         
         {/* Call-to-Action Buttons */}
         {showButtons && (
           <>
             {(buttonText1 || buttonText2) && (
               <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-12">
                 {buttonText1 && (
                   <CommonYellowButton>
                     {buttonText1}
                   </CommonYellowButton>
                 )}
                 {buttonText2 && (
                   <CommonWhiteButton>
                     {buttonText2}
                   </CommonWhiteButton>
                 )}
               </div>
             )}
             {!buttonText1 && !buttonText2 && (defaultButtonText1 || defaultButtonText2) && (
               <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-12">
                 {defaultButtonText1 && (
                   <CommonYellowButton>
                     {defaultButtonText1}
                   </CommonYellowButton>
                 )}
                 {defaultButtonText2 && (
                   <CommonWhiteButton>
                     {defaultButtonText2}
                   </CommonWhiteButton>
                 )}
               </div>
             )}
           </>
         )}
       </div>

    </div>
  )
}

export default CommonHeroComponent