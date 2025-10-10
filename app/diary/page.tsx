"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Lock, Save, Calendar, Plus, Search } from "lucide-react"

interface DiaryEntry {
  id: string
  date: string
  content: string
  mood: "happy" | "neutral" | "sad"
  title: string
}

const moodEmojis = {
  happy: { emoji: "😊", label: "Bra", color: "text-green-600" },
  neutral: { emoji: "😐", label: "Okej", color: "text-yellow-600" },
  sad: { emoji: "😢", label: "Dåligt", color: "text-red-600" },
}

export default function DiaryPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [currentEntry, setCurrentEntry] = useState("")
  const [currentTitle, setCurrentTitle] = useState("")
  const [currentMood, setCurrentMood] = useState<"happy" | "neutral" | "sad">("neutral")
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  // Simulate biometric authentication
  const handleBiometricAuth = () => {
    // In a real app, this would use actual biometric authentication
    setIsAuthenticated(true)
    // Load saved entries from localStorage
    const savedEntries = localStorage.getItem("diary-entries")
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries))
    }
  }

  const saveEntry = () => {
    if (!currentEntry.trim()) return

    const newEntry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      content: currentEntry,
      mood: currentMood,
      title: currentTitle || `Dagboksanteckning ${new Date().toLocaleDateString("sv-SE")}`,
    }

    const updatedEntries = [newEntry, ...entries]
    setEntries(updatedEntries)
    localStorage.setItem("diary-entries", JSON.stringify(updatedEntries))

    // Reset form
    setCurrentEntry("")
    setCurrentTitle("")
    setCurrentMood("neutral")
  }

  const filteredEntries = entries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Privat Dagbok</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-pretty">
                  Din dagbok är helt privat och skyddad. Använd biometrisk autentisering för att komma åt dina
                  anteckningar.
                </p>
                <Button onClick={handleBiometricAuth} className="primary-button w-full">
                  🔐 Lås upp med biometri (simulerat)
                </Button>
                <p className="text-xs text-gray-500 mt-4">Dina dagboksanteckningar sparas endast lokalt på din enhet</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Min Privata Dagbok</h1>
          <p className="text-xl text-gray-600 mb-6 text-pretty">En säker plats för dina tankar och känslor</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Ny anteckning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="text"
                  placeholder="Titel (valfritt)"
                  value={currentTitle}
                  onChange={(e) => setCurrentTitle(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Hur mår du idag?</span>
                  {Object.entries(moodEmojis).map(([mood, data]) => (
                    <button
                      key={mood}
                      onClick={() => setCurrentMood(mood as any)}
                      className={`p-2 rounded-lg border-2 transition-colors ${
                        currentMood === mood ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-2xl">{data.emoji}</span>
                      <span className={`block text-xs ${data.color}`}>{data.label}</span>
                    </button>
                  ))}
                </div>

                <Textarea
                  placeholder="Skriv dina tankar här..."
                  value={currentEntry}
                  onChange={(e) => setCurrentEntry(e.target.value)}
                  className="min-h-32"
                />

                <Button onClick={saveEntry} className="primary-button" disabled={!currentEntry.trim()}>
                  <Save className="h-4 w-4 mr-2" />
                  Spara anteckning
                </Button>
              </CardContent>
            </Card>

            {selectedEntry && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{selectedEntry.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{moodEmojis[selectedEntry.mood].emoji}</span>
                      <span className="text-sm text-gray-500">{selectedEntry.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-pretty">{selectedEntry.content}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Sök i dagbok
                </CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  placeholder="Sök i dina anteckningar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tidigare anteckningar</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredEntries.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Inga anteckningar än</p>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredEntries.map((entry) => (
                      <div
                        key={entry.id}
                        onClick={() => setSelectedEntry(entry)}
                        className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm truncate">{entry.title}</span>
                          <span className="text-xl">{moodEmojis[entry.mood].emoji}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          {entry.date}
                        </div>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{entry.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6 text-center">
                <Lock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Helt privat</h3>
                <p className="text-sm text-gray-600">
                  Dina dagboksanteckningar sparas endast på din enhet och är inte synliga för andra.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
