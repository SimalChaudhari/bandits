import React from 'react'

function CommonYellowButton({ children, onClick, className = "", disabled = false, width = "w-[191px]", height = "h-[50px]" }) {
  return (
    <button 
      className={`AnimatedBtn ${width} ${height} bg-customeYellow text-customeBlack1 font-satoshi font-bold text-sm md:text-base rounded-lg ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default CommonYellowButton
