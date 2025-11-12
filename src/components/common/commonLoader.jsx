import React from 'react'

function CommonLoader({ className = '', label = 'Loading…' }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <div className="loader" />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default CommonLoader