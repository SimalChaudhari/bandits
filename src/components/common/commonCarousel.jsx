import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import leftArrow from '../../assets/images/common/leftArrow.png'
import rightArrow from '../../assets/images/common/rightArrow.png'

function CommonCarousel({
  items = [],
  renderItem,
  options = {},
  slideClassName = ' px-4',
  containerClassName = '',
  showArrows = true,
  loop = true
}) {
  const emblaOptions = { loop, align: 'start', ...options }
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi, items])

  if (!renderItem) return null

  return (
    <div className={`relative ${containerClassName}`}>
      {showArrows && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <img src={leftArrow} alt="Previous" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <img src={rightArrow} alt="Next" />
          </button>
        </>
      )}

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((item, index) => (
            <div key={index} className={`embla__slide ${slideClassName}`}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommonCarousel
