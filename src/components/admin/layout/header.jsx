import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import profile from '../../../assets/images/common/profile.png'
import { getPageTitle } from './link'

function Header({ onMenuClick }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const location = useLocation()

    return (
        <header className="bg-customeBlack2 border-b lg:border-r border-t lg:border-l border-customeYellow lg:rounded-[20px] px-4 lg:px-6 py-4 mx-0 lg:mx-6 mt-4 flex items-center justify-between">
            {/* Left Section - Hamburger & Title */}
            <div className="flex items-center gap-4">
                {/* Hamburger Menu (Mobile) */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden text-white hover:text-customeYellow transition-colors"
                >
                    <FaBars size={24} />
                </button>

                {/* Title */}
                <h1 className="text-24 lg:text-32 font-satoshi font-semibold text-customeWhite">
                    {getPageTitle(location.pathname)}
                </h1>
            </div>

            {/* Right Section - User Profile Widget */}
            <div className="relative">
                <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-3 px-3 py-2"
                >
                    {/* Profile Picture */}
                    <div className="w-10 h-10 rounded-full bg-customeGray1 overflow-hidden flex-shrink-0">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* User Name */}
                    <span className="hidden lg:block text-white font-satoshi text-16">
                        Moni Roy
                    </span>

                    {/* Dropdown Arrow - Circular Golden Button */}
                    <div className="w-6 h-6 rounded-full border border-customeYellow flex items-center justify-center flex-shrink-0">
                        <FaChevronDown
                            size={10}
                            className={`text-customeYellow transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}
                        />
                    </div>
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-customeBlack3 rounded-lg shadow-lg border border-customeGray1 py-2 z-50">
                        <button className="w-full text-left px-4 py-2 text-customeWhite1 hover:bg-customeBlack2 font-satoshi text-sm transition-colors">
                            Profile Settings
                        </button>
                        <button className="w-full text-left px-4 py-2 text-customeWhite1 hover:bg-customeBlack2 font-satoshi text-sm transition-colors">
                            Account Settings
                        </button>
                        <div className="border-t border-customeGray1 my-1"></div>
                        <button className="w-full text-left px-4 py-2 text-customeRed hover:bg-customeBlack2 font-satoshi text-sm transition-colors">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header

