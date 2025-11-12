import React, { useState } from 'react'
import Sidebar from './sidebar'
import Header from './header'
import bgImage from '../../../assets/images/common/adminBack.png'

function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div 
      className="flex h-screen bg-customeBlack1 overflow-hidden relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0" />
      
      {/* Sidebar */}
      <div className="w-0 lg:w-auto md:relative z-30 flex-shrink-0 overflow-visible">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10 min-w-0">
        {/* Header */}
        <Header onMenuClick={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-0">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout

