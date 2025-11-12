import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CommonYellowButton, CommonCheckBox, CommonInput } from '../../components'
import adminBack from '../../assets/images/common/adminBack.png'

function Login() {
  const [rememberMe, setRememberMe] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    username: '',
    password: ''
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
      password: ''
    }
    let isValid = true

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Please fill out this field.'
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

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle successful login here
      console.log('Form submitted:', formData)
      // Add your login API call here
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
            <div className="text-center w-full lg:flex-1 flex flex-col items-center justify-center">
              <div className=''>

                <h1 className="text-48 md:text-72 font-cinzel font-bold capitalize text-white mb-2">
                  Welcome Back
                </h1>
                <h1 className="text-48 md:text-72 font-cinzel font-bold capitalize mb-4">
                  <span className="text-white font-cinzel">To The </span>
                  <span className="text-customeYellow font-cinzel">Vault..!</span>
                </h1>
                {/* Dashed Line */}
                <div className="w-full  h-0.5 border-t-2 border-dashed border-customeYellow"></div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full max-w-md lg:flex-1 lg:flex lg:justify-end">
              <div
                className="bg-customeBlack1 rounded-2xl p-8 shadow-2xl w-full border border-[#AFAFAF]"
              // style={{
              //   borderWidth: '1px',
              //   borderStyle: 'solid',
              //   borderColor: 'transparent',
              //   borderImageSource: 'linear-gradient(166.93deg, #AFAFAF 3.24%, rgba(96, 96, 96, 0) 96.43%), linear-gradient(317.92deg, rgba(255, 255, 255, 0.6) 1.48%, rgba(0, 0, 0, 0) 67.95%)',
              //   borderImageSlice: 1
              // }}
              >
                {/* Form Title */}
                <h2 className="text-28 md:text-36 font-bold text-customeWhite1 mb-2 font-satoshi capitalize">
                  Login
                </h2>
                <p className="text-customeWhite1 md:text-16 text-12 font-satoshi mb-8 capitalize">
                  Glad you're back.!
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
                    // required
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
                    // required
                  />

                  {/* Remember Me Checkbox */}
                  <div className="flex items-center gap-3">
                    <CommonCheckBox
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />

                    <div>
                      <label htmlFor="remember" className="text-customeWhite1 md:text-16 text-12 font-satoshi cursor-pointer">
                        Remember me
                      </label>
                    </div>
                  </div>

                  {/* Login Button */}
                  <CommonYellowButton
                    width="w-full"
                    height="h-[50px]"
                    className="rounded-lg capitalize mt-4 md:text-20 text-16"
                    type="submit"
                  >
                    Unlock the Vault
                  </CommonYellowButton>

                  {/* Links */}
                  <div className="space-y-3 text-center">
                    <Link
                      to="/forgot-password"
                      className="block text-customeWhite1 hover:text-customeYellow md:text-16 text-12 font-satoshi transition-colors capitalize"
                    >
                      Forgot password?
                    </Link>
                    <p className="text-customeWhite1 md:text-16 text-12 font-satoshi capitalize">
                      Don't have an account ?{' '}
                      <Link to="/register" className="text-customeYellow hover:text-customeYellow/80 transition-colors capitalize">
                        Signup
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

export default Login
