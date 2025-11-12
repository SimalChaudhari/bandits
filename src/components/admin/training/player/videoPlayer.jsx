import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { PlayerControls } from '../../../index'

function TrainingVideoPlayer({
  title = 'Training Video',
  isPlaying: initialIsPlaying = false,
  currentQuality = '1080p',
  volume = 70,
  onPlayPause,
  onQualityChange,
  onVolumeChange,
}) {
  const [isQualityOpen, setIsQualityOpen] = useState(false)
  const [selectedQuality, setSelectedQuality] = useState(currentQuality)
  const [volumeLevel, setVolumeLevel] = useState(volume)
  const [previousVolume, setPreviousVolume] = useState(volume)
  const [isVolumeOpen, setIsVolumeOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying)
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const [durationSeconds, setDurationSeconds] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const qualityOptions = ['1080p', '720p', '480p', '360p', '240p', '144p', 'Auto']
  const videoRef = useRef(null)
  const playerContainerRef = useRef(null)
  const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'

  useEffect(() => {
    setSelectedQuality(currentQuality)
  }, [currentQuality])

  useEffect(() => {
    setVolumeLevel(volume)
    if (volume > 0) {
      setPreviousVolume(volume)
    }
  }, [volume])

  const handleQualitySelect = (quality) => {
    setSelectedQuality(quality)
    if (typeof onQualityChange === 'function') {
      onQualityChange(quality)
    }
    setIsQualityOpen(false)
  }

  const handleVolumeChange = (event) => {
    const value = Number(event.target.value)
    setVolumeLevel(value)
    if (value > 0) {
      setPreviousVolume(value)
    }
    if (typeof onVolumeChange === 'function') {
      onVolumeChange(value)
    }
  }

  const handleProgressChange = (event) => {
    if (!durationSeconds) return
    const percent = Number(event.target.value)
    const newTime = (percent / 100) * durationSeconds
    setCurrentSeconds(newTime)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }

  const handleMuteToggle = () => {
    if (volumeLevel === 0) {
      const restored = previousVolume || 70
      setVolumeLevel(restored)
      if (videoRef.current) {
        videoRef.current.muted = false
        videoRef.current.volume = restored / 100
      }
      if (typeof onVolumeChange === 'function') {
        onVolumeChange(restored)
      }
    } else {
      setPreviousVolume(volumeLevel)
      setVolumeLevel(0)
      if (videoRef.current) {
        videoRef.current.muted = true
        videoRef.current.volume = 0
      }
      if (typeof onVolumeChange === 'function') {
        onVolumeChange(0)
      }
    }
    setIsVolumeOpen(false)
  }

  const toggleVolumePopover = () => {
    setIsVolumeOpen((prev) => !prev)
  }

  const toggleQualityPopover = () => {
    setIsQualityOpen((prev) => !prev)
  }

  const handleSeekBy = (offsetSeconds) => {
    const video = videoRef.current
    if (!video || !durationSeconds) return
    const nextTime = Math.min(Math.max(video.currentTime + offsetSeconds, 0), durationSeconds)
    video.currentTime = nextTime
    setCurrentSeconds(nextTime)
  }

  const handleRewind = () => handleSeekBy(-10)
  const handleForward = () => handleSeekBy(10)

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) return '00:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handlePlayPause = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused || video.ended) {
      try {
        await video.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Unable to play video', error)
      }
    } else {
      video.pause()
      setIsPlaying(false)
    }
    if (typeof onPlayPause === 'function') {
      onPlayPause(!video?.paused)
    }
  }

  const handleVideoClick = () => {
    handlePlayPause()
  }

  const handleToggleFullscreen = async () => {
    const container = playerContainerRef.current
    if (!container) return
    try {
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          await container.requestFullscreen()
        }
      } else if (document.exitFullscreen) {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error('Fullscreen toggle failed', error)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setDurationSeconds(video.duration || 0)
    }

    const handleTimeUpdate = () => {
      setCurrentSeconds(video.currentTime || 0)
    }

    const handlePlayState = () => {
      setIsPlaying(!video.paused)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentSeconds(video.duration || 0)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('play', handlePlayState)
    video.addEventListener('pause', handlePlayState)
    video.addEventListener('ended', handleEnded)

    if (initialIsPlaying) {
      video.play().catch(() => setIsPlaying(false))
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('play', handlePlayState)
      video.removeEventListener('pause', handlePlayState)
      video.removeEventListener('ended', handleEnded)
    }
  }, [initialIsPlaying])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.volume = volumeLevel / 100
    video.muted = volumeLevel === 0
  }, [volumeLevel])

  const progressPercentage = durationSeconds
    ? Math.min((currentSeconds / durationSeconds) * 100, 100)
    : 0

  const currentTimeLabel = formatTime(currentSeconds)
  const durationLabel = formatTime(durationSeconds)

  return (
    <div className="bg-customeBlack5 overflow-hidden shadow-lg">
      <div ref={playerContainerRef} className="relative w-full pt-[56.25%] overflow-hidden">
        <video
          ref={videoRef}
          src={videoSource}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          preload="metadata"
          title={title}
          aria-label={title}
          onClick={handleVideoClick}
          onDoubleClick={handleToggleFullscreen}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 via-black/10 to-black/60">
            <button
              type="button"
              className="w-16 h-16 rounded-full bg-customeYellow flex items-center justify-center shadow-lg"
              onClick={handlePlayPause}
            >
              <FaPlay className="text-2xl text-customeBlack1" />
            </button>
          </div>
        )}

        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onRewind={handleRewind}
          onForward={handleForward}
          currentTimeLabel={currentTimeLabel}
          durationLabel={durationLabel}
          progressPercentage={progressPercentage}
          onProgressChange={handleProgressChange}
          volumeLevel={volumeLevel}
          onVolumeChange={handleVolumeChange}
          onMuteToggle={handleMuteToggle}
          isVolumeOpen={isVolumeOpen}
          toggleVolumePopover={toggleVolumePopover}
          selectedQuality={selectedQuality}
          isQualityOpen={isQualityOpen}
          toggleQualityPopover={toggleQualityPopover}
          qualityOptions={qualityOptions}
          onQualitySelect={handleQualitySelect}
          onToggleFullscreen={handleToggleFullscreen}
          isFullscreen={isFullscreen}
        />
      </div>
    </div>
  )
}

export default TrainingVideoPlayer
