import React from 'react'
import { FaCreditCard, FaCalendarAlt, FaRegUser, FaLock } from 'react-icons/fa'
import { FiEdit3 } from 'react-icons/fi'
import CommonInput from '../../../components/common/commonInput'

// const whiteInputClasses = '!bg-white !text-customeBlack1 placeholder-customeGray1 !border !border-transparent focus:!border-customeYellow focus:!ring-0'
// const darkInputClasses = '!bg-customeBlack1 !text-customeWhite placeholder-customeGray1 !border !border-transparent focus:!border-customeYellow'

function Profile() {
  return (
    <div className="p-4 lg:p-6 space-y-10 text-customeWhite">
      <section className="bg-customeLightBlack/60 border border-customeYellow rounded-[24px] p-6 lg:p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold font-satoshi">Profile Info</h1>
            <p className="mt-2 text-sm uppercase tracking-wide text-customeGray1">*Required Fields</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-customeYellow bg-white/10 overflow-hidden flex items-center justify-center">
                <span className="text-customeGray1 text-sm font-satoshi">Profile picture</span>
              </div>
              <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-customeYellow text-customeBlack1 text-xs font-semibold rounded-full px-4 py-1 shadow">
                <FiEdit3 /> Edit
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CommonInput
            id="firstName"
            label="First Name*"
            placeholder="Full name here"
            // inputClassName={whiteInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
          />

          <CommonInput
            id="lastName"
            label="Last Name*"
            placeholder="Mobile Number here"
            // inputClassName={whiteInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
          />

          <CommonInput
            id="username"
            label="Username*"
            placeholder="Enter here"
            // inputClassName={whiteInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
          />

          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm font-medium text-customeGray1">
              <label htmlFor="email">Email*</label>
              <button className="text-customeYellow hover:underline">Verify Email</button>
            </div>
            <CommonInput
              id="email"
              placeholder="Email here"
            //   inputClassName={whiteInputClasses}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-customeGray1">Birthday*</label>
            <div className="grid grid-cols-3 gap-3">
              <CommonInput
                id="birthMonth"
                placeholder="09"
                // inputClassName={whiteInputClasses}
              />
              <CommonInput
                id="birthDay"
                placeholder="22"
                // inputClassName={whiteInputClasses}
              />
              <CommonInput
                id="birthYear"
                placeholder="1975"
                // inputClassName={whiteInputClasses}
              />
            </div>
          </div>

          <CommonInput
            id="address"
            label="Full Address"
            placeholder="Enter here"
            // inputClassName={whiteInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
          />

          <CommonInput
            id="newPassword"
            label="New Password"
            type="password"
            placeholder="********"
            // inputClassName={whiteInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
            showPasswordToggle
          />

          <CommonInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="********"
            // inputClassName={whiteInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
            showPasswordToggle
          />
        </div>
      </section>

      <section className="bg-customeLightBlack/60 border border-customeYellow rounded-[24px] p-6 lg:p-8 shadow-lg space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold font-satoshi">Enter Your Account Details</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <CommonInput
            id="cardName"
            label="Name on card"
            placeholder="Esther Howard"
            // inputClassName={darkInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
            icon={<FaRegUser />}
            iconPosition="left"
          />

          <CommonInput
            id="cardNumber"
            label="Card number"
            placeholder="123-456-789-"
            // inputClassName={darkInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
            icon={<FaCreditCard />}
            iconPosition="left"
          />

          <CommonInput
            id="expiry"
            label="Expiry date"
            placeholder="MM / YY"
            // inputClassName={darkInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
            icon={<FaCalendarAlt />}
            iconPosition="left"
          />

          <CommonInput
            id="ccv"
            label="CCV"
            placeholder="•••"
            type="password"
            // inputClassName={darkInputClasses}
            labelClassName="text-customeGray1"
            containerClassName="space-y-1"
            icon={<FaLock />}
            iconPosition="left"
            showPasswordToggle
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-customeYellow text-customeBlack1 font-semibold font-satoshi px-8 py-3 rounded-lg hover:bg-customeYellow/90 transition-colors">
            Save Changes
          </button>
        </div>
      </section>
    </div>
  )
}

export default Profile
