"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import  BackButton  from "@/components/BackButton"
import { useToast } from "@/components/Toast"

export default function SuggestRoomPage() {
  const [roomName, setRoomName] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()
  const { setMsg, Toast } = useToast()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!roomName.trim() || !description.trim()) return

    setMsg("Tack för förslaget (demo)")
    setTimeout(() => {
      router.push("/chat")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Toast />
      <div className="container mx-auto max-w-2xl px-4 md:px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Föreslå nytt chatrum</h1>
          <p className="text-gray-600 mb-6">Berätta för oss vilket rum du skulle vilja se</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Rumsförslag</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="roomName" className="block text-sm font-medium mb-2">
                  Rumsnamn
                </label>
                <input
                  id="roomName"
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="t.ex. Föräldrastöd"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Beskrivning
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Beskriv vad rummet skulle handla om..."
                  required
                />
              </div>
              <Button type="submit" className="primary-button w-full">
                Skicka förslag
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center">
          <BackButton label="← Tillbaka till Chatten" fallback="/chat" />
        </div>
      </div>
    </div>
  )
}
