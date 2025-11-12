import React, { useState } from 'react'
import { WatchingSection, PlaybooksSection, TrainingCategoryTabs } from '../../../components'

function Training() {
  const [activeCategory, setActiveCategory] = useState('Basic')

  const categories = ['Basic', 'Advance', 'Marketing', 'Sales Scripts']

  const continueWatching = [
    {
      id: 1,
      title: 'Affiliate Onboarding Start Here',
      lesson: 6,
      level: 'Basic',
      progress: 60,
      buttonText: 'Resume Watching',
      type: 'video'
    },
    {
      id: 2,
      title: "Beginner's Guide To A Professional Affiliate Marketing",
      lesson: 8,
      level: 'Basic',
      progress: 40,
      buttonText: 'Resume Watching',
      type: 'video'
    },
    {
      id: 3,
      title: "Beginner's Recruitment Guide",
      lesson: 2,
      level: 'Basic',
      progress: 0,
      buttonText: 'Start Watching',
      type: 'video'
    }
  ]

  const playbooks = [
    {
      id: 1,
      title: 'Recruitment Guide',
      pages: 9,
      progress: 0,
      buttonText: 'Download PDF',
      type: 'playbook'
    },
    {
      id: 2,
      title: 'Product Selling Manual',
      pages: 18,
      progress: 0,
      buttonText: 'Download PDF',
      type: 'playbook'
    },
    {
      id: 3,
      title: 'QR Strategy',
      pages: 2,
      progress: 0,
      buttonText: 'Download PDF',
      type: 'playbook'
    }
  ]

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">

        {/* Category Tabs */}
        <TrainingCategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <WatchingSection title="Continue Watching" items={continueWatching} />

        <PlaybooksSection title="Playbooks Section" items={playbooks} />
      </div>
    </div>
  )
}

export default Training
