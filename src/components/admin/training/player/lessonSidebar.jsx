import React, { useState, useEffect, useRef } from 'react'
import { FaClock, FaChevronDown } from 'react-icons/fa'
import CommonCheckBox from '../../../common/commonCheckBox'

function LessonSidebar({
  lessonTitle,
  lessons,
  activeLessonId,
  onSelectLesson,
  progressPercent = 25
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState('0px')

  useEffect(() => {
    if (contentRef.current && !isCollapsed) {
      setContentHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [lessons, isCollapsed])

  return (
    <div className="bg-customeGray5 overflow-hidden shadow-lg">
      <button
        type="button"
        className="w-full p-6 flex items-center justify-between text-customeWhite border-b border-customeYellow/40 bg-customeGray5"
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="rgba(255,255,255)"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="#c9a44a"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 54}
                strokeDashoffset={2 * Math.PI * 54 * (1 - Math.min(Math.max(progressPercent, 0), 100) / 100)}
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="absolute inset-[10px] rounded-full flex items-center justify-center text-sm font-semibold text-customeWhite">
              {progressPercent}%
            </div>
          </div>
          <div className="text-left">
            {/* <p className="text-[10px] uppercase tracking-[0.08em] text-customeGray1">Lesson Progress</p> */}
            <h3 className="text-lg font-satoshi text-customeYellow">{lessonTitle}</h3>
            <p className="text-xs text-customeYellow flex items-center gap-2">
              <span>1 / {lessons.length}</span>
              <span className="h-1 w-1 rounded-full bg-[#F9FAFB] " />
              <span>27 min</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-customeYellow">
          <FaChevronDown
            className={`text-xl transition-transform duration-200 ${isCollapsed ? '-rotate-90' : 'rotate-0'}`}
          />
        </div>
      </button>

      <div
        style={{
          maxHeight: isCollapsed ? '0px' : contentHeight,
          transition: 'max-height 0.3s ease-in-out',
        }}
        className="overflow-hidden"
      >
        <div ref={contentRef}>
          <ul className="divide-y divide-customeYellow/20">
            {lessons.map((lesson) => {
              const isActive = lesson.id === activeLessonId
              return (
                <li key={lesson.id} className=" py-2">
                  <div
                    className={`flex items-center justify-between px-4 py-3 text-sm font-satoshi transition-colors ${
                      isActive ? 'bg-customeLightBlack1' : ''
                    }`}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-3 flex-1 text-left"
                      onClick={() => onSelectLesson(lesson.id)}
                    >
                      <CommonCheckBox
                        id={`lesson-${lesson.id}`}
                        checked={isActive}
                        onChange={(e) => {
                          if (e.target.checked) {
                            onSelectLesson(lesson.id)
                          }
                        }}
                        className="scale-75 text-white"
                      />
                      <span className={`${isActive ? 'text-customeYellow' : 'text-customeWhite'}`}>{lesson.title}</span>
                    </button>
                    <div className="flex items-center gap-2 text-xs text-customeYellow/40">
                      <FaClock />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LessonSidebar
