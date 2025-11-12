import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../../assets/images/app/logo.svg'
import { menuItems, bottomItems } from './link'

function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-customeBlack4 transform transition-transform duration-300 ease-in-out border-r border-customeYellow
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col h-screen relative flex-shrink-0
        `}
      >
        {/* Header Section */}
        <div className="px-4 pt-7 ">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full border-2 border-customeYellow flex items-center justify-center bg-customeBlack1">
              <img src={logo} alt="Logo" className="" />
            </div>
            
          </div>

          {/* Hamburger for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-customeWhite1 hover:text-customeYellow transition-colors"
          >
            <FaTimes size={20} />
          </button>

        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path || 
                             (item.path === '/admin' && (location.pathname === '/admin' || location.pathname === '/admin/'))
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      // Close sidebar on mobile when link is clicked
                      if (window.innerWidth < 1024) {
                        onClose()
                      }
                    }}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-customeBlack3 text-customeYellow' 
                        : 'text-customeWhite1 hover:bg-customeBlack3 hover:text-customeYellow'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-satoshi text-sm">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="px-4 py-6 space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onClose()
                  }
                }}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${item.isLogout 
                    ? 'text-customeRed hover:bg-customeBlack3' 
                    : 'text-customeWhite1 hover:bg-customeBlack3 hover:text-customeYellow'
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-satoshi text-sm">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </aside>
    </>
  )
}

export default Sidebar

