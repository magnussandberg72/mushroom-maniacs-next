"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import  BackButton  from "@/components/BackButton"
import { Share2, Heart, MessageCircle, Plus, Download } from "lucide-react"

const testimonies = [
  {
    id: 1,
    title: "Min resa genom depression",
    content:
      "Efter år av mörker hittade jag ljuset igen genom terapi och stöd från familj. Idag mår jag bättre än på länge...",
    author: "Anna, 28",
    date: "2024-01-15",
    tags: ["#depression", "#terapi", "#hopp"],
    likes: 24,
    comments: 8,
    emoji: "🌅",
  },
  {
    id: 2,
    title: "Ångest och panikattacker - min väg framåt",
    content:
      "Första gången jag fick en panikattack trodde jag att jag skulle dö. Nu vet jag hur jag ska hantera dem...",
    author: "Marcus, 34",
    date: "2024-01-12",
    tags: ["#ångest", "#panik", "#andning"],
    likes: 18,
    comments: 12,
    emoji: "💪",
  },
  {
    id: 3,
    title: "Bipolär diagnos - inte slutet utan början",
    content: "När jag fick min diagnos kände jag mig först rädd, men det blev starten på min verkliga läkning...",
    author: "Lisa, 41",
    date: "2024-01-10",
    tags: ["#bipolär", "#diagnos", "#medicin"],
    likes: 31,
    comments: 15,
    emoji: "🎭",
  },
  {
    id: 4,
    title: "Från självskadebeteende till självkärlek",
    content: "Det tog tid att lära mig att älska mig själv istället för att skada mig. Här är min historia...",
    author: "Alex, 22",
    date: "2024-01-08",
    tags: ["#självskada", "#självkärlek", "#återhämtning"],
    likes: 42,
    comments: 23,
    emoji: "💝",
  },
]

const hashtags = [
  "#tv4",
  "#svt",
  "#ug",
  "#kallafakta",
  "#kaliber",
  "#LPT",
  "#ÖPT",
  "#JO",
  "#IVO",
  "#Polisen",
  "#Socialstyrelsen",
  "#Åklagarmyndigheten",
  "#Riksdagen",
  "#MänskligaRättigheter",
]

export default function TestimoniesPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredTestimonies = selectedTag
    ? testimonies.filter((t) => t.tags.some((tag) => tag.includes(selectedTag.replace("#", ""))))
    : testimonies

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Vittnesbörd & Berättelser</h1>
          <p className="text-xl text-gray-600 mb-6 text-pretty">
            Läs andras upplevelser och dela din egen historia för att hjälpa andra
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/testimonies/new">
              <Button className="accent-button">
                <Plus className="h-4 w-4 mr-2" />
                Dela din historia
              </Button>
            </Link>
            <a href="/files/testimonies-guide.pdf" download>
              <Button className="secondary-button">
                <Download className="h-4 w-4 mr-2" />
                Guide för att skriva vittnesbörd
              </Button>
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Populära hashtags:</h2>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-100"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {filteredTestimonies.map((testimony) => (
            <Card key={testimony.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{testimony.emoji}</span>
                    <div>
                      <CardTitle className="text-xl">{testimony.title}</CardTitle>
                      <p className="text-sm text-gray-500">
                        {testimony.author} • {testimony.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 text-pretty">{testimony.content}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {testimony.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-red-500">
                      <Heart className="h-4 w-4 mr-1" />
                      {testimony.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-blue-500">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {testimony.comments}
                    </Button>
                  </div>
                  <Link href={`/testimonies/${testimony.id}`}>
                    <Button variant="outline" size="sm">
                      Läs mer
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Vill du dela din historia?</h2>
              <p className="text-gray-700 mb-6 text-pretty">
                Din berättelse kan hjälpa någon annan som går igenom liknande utmaningar. Du kan välja att vara anonym
                om du vill.
              </p>
              <Link href="/testimonies/new">
                <Button className="accent-button">Skriv ditt vittnesbörd</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <BackButton />
        </div>
      </main>
    </div>
  )
}
