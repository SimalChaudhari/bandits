import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { PiEyeClosedBold } from 'react-icons/pi'

function CommonInput({
  id,
  name,
  type = "text",
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  disabled = false,
  showPasswordToggle = false,
  icon,
  iconPosition = "right",
  iconOnClick,
  error,
  errorClassName = "",
  className = "",
  inputClassName = "",
  labelClassName = "",
  containerClassName = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = showPasswordToggle && type === "password" 
    ? (showPassword ? "text" : "password") 
    : type

  const defaultInputClasses = "w-full px-4 py-3 bg-customeBlack1 border rounded-lg text-white placeholder-white focus:outline-none transition-colors font-satoshi"
  const borderClasses = error 
    ? "border-customeRed focus:border-customeRed" 
    : "border-white focus:border-customeYellow"
  const passwordPadding = showPasswordToggle && type === "password" ? "pr-12" : ""
  
  const errorMessage = typeof error === "string" ? error : "Please fill out this field."
  
  return (
    <div className={`${containerClassName}`}>
      {label && (
        <label 
          htmlFor={id} 
          className={`block text-customeWhite1 md:text-16 text-12 font-satoshi mb-2 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === "left" && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-customeWhite1">
            {icon}
          </div>
        )}
        
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`${defaultInputClasses} ${borderClasses} ${passwordPadding} ${icon && iconPosition === "left" ? "pl-12" : ""} ${inputClassName} ${className}`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />

        {showPasswordToggle && type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-customeWhite1 hover:text-customeYellow transition-colors"
          >
            {showPassword ? <FaEye size={20} /> : <PiEyeClosedBold size={20} />}
          </button>
        )}

        {icon && iconPosition === "right" && !showPasswordToggle && (
          <button
            type="button"
            onClick={iconOnClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-customeWhite1 hover:text-customeYellow transition-colors z-10"
          >
            {icon}
          </button>
        )}
      </div>
      
      {/* Plain Error Message (below input) */}
      {error && (
        <p 
          id={`${id}-error`}
          className={`text-customeRed text-sm font-satoshi mt-1 ${errorClassName}`}
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default CommonInput

