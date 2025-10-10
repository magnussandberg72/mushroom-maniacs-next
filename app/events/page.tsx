"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Calendar, MapPin, Users, Share2, Clock, Plus } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Mindfulness & Meditation",
    description: "Lär dig mindfulness-tekniker för att hantera stress och ångest",
    date: "2024-02-15",
    time: "18:00-19:30",
    location: "Online via Zoom",
    organizer: "Maria Andersson",
    participants: 23,
    maxParticipants: 30,
    category: "Välmående",
    isOnline: true,
    emoji: "🧘‍♀️",
  },
  {
    id: 2,
    title: "Stödgruppsmöte: Depression",
    description: "Träffa andra som förstår din situation i en trygg miljö",
    date: "2024-02-18",
    time: "17:00-18:30",
    location: "Folkets Hus, Stockholm",
    organizer: "Erik Lindqvist",
    participants: 12,
    maxParticipants: 15,
    category: "Stödgrupp",
    isOnline: false,
    emoji: "🤝",
  },
  {
    id: 3,
    title: "Kreativ Terapi Workshop",
    description: "Utforska dina känslor genom konst och skapande",
    date: "2024-02-22",
    time: "14:00-16:00",
    location: "Kulturhuset, Göteborg",
    organizer: "Anna Svensson",
    participants: 8,
    maxParticipants: 12,
    category: "Kreativitet",
    isOnline: false,
    emoji: "🎨",
  },
  {
    id: 4,
    title: "Promenadgrupp: Natur & Mental Hälsa",
    description: "Gemensam promenad i naturen för bättre mående",
    date: "2024-02-25",
    time: "10:00-12:00",
    location: "Djurgården, Stockholm",
    organizer: "Johan Nilsson",
    participants: 15,
    maxParticipants: 20,
    category: "Motion",
    isOnline: false,
    emoji: "🌲",
  },
  {
    id: 5,
    title: "Föreläsning: Sömn & Mental Hälsa",
    description: "Expert föreläsning om sömnens betydelse för psykisk hälsa",
    date: "2024-03-01",
    time: "19:00-20:30",
    location: "Online via YouTube Live",
    organizer: "Dr. Lisa Karlsson",
    participants: 156,
    maxParticipants: 500,
    category: "Utbildning",
    isOnline: true,
    emoji: "😴",
  },
]

const categories = ["Alla", "Stödgrupp", "Välmående", "Kreativitet", "Motion", "Utbildning"]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alla")
  const [participatingEvents, setParticipatingEvents] = useState<number[]>([])

  const filteredEvents =
    selectedCategory === "Alla" ? events : events.filter((event) => event.category === selectedCategory)

  const handleParticipate = (eventId: number) => {
    if (participatingEvents.includes(eventId)) {
      setParticipatingEvents(participatingEvents.filter((id) => id !== eventId))
    } else {
      setParticipatingEvents([...participatingEvents, eventId])
    }
  }

  const shareEvent = (event: any) => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Event & Aktiviteter</h1>
          <p className="text-xl text-gray-600 mb-6 text-pretty">
            Träffa andra, lär dig nya saker och delta i aktiviteter som stödjer din mentala hälsa
          </p>
          <Button className="accent-button">
            <Plus className="h-4 w-4 mr-2" />
            Föreslå event
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-100 px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{event.emoji}</span>
                    <div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => shareEvent(event)}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">{event.description}</CardDescription>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                    {event.isOnline && <Badge variant="secondary">Online</Badge>}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    {event.participants}/{event.maxParticipants} deltagare
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Arrangör: {event.organizer}</p>
                  <div className="flex gap-2">
                    <Button
                      variant={participatingEvents.includes(event.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleParticipate(event.id)}
                      disabled={event.participants >= event.maxParticipants && !participatingEvents.includes(event.id)}
                    >
                      {participatingEvents.includes(event.id) ? "Deltar" : "Jag deltar"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Vill du arrangera ett event?</h2>
              <p className="text-gray-700 mb-6 text-pretty">
                Har du en idé för ett event som kan hjälpa andra i communityn? Vi hjälper dig att organisera det!
              </p>
              <Button className="accent-button">Kontakta oss</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
