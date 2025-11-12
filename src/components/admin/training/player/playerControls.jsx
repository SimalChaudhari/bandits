import React from 'react'
import {
  FaPause,
  FaPlay,
  FaRedoAlt,
  FaUndoAlt,
  FaVolumeMute,
  FaVolumeUp,
  FaExpandAlt,
  FaCompressAlt,
} from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

export function PlayerControls({
  isPlaying,
  onPlayPause,
  onRewind,
  onForward,
  currentTimeLabel,
  durationLabel,
  progressPercentage,
  onProgressChange,
  volumeLevel,
  onVolumeChange,
  onMuteToggle,
  isVolumeOpen,
  toggleVolumePopover,
  selectedQuality,
  isQualityOpen,
  toggleQualityPopover,
  qualityOptions,
  onQualitySelect,
  onToggleFullscreen,
  isFullscreen,
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0">
      <div className="bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-4 pt-10 sm:px-6">
        <div className="pointer-events-auto flex flex-col gap-4 text-customeWhite font-satoshi text-sm">
          <div className="flex items-center gap-3 sm:gap-5 w-full flex-nowrap overflow-visible">
            <div className="flex items-center gap-3 flex-shrink-0">
              <button type="button" className="hover:text-customeYellow transition-colors" onClick={onRewind}>
                <FaUndoAlt />
              </button>
              <button type="button" className="hover:text-customeYellow transition-colors" onClick={onPlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button type="button" className="hover:text-customeYellow transition-colors" onClick={onForward}>
                <FaRedoAlt />
              </button>
            </div>

            <div className="flex items-center gap-3 flex-1 min-w-[160px] sm:min-w-[220px]">
              <span className="text-xs text-customeGray1 min-w-[40px] text-right">{currentTimeLabel}</span>
              <div className="flex-1">
                <div className="relative h-1 rounded-full bg-customeGray1/40">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-customeYellow"
                    style={{ width: `${progressPercentage}%` }}
                  />
                  <span
                    className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow"
                    style={{ left: `${progressPercentage}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progressPercentage}
                    onChange={onProgressChange}
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    aria-label="Seek video"
                  />
                </div>
              </div>
              <span className="text-xs text-customeGray1 min-w-[40px]">{durationLabel}</span>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative flex items-center sm:gap-2 gap-1">
                <button
                  type="button"
                  onClick={onMuteToggle}
                  className="hidden sm:inline-flex hover:text-customeYellow transition-colors"
                  aria-label={volumeLevel === 0 ? 'Unmute video' : 'Mute video'}
                >
                  {volumeLevel === 0 ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
                </button>
                <button
                  type="button"
                  onClick={toggleVolumePopover}
                  className="sm:hidden inline-flex hover:text-customeYellow transition-colors"
                  aria-label="Open volume control"
                >
                  {volumeLevel === 0 ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volumeLevel}
                  onChange={onVolumeChange}
                  className="volume-slider hidden sm:block"
                  style={{
                    background: `linear-gradient(to right, #c9a44a ${volumeLevel}%, rgba(255,255,255,0.25) ${volumeLevel}%)`,
                  }}
                  aria-label="Video volume"
                />

                {isVolumeOpen && (
                  <div className="absolute sm:hidden bottom-full left-1/2 -translate-x-1/2 mb-2 flex flex-col items-center gap-3 bg-black/80 border border-customeYellow/40 rounded-full px-3 py-3 shadow-lg">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volumeLevel}
                      onChange={onVolumeChange}
                      className="volume-slider-vertical"
                      style={{
                        background: `linear-gradient(to top, #c9a44a ${volumeLevel}%, rgba(255,255,255,0.25) ${volumeLevel}%)`,
                      }}
                      aria-label="Video volume"
                      orient="vertical"
                    />
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  type="button"
                  className="hover:text-customeYellow transition-colors flex items-center justify-center"
                  onClick={toggleQualityPopover}
                >
                  <IoMdSettings className="text-[20px]" />
                  {selectedQuality === '1080p' && (
                    <span className="absolute -top-2 -right-2 bg-customeYellow text-white text-10 rounded-[2px] shadow px-1">
                      HD
                    </span>
                  )}
                </button>
                {isQualityOpen && (
                  <div className="absolute right-0 bottom-full mb-3 w-40 sm:w-32 rounded-lg border border-customeYellow/40 bg-black/90 backdrop-blur-sm shadow-lg text-xs animate-[fadeIn_0.2s_ease-out]">
                    <div className="px-3 py-2 border-b border-customeYellow/20 text-customeWhite font-medium">
                      Quality
                    </div>
                    <ul className="max-h-48 overflow-y-auto">
                      {qualityOptions.map((quality) => {
                        const isActive = quality === selectedQuality
                        return (
                          <li key={quality}>
                            <button
                              type="button"
                              className={`w-full text-left px-3 py-2 transition-colors ${
                                isActive ? 'text-customeYellow bg-customeYellow/10' : 'text-customeGray1 hover:text-customeYellow'
                              }`}
                              onClick={() => onQualitySelect(quality)}
                            >
                              {quality}
                              {quality === '1080p' && <span className="ml-1 text-[10px] text-customeYellow">HD</span>}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
              <button type="button" className="hover:text-customeYellow transition-colors" onClick={onToggleFullscreen}>
                {isFullscreen ? <FaCompressAlt /> : <FaExpandAlt />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerControls
