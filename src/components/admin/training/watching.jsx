import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CommonCarousel } from '../../index'
import TrainingCard from './card'

function WatchingSection({ title, items }) {
  const navigate = useNavigate()

  const handleNavigate = (item) => {
    navigate('/admin/training/playback', { state: { item } })
  }

  return (
    <div className="mb-12">
      <h2 className="text-customeWhite text-20 lg:text-24 font-bold font-satoshi mb-6 md:text-left text-center">
        {title}
      </h2>
      <div className="md:hidden">
        <CommonCarousel
          items={items}
          containerClassName="px-7"
          slideClassName="px-2"
          renderItem={(item) => (
            <TrainingCard
              key={item.id}
              {...item}
              onClick={() => handleNavigate(item)}
            />
          )}
        />
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {items.map((item) => (
          <TrainingCard key={item.id} {...item} onClick={() => handleNavigate(item)} />
        ))}
      </div>
    </div>
  )
}

export default WatchingSection
