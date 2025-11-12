import React from 'react'
import Line from '../../assets/images/home/line.svg'
import Product from '../../assets/images/home/product.svg'
import useEmblaCarousel from 'embla-carousel-react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { CommonYellowButton } from '../index'

function Collection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'center',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 },
      '(min-width: 1280px)': { slidesToScroll: 1 }
    }
  })

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const products = [
    {
      name: "Midnight Heist",
      description: "Dark, mysterious, and unforgettable. Perfect for late-night adventures.",
      volume: "30 ml"
    },
    {
      name: "Midnight Heist",
      description: "Dark, mysterious, and unforgettable. Perfect for late-night adventures.",
      volume: "30 ml"
    },
    {
      name: "Midnight Heist",
      description: "Dark, mysterious, and unforgettable. Perfect for late-night adventures.",
      volume: "30 ml"
    },
    {
      name: "Midnight Heist",
      description: "Dark, mysterious, and unforgettable. Perfect for late-night adventures.",
      volume: "30 ml"
    },
    {
      name: "Midnight Heist",
      description: "Dark, mysterious, and unforgettable. Perfect for late-night adventures.",
      volume: "30 ml"
    },
    {
      name: "Midnight Heist",
      description: "Dark, mysterious, and unforgettable. Perfect for late-night adventures.",
      volume: "30 ml"
    },
    {
      name: "Midnight Heist",
      description: "Dark, mysterious, and unforgettable. Perfect for late-night adventures.",
      volume: "30 ml"
    }
  ]

  return (
    <section className='bg-customeBlack1 text-white py-20 relative'>
    {/* <img className="img" src="https://c.animaapp.com/mfz1ytmtJuEhxk/img/group-3.png" /> */}
      <div className='text-center'>
        {/* Header Section */}
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-24 text-customeWhite font-cinzel font-bold uppercase tracking-wider mb-2'>
            THE
          </h2>
          <h1 className='md:text-64 text-40 font-cinzel font-bold text-customeYellow uppercase mb-4'>
            COLLECTION
          </h1>

          <p className='text-18 font-satoshi text-customeWhite max-w-4xl mx-auto leading-relaxed mb-6'>
            Luxury scents designed to move themselves. Built for believers, created for leaders.
          </p>

          {/* Golden Underline */}
          <img src={Line} alt="Line" className='w-[439.5px] h-full items-center mt-5' />
        </div>

        {/* Product Carousel Section */}
        <div className='relative'>
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-customeYellow hover:text-customeWhite transition-colors'
          >
            <IoChevronBack size={32} />
          </button>

          <button
            onClick={scrollNext}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-customeYellow hover:text-customeWhite transition-colors'
          >
            <IoChevronForward size={32} />
          </button>

          {/* Carousel */}
          <div className='embla overflow-hidden mx-auto' ref={emblaRef}>
            <div className='embla__container flex'>
              {products.map((product, index) => (
                 <div key={index} className='embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] px-4' >
                  <div className='rounded-lg p-8 text-center mx-auto max-w-sm'
                    style={{
                      backgroundImage: 'url(https://c.animaapp.com/mfz1ytmtJuEhxk/img/mask-group-3.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Product Image */}
                    <div className='mb-6 flex justify-center'>
                      <img src={Product} alt={product.name} className='h-64 w-auto' />
                    </div>

                    {/* Product Name */}
                    <h3 className='text-24 text-customeWhite mb-3'>
                      {product.name}
                    </h3>

                    {/* Product Description */}
                    <p className='text-16 text-customeGray1 '>
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className='mt-12 flex justify-center'>
          <CommonYellowButton width="w-[244px]" height="h-[50px]" className="rounded-lg font-satoshi font-bold text-16">
            Build Wealth with Scents
          </CommonYellowButton>
        </div>
      </div>
    </section>
  )
}

export default Collection