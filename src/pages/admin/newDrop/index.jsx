import React, { useState } from 'react'
import { FaFire, FaGem, FaExclamationTriangle } from 'react-icons/fa'
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { CommonYellowButton } from '../../../components'
import productImage from '../../../assets/images/common/product.png'
import bgImage from '../../../assets/images/admin/newDrops/bg.png'

function NewDrop() {
  const [activeCategory, setActiveCategory] = useState('New')

  const categories = [
    { id: 'New', label: 'New', icon: FaFire },
    { id: 'Limited', label: 'Limited', icon: FaGem },
    { id: 'All', label: 'All Products', icon: null }
  ]

  const products = [
    {
      id: 1,
      name: 'Midnight Heist',
      description: 'Dark, mysterious, and unforgettable. Perfect for late-night adventures.',
      volume: '30ml',
      image: productImage
    },
    {
      id: 2,
      name: 'Midnight Heist',
      description: 'Dark, mysterious, and unforgettable. Perfect for late-night adventures.',
      volume: '30ml',
      image: productImage
    },
    {
      id: 3,
      name: 'Midnight Heist',
      description: 'Dark, mysterious, and unforgettable. Perfect for late-night adventures.',
      volume: '30ml',
      image: productImage
    },
    {
      id: 4,
      name: 'Midnight Heist',
      description: 'Dark, mysterious, and unforgettable. Perfect for late-night adventures.',
      volume: '30ml',
      image: productImage
    },
    {
      id: 5,
      name: 'Midnight Heist',
      description: 'Dark, mysterious, and unforgettable. Perfect for late-night adventures.',
      volume: '30ml',
      image: productImage
    },
    {
      id: 6,
      name: 'Midnight Heist',
      description: 'Dark, mysterious, and unforgettable. Perfect for late-night adventures.',
      volume: '30ml',
      image: productImage
    }
  ]

  const handleGenerateLink = (productId) => {
    console.log('Generate affiliate link for product:', productId)
    // Add your affiliate link generation logic here
  }

  return (
    <div className="p-4 lg:p-6">

      <div className="flex flex-col lg:flex-row justify-between items-center">

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-satoshi text-sm transition-all border border-customeYellow
                ${isActive
                    ? 'bg-white text-customeYellow font-bold'
                    : 'bg-customeBlack1 text-customeWhite1'
                  }
              `}
              >
                {Icon && <Icon size={16} />}
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Announcement Banner */}
        <div className="bg-customeBlack2 border border-customeYellow rounded-lg p-4 mb-6 flex items-center gap-3">
          <FaExclamationTriangle className="text-customeYellow flex-shrink-0" size={20} />
          <p className="text-customeWhite1 font-satoshi text-14 lg:text-16">
            Announcement: Holiday promo: 10% bonus commission!
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-customeGray1 p-4 lg:p-6 relative hover:border-customeYellow transition-colors bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Info Icon */}
            <button className="absolute top-4 right-4 text-customeWhite1 hover:text-customeYellow transition-colors">
              <TbDotsCircleHorizontal size={20} className='text-customeYellow h-[26px] w-[26px]' />
            </button>

            {/* Product Image */}
            <div className="mb-4 flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 lg:h-64 w-auto object-contain"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-customeWhite text-16 lg:text-26 mb-2 text-center">
              {product.name}
            </h3>

            {/* Product Description */}
            <p className="text-customeGray1 text-10 lg:text-17 font-satoshi mb-4 line-clamp-2 text-center">
              {product.description}
            </p>

            {/* Generate Affiliate Link Button */}
            <CommonYellowButton
              width="w-full"
              height="h-[44px]"
              className="rounded-lg font-satoshi text-sm lg:text-base"
              onClick={() => handleGenerateLink(product.id)}
            >
              Generate Affiliate Link
            </CommonYellowButton>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewDrop

