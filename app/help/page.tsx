import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import  BackButton  from "@/components/BackButton"
import { DollarSign, FileText, Clock, ExternalLink, AlertCircle, CheckCircle, Download } from "lucide-react"

const financialAid = [
  {
    name: "Försörjningsstöd (Socialbidrag)",
    description: "Ekonomiskt stöd för grundläggande behov",
    authority: "Kommun",
    requirements: ["Behöva ekonomisk hjälp", "Vara folkbokförd i kommunen", "Söka andra bidrag först"],
    documents: ["Ansökan", "Inkomstuppgifter", "Utgiftsspecifikation", "Kontoutdrag"],
    amount: "Varierar per kommun",
    processingTime: "2-4 veckor",
    website: "socialstyrelsen.se",
  },
  {
    name: "Bostadsbidrag",
    description: "Stöd för boendekostnader",
    authority: "Försäkringskassan",
    requirements: ["Låg inkomst", "Egen bostad", "Folkbokförd i Sverige"],
    documents: ["Ansökan", "Hyreskontrakt", "Inkomstuppgifter"],
    amount: "Max 7 000 kr/månad",
    processingTime: "4-6 veckor",
    website: "forsakringskassan.se",
  },
  {
    name: "Aktivitetsersättning",
    description: "För personer med nedsatt arbetsförmåga",
    authority: "Försäkringskassan",
    requirements: ["19-29 år", "Nedsatt arbetsförmåga", "Läkarintyg"],
    documents: ["Ansökan", "Läkarintyg", "Utredningar"],
    amount: "Ca 12 000 kr/månad",
    processingTime: "8-12 veckor",
    website: "forsakringskassan.se",
  },
  {
    name: "Sjukersättning",
    description: "För personer med permanent nedsatt arbetsförmåga",
    authority: "Försäkringskassan",
    requirements: ["Permanent nedsatt arbetsförmåga", "Läkarintyg", "Utredningar"],
    documents: ["Ansökan", "Läkarintyg", "Medicinska utredningar"],
    amount: "Ca 13 000 kr/månad",
    processingTime: "12-16 veckor",
    website: "forsakringskassan.se",
  },
]

const foundations = [
  {
    name: "Allmänna Arvsfonden",
    description: "Stöd till ideella organisationer och enskilda i svåra situationer",
    focus: "Barn, ungdomar, funktionsnedsättning",
    website: "arvsfonden.se",
    contact: "info@arvsfonden.se",
  },
  {
    name: "Stiftelsen Stora Sköndal",
    description: "Hjälp till personer med funktionsnedsättning",
    focus: "Funktionsnedsättning, psykisk ohälsa",
    website: "storaskondal.se",
    contact: "info@storaskondal.se",
  },
  {
    name: "Majblommans Riksförbund",
    description: "Stöd till barn och familjer i utsatta situationer",
    focus: "Barn, familjer, ekonomisk utsatthet",
    website: "majblomman.se",
    contact: "info@majblomman.se",
  },
  {
    name: "Radiohjälpen",
    description: "Akut ekonomisk hjälp i krissituationer",
    focus: "Akuta kriser, ekonomisk nöd",
    website: "radiohjalpen.se",
    contact: "info@radiohjalpen.se",
  },
]

const requiredDocuments = [
  {
    document: "Personbevis",
    description: "Från Skatteverket, max 6 månader gammalt",
    where: "skatteverket.se",
  },
  {
    document: "Inkomstuppgifter",
    description: "Lönespecifikationer, A-kassa, pension etc.",
    where: "Arbetsgivare/myndighet",
  },
  {
    document: "Kontoutdrag",
    description: "Från alla bankkonton, senaste 3 månaderna",
    where: "Din bank",
  },
  {
    document: "Hyreskontrakt",
    description: "Kopia på gällande hyreskontrakt",
    where: "Hyresvärd",
  },
  {
    document: "Läkarintyg",
    description: "Vid sjukdom eller funktionsnedsättning",
    where: "Vårdcentral/specialist",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Ekonomisk Hjälp & Stöd</h1>
          <p className="text-xl text-gray-600 mb-6 text-pretty">
            Information om bidrag, stöd och ekonomisk hjälp som du kan ha rätt till
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/verksta">
              <Button className="primary-button">Se enkla jobb</Button>
            </Link>
            <Link href="/admin">
              <Button className="secondary-button">Kontakta admin</Button>
            </Link>
            <a href="/files/checklista.pdf" download>
              <Button className="secondary-button flex items-center gap-2">
                <Download className="h-4 w-4" />
                ⬇️ Ladda ner checklista
              </Button>
            </a>
          </div>
        </div>

        {/* Financial Aid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            Bidrag & Ekonomiskt stöd
          </h2>
          <div className="space-y-6">
            {financialAid.map((aid, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{aid.name}</CardTitle>
                      <CardDescription className="mt-2">{aid.description}</CardDescription>
                      <Badge variant="outline" className="mt-2">
                        {aid.authority}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{aid.amount}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-3 w-3" />
                        {aid.processingTime}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Krav
                      </h4>
                      <ul className="text-sm space-y-1">
                        {aid.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        Dokument som krävs
                      </h4>
                      <ul className="text-sm space-y-1">
                        {aid.documents.map((doc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <a
                      href={`https://${aid.website}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ansök på {aid.website}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Foundations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-purple-600" />
            Stiftelser & Fonder
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {foundations.map((foundation, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{foundation.name}</CardTitle>
                  <CardDescription>{foundation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Fokus:</strong> {foundation.focus}
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`https://${foundation.website}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {foundation.website}
                    </a>
                    <p className="text-xs text-gray-500">{foundation.contact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-orange-600" />
            Dokument som ofta krävs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requiredDocuments.map((doc, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{doc.document}</h3>
                  <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                  <p className="text-xs text-blue-600">Från: {doc.where}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Viktigt att veta</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ansök i tid - många bidrag har långa handläggningstider</li>
                  <li>• Spara alla kvitton och dokument</li>
                  <li>• Kontakta kommunens ekonomiska rådgivning för hjälp</li>
                  <li>• Du kan överklaga beslut om du inte är nöjd</li>
                  <li>• Sök flera olika bidrag samtidigt om du har rätt till dem</li>
                </ul>
                <div className="mt-6">
                  <a href="mailto:admin@mushroom-maniacs.se">
                    <Button className="accent-button">Kontakta ekonomisk rådgivning</Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <BackButton />
        </div>
      </main>
    </div>
  )
}
