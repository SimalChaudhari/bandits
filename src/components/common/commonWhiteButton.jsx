import React from 'react'

function CommonWhiteButton({ children, onClick, className = "", disabled = false, width = "w-[191px]", height = "h-[50px]" }) {
  return (
    <button 
      className={`animatedBtn ${width} ${height} bg-customeWhite border-2 border-customeYellow text-customeBlack1 font-satoshi font-bold text-sm md:text-base rounded-[10px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default CommonWhiteButton
