"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

const audioTracks = [
  {
    name: "Regndroppar",
    url: "/audio/rain.mp3",
    description: "Lugnande regn för avslappning",
  },
  {
    name: "Havsvågor",
    url: "/audio/ocean.mp3",
    description: "Mjuka havsvågor för meditation",
  },
  {
    name: "Fågelsång",
    url: "/audio/birds.mp3",
    description: "Naturens egna melodi",
  },
  {
    name: "Vit brus",
    url: "/audio/whitenoise.mp3",
    description: "Konstant ljud för fokus",
  },
]

export function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const changeTrack = (index: number) => {
    setCurrentTrack(index)
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.load()
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <h3 className="font-semibold text-lg">{audioTracks[currentTrack].name}</h3>
            <p className="text-sm text-gray-600">{audioTracks[currentTrack].description}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-4">
            <Button onClick={togglePlay} size="lg" className="primary-button rounded-full w-12 h-12 p-0">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>

            <div className="flex items-center gap-2">
              <Button onClick={toggleMute} variant="ghost" size="sm" className="p-2">
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {audioTracks.map((track, index) => (
              <Button
                key={index}
                onClick={() => changeTrack(index)}
                variant={currentTrack === index ? "default" : "outline"}
                size="sm"
                className="text-xs"
              >
                {track.name}
              </Button>
            ))}
          </div>

          <audio
            ref={audioRef}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            loop
          >
            <source src={audioTracks[currentTrack].url} type="audio/mpeg" />
            Din webbläsare stöder inte ljuduppspelning.
          </audio>
        </CardContent>
      </Card>
    </div>
  )
}
