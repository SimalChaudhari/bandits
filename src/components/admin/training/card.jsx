import React from 'react'
import { FaRegHeart, FaTrophy } from 'react-icons/fa'
import { FaBookBookmark } from 'react-icons/fa6'
import { CommonYellowButton } from '../../index'
import trainingImage from '../../../assets/images/admin/training/training.png'

function TrainingCard({
  title,
  thumbnail = trainingImage,
  progress = 0,
  buttonText,
  type = 'video',
  lesson,
  level,
  pages,
  onClick
}) {
  return (
    <div className="p-6 bg-customeLightBlack rounded-[20px] border border-customeYellow overflow-hidden space-y-4">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-[12px]"
        />
        <button className="absolute top-3 right-3 w-[20px] h-[20px] rounded-full bg-customeGray1 flex items-center justify-center text-white hover:text-red-500 transition-colors">
          <FaRegHeart className='w-[8px] h-[8px]' />
        </button>
      </div>

      <div>
        <span className="bg-customeYellow text-customeWhite text-8 font-satoshi px-3 py-1.5 rounded-full uppercase">
          LET'S GET STARTED
        </span>
      </div>

      <div>
        <h3 className="text-customeWhite text-lg lg:text-xl font-bold font-satoshi mb-4">
          {title}
        </h3>

        {type === 'video' ? (
          <div className="flex items-center gap-4 mb-4 text-customeWhite1 text-sm font-satoshi">
            <div className="flex items-center gap-2">
              <FaBookBookmark size={16} className="text-white" />
              <span>Lesson : {lesson}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTrophy size={16} className="text-white" />
              <span>{level}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 mb-4 text-customeWhite1 text-sm font-satoshi">
            <FaBookBookmark size={14} className="text-white" />
            <span>Pages : {pages}</span>
          </div>
        )}

        <div className="mb-4">
          <div className="w-full bg-customeGray1 rounded-full h-1">
            <div
              className="bg-customeYellow h-1 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <CommonYellowButton className="rounded-lg font-satoshi text-14 lg:text-18 text-white" onClick={(e) => { e.stopPropagation(); if (onClick) onClick() }}>
          {buttonText}
        </CommonYellowButton>
      </div>
    </div>
  )
}

export default TrainingCard
