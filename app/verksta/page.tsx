import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Wrench, Clock, DollarSign, User, MapPin, Star } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Dataregistrering hemma",
    description: "Registrera produktinformation i databas. Flexibla arbetstider.",
    pay: "150 kr/timme",
    duration: "2-4 timmar/dag",
    location: "Hemarbete",
    difficulty: "Lätt",
    skills: ["Datorvana", "Noggrannhet"],
    employer: "TechData AB",
    rating: 4.5,
    reviews: 23,
  },
  {
    id: 2,
    title: "Kundtjänst via chat",
    description: "Svara på kundfrågor via chat. Deltid, flexibla tider.",
    pay: "180 kr/timme",
    duration: "3-6 timmar/dag",
    location: "Hemarbete",
    difficulty: "Medel",
    skills: ["Kommunikation", "Tålamod"],
    employer: "ServicePlus",
    rating: 4.2,
    reviews: 18,
  },
  {
    id: 3,
    title: "Översättning svenska-engelska",
    description: "Översätt korta texter och dokument.",
    pay: "200 kr/timme",
    duration: "1-3 timmar/dag",
    location: "Hemarbete",
    difficulty: "Medel",
    skills: ["Engelska", "Svenska", "Språkkänsla"],
    employer: "LinguaWork",
    rating: 4.7,
    reviews: 31,
  },
  {
    id: 4,
    title: "Enkel grafisk design",
    description: "Skapa enkla grafiska element och logotyper.",
    pay: "250 kr/timme",
    duration: "2-5 timmar/dag",
    location: "Hemarbete",
    difficulty: "Medel",
    skills: ["Photoshop", "Kreativitet"],
    employer: "DesignStudio",
    rating: 4.3,
    reviews: 12,
  },
  {
    id: 5,
    title: "Produktrecensioner",
    description: "Testa och recensera produkter online.",
    pay: "100 kr/recension",
    duration: "1-2 timmar/recension",
    location: "Hemarbete",
    difficulty: "Lätt",
    skills: ["Skrivförmåga", "Objektivitet"],
    employer: "ReviewHub",
    rating: 4.0,
    reviews: 45,
  },
  {
    id: 6,
    title: "Virtuell assistent",
    description: "Hjälp småföretagare med administrativa uppgifter.",
    pay: "170 kr/timme",
    duration: "4-8 timmar/dag",
    location: "Hemarbete",
    difficulty: "Medel",
    skills: ["Organisation", "Office-paket"],
    employer: "BizSupport",
    rating: 4.4,
    reviews: 27,
  },
]

const difficultyColors = {
  Lätt: "bg-green-100 text-green-800",
  Medel: "bg-yellow-100 text-yellow-800",
  Svår: "bg-red-100 text-red-800",
}

export default function VerkstaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Verksta - Enkla Jobb</h1>
          <p className="text-xl text-gray-600 mb-6 text-pretty">
            Hitta flexibla frilansjobb som passar din situation och dina förmågor
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/help">
              <Button className="accent-button">Ekonomisk Hjälp</Button>
            </Link>
            <Button className="secondary-button">Filtrera jobb</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={difficultyColors[job.difficulty as keyof typeof difficultyColors]}>
                        {job.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{job.rating}</span>
                        <span className="text-xs text-gray-500">({job.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-600 font-bold">
                      <DollarSign className="h-4 w-4" />
                      {job.pay}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">{job.description}</CardDescription>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {job.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    {job.employer}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Krävs:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="primary-button flex-1">Ansök</Button>
                  <Button variant="outline" size="sm">
                    Mer info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-600" />
                Tips för att lyckas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Börja med enkla jobb för att bygga upp ditt rykte</li>
                <li>• Var ärlig om dina förmågor och begränsningar</li>
                <li>• Kommunicera tydligt med arbetsgivare</li>
                <li>• Leverera i tid och håll hög kvalitet</li>
                <li>• Be om feedback för att förbättra dig</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Behöver du ekonomisk hjälp?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Om du har svårt att klara dig ekonomiskt finns det olika former av stöd och bidrag du kan söka.
              </p>
              <Link href="/help">
                <Button className="accent-button w-full">Se ekonomisk hjälp</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Vill du erbjuda jobb?</h2>
            <p className="text-gray-700 mb-6 text-pretty">
              Har du enkla uppgifter som kan utföras av personer i vår community? Kontakta oss för att lägga upp ett
              jobb.
            </p>
            <Button className="accent-button">Lägg upp jobb</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
