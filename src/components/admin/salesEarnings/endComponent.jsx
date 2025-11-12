import React from 'react'
import CommonYellowButton from '../../common/commonYellowButton'
import paypalIcon from '../../../assets/images/admin/salesEarnings/paypal.png'

function EndComponent() {
  const cards = [
    {
      id: 1,
      title: 'Available Balance',
      value: '$350.59',
      type: 'value'
    },
    {
      id: 2,
      title: 'Payment Clearing',
      value: '$540',
      type: 'value'
    },
    {
      id: 3,
      title: 'Minimum Withdrawal',
      value: '$50',
      type: 'value'
    },
    {
      id: 4,
      title: 'Payment Method',
      value: null,
      type: 'icon',
      icon: paypalIcon
    },
    {
      id: 5,
      title: 'Withdraw Your Earning',
      value: null,
      type: 'button',
      buttonText: 'Withdraw Earnings'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-customeLightBlack rounded-lg border border-customeYellow p-4 lg:p-6"
        >
          {/* Title */}
          <p className="text-customeGray1 text-16 font-satoshi mb-4">
            {card.title}
          </p>

          {/* Content based on type */}
          {card.type === 'value' && (
            <p className="text-white text-24 lg:text-28 font-bold font-satoshi">
              {card.value}
            </p>
          )}

          {card.type === 'icon' && (
            <div className="flex justify-center">
              <img src={card.icon} alt="PayPal" className="h-8 lg:h-10 w-auto" />
            </div>
          )}

          {card.type === 'button' && (
            <CommonYellowButton
              width="w-full"
              height="h-[44px]"
              className="rounded-lg font-satoshi text-sm lg:text-base"
            >
              {card.buttonText}
            </CommonYellowButton>
          )}
        </div>
      ))}
    </div>
  )
}

export default EndComponent

