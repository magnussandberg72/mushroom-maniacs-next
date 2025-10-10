"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import {
  Users,
  MessageSquare,
  Calendar,
  DollarSign,
  Settings,
  Eye,
  Trash2,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react"

const stats = {
  totalMembers: 1247,
  activeMembers: 342,
  newMembersThisWeek: 23,
  totalTestimonies: 156,
  pendingTestimonies: 8,
  totalChatRooms: 12,
  activeChatRooms: 8,
  totalEvents: 24,
  upcomingEvents: 6,
  totalDonations: 15420,
  donationsThisMonth: 2340,
}

const pendingTestimonies = [
  {
    id: 1,
    title: "Min kamp mot bipolär sjukdom",
    author: "Anonym",
    date: "2024-01-15",
    excerpt: "Efter år av upp- och nedgångar har jag äntligen hittat balans...",
    status: "pending",
  },
  {
    id: 2,
    title: "Från självskada till självkärlek",
    author: "Maria, 24",
    date: "2024-01-14",
    excerpt: "Det var en lång resa att lära mig älska mig själv igen...",
    status: "pending",
  },
  {
    id: 3,
    title: "Ångest och panikattacker",
    author: "Johan, 31",
    date: "2024-01-13",
    excerpt: "Första gången jag fick en panikattack trodde jag att jag skulle dö...",
    status: "pending",
  },
]

const recentMembers = [
  {
    id: 1,
    name: "Emma Larsson",
    city: "Göteborg",
    joinDate: "2024-01-15",
    status: "active",
  },
  {
    id: 2,
    name: "David Nilsson",
    city: "Malmö",
    joinDate: "2024-01-14",
    status: "active",
  },
  {
    id: 3,
    name: "Sara Johansson",
    city: "Uppsala",
    joinDate: "2024-01-13",
    status: "pending",
  },
]

const chatRoomRequests = [
  {
    id: 1,
    name: "Föräldrastöd",
    description: "För föräldrar med psykisk ohälsa",
    requestedBy: "Anna Svensson",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Kreativitet & Terapi",
    description: "Konst och skapande som terapi",
    requestedBy: "Marcus Berg",
    date: "2024-01-14",
  },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const approveTestimony = (id: number) => {
    console.log("Approve testimony", id)
  }

  const rejectTestimony = (id: number) => {
    console.log("Reject testimony", id)
  }

  const approveChatRoom = (id: number) => {
    console.log("Approve chat room", id)
  }

  const rejectChatRoom = (id: number) => {
    console.log("Reject chat room", id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Adminpanel</h1>
          <p className="text-xl text-gray-600 mb-6">Hantera medlemmar, innehåll och community</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/admin/reports">
              <Button className="primary-button">Granska rapporter</Button>
            </Link>
            <Link href="/admin/testimonies">
              <Button className="primary-button">Godkänn vittnesbörd</Button>
            </Link>
            <Link href="/events/create">
              <Button className="primary-button">Skapa event</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { id: "overview", label: "Översikt", icon: Settings },
            { id: "members", label: "Medlemmar", icon: Users },
            { id: "testimonies", label: "Vittnesbörd", icon: MessageSquare },
            { id: "events", label: "Event", icon: Calendar },
            { id: "economy", label: "Ekonomi", icon: DollarSign },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            )
          })}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stats.totalMembers}</div>
                  <div className="text-sm text-gray-500">Totala medlemmar</div>
                  <div className="text-xs text-green-600 mt-1">+{stats.newMembersThisWeek} denna vecka</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stats.totalTestimonies}</div>
                  <div className="text-sm text-gray-500">Vittnesbörd</div>
                  <div className="text-xs text-orange-600 mt-1">{stats.pendingTestimonies} väntar</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stats.totalEvents}</div>
                  <div className="text-sm text-gray-500">Event totalt</div>
                  <div className="text-xs text-blue-600 mt-1">{stats.upcomingEvents} kommande</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stats.totalDonations} kr</div>
                  <div className="text-sm text-gray-500">Totala donationer</div>
                  <div className="text-xs text-green-600 mt-1">+{stats.donationsThisMonth} kr denna månad</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Väntar på godkännande
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingTestimonies.slice(0, 3).map((testimony) => (
                      <div key={testimony.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{testimony.title}</p>
                          <p className="text-xs text-gray-500">av {testimony.author}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="primary-button" onClick={() => approveTestimony(testimony.id)}>
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => rejectTestimony(testimony.id)}>
                            <XCircle className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nya medlemmar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentMembers.map((member) => (
                      <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{member.name}</p>
                          <p className="text-xs text-gray-500">
                            {member.city} • {member.joinDate}
                          </p>
                        </div>
                        <Badge variant={member.status === "active" ? "default" : "secondary"}>
                          {member.status === "active" ? "Aktiv" : "Väntar"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "members" && (
          <Card>
            <CardHeader>
              <CardTitle>Medlemshantering</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 mb-6">
                  <Button className="primary-button">Exportera medlemslista</Button>
                  <Button variant="outline">Skicka nyhetsbrev</Button>
                  <Button variant="outline">Moderationsverktyg</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-xl font-bold text-blue-600">{stats.totalMembers}</div>
                      <div className="text-sm text-gray-500">Totala medlemmar</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-xl font-bold text-green-600">{stats.activeMembers}</div>
                      <div className="text-sm text-gray-500">Aktiva medlemmar</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-xl font-bold text-orange-600">{stats.newMembersThisWeek}</div>
                      <div className="text-sm text-gray-500">Nya denna vecka</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  {recentMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">
                          {member.city} • Medlem sedan {member.joinDate}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Visa
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Ta bort
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "testimonies" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Vittnesbörd som väntar på godkännande</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingTestimonies.map((testimony) => (
                    <div key={testimony.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{testimony.title}</h3>
                          <p className="text-sm text-gray-500">
                            av {testimony.author} • {testimony.date}
                          </p>
                        </div>
                        <Badge variant="secondary">Väntar</Badge>
                      </div>
                      <p className="text-gray-700 mb-4">{testimony.excerpt}</p>
                      <div className="flex gap-2">
                        <Button className="primary-button" onClick={() => approveTestimony(testimony.id)}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Godkänn
                        </Button>
                        <Button variant="destructive" onClick={() => rejectTestimony(testimony.id)}>
                          <XCircle className="h-4 w-4 mr-2" />
                          Avslå
                        </Button>
                        <Button variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Förhandsgranska
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Förslag på nya chatrum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chatRoomRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{request.name}</h3>
                          <p className="text-sm text-gray-600">{request.description}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Föreslagen av {request.requestedBy} • {request.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="primary-button" onClick={() => approveChatRoom(request.id)}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Skapa rum
                        </Button>
                        <Button variant="destructive" onClick={() => rejectChatRoom(request.id)}>
                          <XCircle className="h-4 w-4 mr-2" />
                          Avslå
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "economy" && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Donationsöversikt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">{stats.totalDonations} kr</div>
                    <div className="text-sm text-gray-500">Totala donationer</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{stats.donationsThisMonth} kr</div>
                    <div className="text-sm text-gray-500">Denna månad</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ekonomiska verktyg</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full primary-button">Exportera donationsrapport</Button>
                  <Button className="w-full secondary-button">Skicka tackbrev</Button>
                  <Button className="w-full secondary-button">Uppdatera donationssida</Button>
                  <Button className="w-full secondary-button">Visa utgifter</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        
      </main>
    </div>
  )
}
