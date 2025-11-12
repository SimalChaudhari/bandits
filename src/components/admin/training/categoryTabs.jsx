import React from 'react'

function TrainingCategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => {
        const isActive = activeCategory === category
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              px-4 py-2 rounded-lg font-satoshi text-sm transition-all border border-customeYellow
              ${isActive ? 'bg-white text-customeYellow font-bold' : 'bg-customeBlack1 text-customeWhite1'}
            `}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default TrainingCategoryTabs
