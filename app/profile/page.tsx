"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import  BackButton  from "@/components/BackButton"
import { User, MapPin, Calendar, Edit, Save, X, UserPlus, UserX, Flag, Download } from "lucide-react"

interface UserProfile {
  name: string
  city: string
  bio: string
  joinDate: string
  followers: number
  following: number
  posts: number
  isFollowing: boolean
  isBlocked: boolean
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    name: "Anna Andersson",
    city: "Stockholm",
    bio: "Hej! Jag är 28 år och har kämpat med depression i flera år. Genom terapi och stöd från familj och vänner har jag lärt mig att hantera mina utmaningar bättre. Jag älskar att läsa, måla och ta långa promenader i naturen. Här på Mushroom Maniacs har jag hittat en community som verkligen förstår. Jag hoppas att min historia kan inspirera andra som går igenom liknande saker. Vi är starkare tillsammans! 💪",
    joinDate: "2023-08-15",
    followers: 127,
    following: 89,
    posts: 23,
    isFollowing: false,
    isBlocked: false,
  })

  const [editedProfile, setEditedProfile] = useState(profile)

  const handleSave = () => {
    if (editedProfile.bio.length > 2000) {
      alert("Biografin får max vara 2000 tecken")
      return
    }
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  const toggleFollow = () => {
    setProfile({ ...profile, isFollowing: !profile.isFollowing })
  }

  const toggleBlock = () => {
    setProfile({ ...profile, isBlocked: !profile.isBlocked })
  }

  const recentActivity = [
    {
      type: "post",
      content: "Delade ett vittnesbörd: 'Min resa genom depression'",
      date: "2024-01-15",
      likes: 24,
    },
    {
      type: "comment",
      content: "Kommenterade på 'Ångest och panikattacker'",
      date: "2024-01-12",
      likes: 8,
    },
    {
      type: "event",
      content: "Deltog i 'Mindfulness & Meditation'",
      date: "2024-01-10",
      likes: 0,
    },
    {
      type: "chat",
      content: "Aktiv i chatrummet 'Ångestprat'",
      date: "2024-01-08",
      likes: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {profile.name.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{profile.name}</CardTitle>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <MapPin className="h-4 w-4" />
                      {profile.city}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <Calendar className="h-4 w-4" />
                      Medlem sedan {new Date(profile.joinDate).toLocaleDateString("sv-SE")}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {!isEditing ? (
                    <>
                      <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Redigera
                      </Button>
                      <Button onClick={toggleFollow} variant={profile.isFollowing ? "default" : "outline"} size="sm">
                        {profile.isFollowing ? (
                          <>
                            <UserX className="h-4 w-4 mr-2" />
                            Sluta följa
                          </>
                        ) : (
                          <>
                            <UserPlus className="h-4 w-4 mr-2" />
                            Följ
                          </>
                        )}
                      </Button>
                      <Button onClick={toggleBlock} variant="destructive" size="sm">
                        {profile.isBlocked ? "Avblockera" : "Blockera"}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={handleSave} className="primary-button" size="sm">
                        <Save className="h-4 w-4 mr-2" />
                        Spara
                      </Button>
                      <Button onClick={handleCancel} variant="outline" size="sm">
                        <X className="h-4 w-4 mr-2" />
                        Avbryt
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{profile.posts}</div>
                  <div className="text-sm text-gray-500">Inlägg</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{profile.followers}</div>
                  <div className="text-sm text-gray-500">Följare</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{profile.following}</div>
                  <div className="text-sm text-gray-500">Följer</div>
                </div>
              </div>

              {profile.isBlocked && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">Denna användare är blockerad</p>
                </div>
              )}

              <div>
                <h3 className="font-semibold mb-2">Biografi</h3>
                {isEditing ? (
                  <div>
                    <div className="mb-2">
                      <input
                        type="text"
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                        placeholder="Namn"
                      />
                      <input
                        type="text"
                        value={editedProfile.city}
                        onChange={(e) => setEditedProfile({ ...editedProfile, city: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Stad"
                      />
                    </div>
                    <Textarea
                      value={editedProfile.bio}
                      onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                      className="min-h-32"
                      placeholder="Berätta om dig själv (max 2000 tecken)"
                      maxLength={2000}
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">{editedProfile.bio.length}/2000 tecken</div>
                  </div>
                ) : (
                  <p className="text-gray-700 whitespace-pre-wrap text-pretty">{profile.bio}</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Senaste aktivitet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.content}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-gray-500">{activity.date}</span>
                        {activity.likes > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {activity.likes} gillningar
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Mina filer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Min personliga berättelse.pdf</p>
                    <p className="text-xs text-gray-500">Sparad 2024-01-15 • 245 KB</p>
                  </div>
                  <a href="/files/personal-story.pdf" download>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Ladda ner
                    </Button>
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Mina anteckningar från terapi.docx</p>
                    <p className="text-xs text-gray-500">Sparad 2024-01-10 • 128 KB</p>
                  </div>
                  <a href="/files/therapy-notes.docx" download>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Ladda ner
                    </Button>
                  </a>
                </div>
                <div className="text-center py-4">
                  <p className="text-sm text-gray-500">Demo-lagring: 2 av 10 filer använda</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <BackButton />
          </div>
        </div>
      </main>
    </div>
  )
}
