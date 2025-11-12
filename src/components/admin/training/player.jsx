import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { TrainingVideoPlayer, LessonSidebar, CommonLoader } from '../../index'

function TrainingPlayer({
    title = 'Training & Playbooks',
    lessonTitle = 'Lorem Ipsum',
    lessons = [],
    description = '',
    loading = false
}) {
    const navigate = useNavigate()
    const defaultLessons = lessons.length
        ? lessons
        : [
            { id: 1, title: 'Lorem Ipsum', duration: '14 min' },
            { id: 2, title: 'Lorem Ipsum', duration: '11 min' },
            { id: 3, title: 'Lorem Ipsum', duration: '4 min' },
            { id: 4, title: 'Lorem Ipsum', duration: '8 min' }
        ]

    const [activeLessonId, setActiveLessonId] = useState(defaultLessons[0]?.id)
    const [isLoading, setIsLoading] = useState(loading)

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    const lessonDescription =
        description ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat nisi sit amet nisl porta, et vestibulum odio gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <button
                    className="flex items-center gap-2 text-customeWhite hover:text-customeYellow transition-colors font-satoshi text-sm"
                    onClick={() => navigate('/admin/training')}
                >
                    <FaArrowLeft /> Back
                </button>
            </div>

            <div className="flex lg:flex-row flex-col gap-6">
                <div className="lg:w-7/10 relative">
                    {isLoading ? (
                        <div className="flex min-h-[320px] items-center justify-center rounded-[20px] bg-black/60">
                            <CommonLoader />
                        </div>
                    ) : (
                        <TrainingVideoPlayer title={title} />
                    )}
                </div>

                <div className="lg:w-3/10">
                    {/* Lesson Sidebar */}
                    <LessonSidebar
                        lessonTitle={lessonTitle}
                        lessons={defaultLessons}
                        activeLessonId={activeLessonId}
                        onSelectLesson={setActiveLessonId}
                        progressPercent={25}
                    />
                </div>
            </div>

            {/* Description */}
            <div className=" px-6 lg:px-10 py-8">
                <div className="relative mb-6">
                <div className="border-b border-customeBorder">

                    <span className="text-customeWhite text-lg font-semibold font-satoshi uppercase tracking-[0.12em] border-customeYellow border-b-2">Description</span>
                </div>
                    
                </div>
                    <p className="leading-relaxed text-customeWhite">{lessonDescription}</p>
               
            </div>
        </div>
    )
}

export default TrainingPlayer
