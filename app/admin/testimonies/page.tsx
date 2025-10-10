"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function AdminTestimoniesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Godkänn vittnesbörd</h1>
          <p className="text-gray-600 mb-6">Granska och godkänn inkomna vittnesbörd</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Väntande vittnesbörd</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg font-medium mb-2">0 demo-ärenden</p>
              <p className="text-sm">Inga vittnesbörd att granska just nu</p>
            </div>
          </CardContent>
        </Card>

        
      </main>
    </div>
  )
}
