import React, { useState, useRef, useEffect } from 'react'

function CommonDropdown({
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
  selectClassName = '',
  iconClassName = '',
  variant = 'golden' // 'golden' or 'default'
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const baseSelectClasses = "appearance-none cursor-pointer focus:outline-none rounded-lg px-4 py-2 pr-8 text-sm font-satoshi transition-all duration-200 w-full"
  
  const variantClasses = {
    golden: "bg-customeYellow border border-customeYellow text-white font-bold hover:bg-customeYellow/90",
    default: "bg-customeBlack1 border border-customeGray1 text-customeWhite1 hover:border-customeYellow"
  }

  const selectClasses = `${baseSelectClasses} ${variantClasses[variant]} ${selectClassName}`

  // Get current selected label
  const getSelectedLabel = () => {
    if (!value) return placeholder
    const selectedOption = options.find(opt => {
      const optValue = typeof opt === 'string' ? opt : opt.value
      return optValue === value
    })
    if (!selectedOption) return placeholder
    return typeof selectedOption === 'string' ? selectedOption : selectedOption.label
  }

  const handleOptionClick = (optionValue) => {
    if (onChange) {
      onChange({ target: { value: optionValue } })
    }
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={selectClasses}
      >
        <span className="block truncate text-left">{getSelectedLabel()}</span>
        
        {/* Custom dropdown arrow */}
        <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${iconClassName}`}>
          <svg 
            className={`w-4 h-4 ${variant === 'golden' ? 'text-white' : 'text-customeWhite1'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-customeBlack2 border border-customeGray1 rounded-lg shadow-2xl overflow-hidden" style={{ animation: 'fadeIn 0.2s ease-in-out forwards' }}>
          <div className="py-1 max-h-60 overflow-auto">
            {placeholder && (
              <button
                type="button"
                onClick={() => handleOptionClick('')}
                className={`w-full text-left px-4 py-2.5 text-sm font-satoshi transition-colors ${
                  !value 
                    ? 'bg-customeYellow text-white' 
                    : 'text-customeWhite1 hover:bg-customeBlack1'
                }`}
              >
                {placeholder}
              </button>
            )}
            {options.map((option, index) => {
              const optionValue = typeof option === 'string' ? option : option.value
              const optionLabel = typeof option === 'string' ? option : option.label
              const optionDisabled = typeof option === 'object' ? option.disabled : false
              const isSelected = optionValue === value

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => !optionDisabled && handleOptionClick(optionValue)}
                  disabled={optionDisabled}
                  className={`w-full text-left px-4 py-2.5 text-sm font-satoshi transition-colors ${
                    isSelected
                      ? 'bg-customeYellow text-white font-medium'
                      : optionDisabled
                      ? 'text-customeGray1 cursor-not-allowed'
                      : 'text-customeWhite1 hover:bg-customeBlack1'
                  }`}
                >
                  {optionLabel}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default CommonDropdown

