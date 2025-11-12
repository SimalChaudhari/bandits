import React from 'react'
import { TrainingPlayer } from '../../../components'

function TrainingPlaybackPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-20 lg:text-24 font-bold text-customeWhite mb-6">Training & Playbooks</h1>
        <TrainingPlayer />
      </div>
    </div>
  )
}

export default TrainingPlaybackPage
