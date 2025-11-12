import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { CommonYellowButton } from '../index'
import logo from '../../assets/images/app/logo.svg'

// Navigation Links Data
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/crew', label: 'The Crew' },
  { to: '/vault', label: 'Shop the Vault' },
  { to: '/compensation-plan', label: 'Comp Plan' },
  { to: '/join', label: 'Join Now' }
]

// Navigation Link Component
const NavLink = ({ to, label, isActive, isMobile = false, onClick }) => {
  const baseClasses = isMobile 
    ? 'block font-satoshi text-xl font-medium transition-all duration-300 border-b border-transparent hover:border-customeYellow pb-2 transform hover:translate-x-2'
    : 'font-satoshi font-medium transition-colors'
  
  const activeClasses = isActive 
    ? isMobile 
      ? 'text-customeYellow border-customeYellow' 
      : 'text-customeYellow'
    : 'text-white hover:text-customeYellow'

  return (
    <Link
      to={to}
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="w-full xl:px-16 lg:px-12  px-4 md:py-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Baddies & Bandits Logo" className="w-[52px] h-[52px] md:w-[72px] md:h-[72px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex xl:gap-20 lg:gap-12 md:gap-8 gap-4 whitespace-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                isActive={location.pathname === link.to}
              />
            ))}
          </nav>

          {/* Desktop Login Button */}
          <div className="md:block hidden">
            <Link to="/login">
              <CommonYellowButton width="w-auto" height="h-auto" className="py-2 px-4">
                Login / Dashboard
              </CommonYellowButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-customeYellow transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gradient-to-br from-customeBlack2 via-customeGray2 to-customeBlack1 z-50 animate-in slide-in-from-right-full duration-500 ease-out overflow-y-auto">
            <div className="flex flex-col min-h-full animate-in fade-in duration-700 delay-200">
              {/* Header Section */}
              <div className="flex justify-between items-center px-6 py-6 border-b border-gray-700 animate-in slide-in-from-top duration-500 delay-300">
                <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                  <img src={logo} alt="Baddies & Bandits Logo" className="w-12 h-12" />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-customeYellow transition-colors"
                >
                  <FaTimes size={28} />
                </button>
              </div>

              {/* Main Content */}
              {/* <div className="flex-1 flex flex-col justify-center px-8"> */}
              <div className="flex-1 flex flex-col pt-10 px-8">
                {/* Navigation Links */}
                <nav className="space-y-8 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      label={link.label}
                      isActive={location.pathname === link.to}
                      isMobile={true}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  ))}
                </nav>

                {/* Login Button */}
                <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-900">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CommonYellowButton width="w-auto" height="h-auto" className="py-2 px-4">
                      Login / Dashboard
                    </CommonYellowButton>
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 border-t border-gray-700 animate-in fade-in duration-500 delay-1000">
                <p className="text-center text-gray-400 text-sm font-satoshi">
                  © 2025 Baddies and Bandits Inc.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header