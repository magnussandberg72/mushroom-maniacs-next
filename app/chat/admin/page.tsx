"use client"
import  BackButton  from "@/components/BackButton"

export default function AdminChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto max-w-3xl px-4 md:px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">🔒 Admins rum</h1>
          <p className="text-gray-600 mb-6">Endast för administratörer</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Riktlinjer för chatt</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Var respektfull och stöttande</li>
            <li>• Dela inte känslig identitet</li>
            <li>• Rapportera olämpligt beteende</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="text-center text-gray-500 py-8">
            <p className="mb-4">Detta är en demo. Meddelanden är avstängda tills vi kopplat backend.</p>
            <div className="flex items-center gap-2 justify-center">
              <input
                type="text"
                placeholder="Skriv ditt meddelande..."
                className="flex-1 max-w-md px-3 py-2 border rounded-lg"
                disabled
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg opacity-50" disabled>
                Skicka
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <BackButton label="← Tillbaka till Chatten" fallback="/chat" />
        </div>
      </div>
    </div>
  )
}
