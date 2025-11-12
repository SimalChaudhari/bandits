import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CommonYellowButton, Header, CommonInput } from '../../components'
import adminBack from '../../assets/images/common/adminBack.png'

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    let isValid = true

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Please fill out this field.'
      isValid = false
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field.'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !/^\d{10,}$/.test(formData.email.replace(/\D/g, ''))) {
      newErrors.email = 'Please enter a valid email or phone number.'
      isValid = false
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = 'Please fill out this field.'
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      isValid = false
    }

    // Confirm Password validation
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please fill out this field.'
      isValid = false
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle successful registration here
      console.log('Form submitted:', formData)
      // Add your registration API call here
    }
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${adminBack})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />
      
      {/* Header */}
      {/* <div className="relative z-50">
        <Header />
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Left Side - Welcome Message */}
            <div className="w-full lg:flex-1 flex flex-col md:text-left text-center items-center justify-center">
              <div className=''>
                <h1 className="text-48 md:text-72 font-cinzel font-bold capitalize text-customeWhite1 mb-2">
                  Your{' '}
                  <span className="text-customeYellow font-cinzel">Invitation</span>
                </h1>
                <h1 className="text-48 md:text-72 font-cinzel font-bold capitalize mb-2 text-customeWhite1">
                  To The{' '}
                  <span className="text-customeYellow font-cinzel">Crew</span>
                </h1>
                <h1 className="text-48 md:text-72 font-cinzel font-bold capitalize text-white mb-4">
                  Starts Here
                </h1>
                {/* Dashed Line */}
                <div className="w-full h-0.5 border-t-2 border-dashed border-customeYellow"></div>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full max-w-md lg:flex-1 lg:flex lg:justify-end">
              <div
                className="bg-customeBlack1 rounded-2xl p-8 shadow-2xl w-full border border-[#AFAFAF]"
              >
                {/* Form Title */}
                <h2 className="text-28 md:text-36 font-bold text-customeWhite1 mb-2 font-satoshi capitalize">
                  Signup
                </h2>
                <p className="text-customeWhite1 md:text-16 text-12 font-satoshi mb-8 capitalize">
                  Just some details to get you in.!
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Username Field */}
                  <CommonInput
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    error={errors.username}
                  />

                  {/* Email / Phone Field */}
                  <CommonInput
                    type="text"
                    placeholder="Email / Phone"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />

                  {/* Password Field */}
                  <CommonInput
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    showPasswordToggle={true}
                  />

                  {/* Confirm Password Field */}
                  <CommonInput
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    showPasswordToggle={true}
                  />

                  {/* Signup Button */}
                  <CommonYellowButton 
                    width="w-full" 
                    height="h-[50px]" 
                    className="rounded-lg capitalize mt-4 md:text-20 text-16"
                    type="submit"
                  >
                    Join the Heist
                  </CommonYellowButton>

                  {/* Links */}
                  <div className="space-y-3 text-center">
                    <p className="text-customeWhite1 md:text-16 text-12 font-satoshi capitalize">
                      Already Registered?{' '}
                      <Link to="/login" className="text-customeYellow hover:text-customeYellow/80 transition-colors capitalize">
                        Login
                      </Link>
                    </p>
                    <div className="flex justify-between text-customeWhite1 md:text-16 text-12 font-satoshi pt-4">
                      <Link to="/terms" className="hover:text-customeYellow transition-colors capitalize">
                        Terms & Conditions
                      </Link>
                      <Link to="/support" className="hover:text-customeYellow transition-colors capitalize">
                        Support
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
