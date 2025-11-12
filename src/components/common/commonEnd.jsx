import React from 'react'

function CommonEnd({ backgroundImage, children, className = "", overlayColor }) {
    return (
        <div className='lg:p-28 md:p-20 bg-customeBlack1'>
            <div className={`w-full h-auto py-20 bg-cover bg-center flex flex-col items-center justify-center relative z-10 ${className}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                {/* Overlay - Only show if overlayColor prop is provided */}
                {overlayColor && (
                    <div className={`absolute inset-0 ${overlayColor} z-0`} />
                )}

                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CommonEnd

