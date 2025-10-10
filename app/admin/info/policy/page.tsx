// app/admin/info/policy/page.tsx

"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PolicyPage() {
  return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
            <Card className="shadow-md">
                    <CardHeader>
                              <CardTitle>📑 Policy</CardTitle>
                                        <CardDescription>
                                                    Riktlinjer och regler för Mushroom Maniacs.
                                                              </CardDescription>
                                                                      </CardHeader>
                                                                              <CardContent className="space-y-4 text-base leading-relaxed">
                                                                                        <p>
                                                                                                    Mushroom Maniacs drivs med målet att skapa en trygg, inkluderande och
                                                                                                                positiv gemenskap. Allt innehåll, kommunikation och användande av
                                                                                                                            plattformen ska följa dessa riktlinjer:
                                                                                                                                      </p>
                                                                                                                                                <ul className="list-disc pl-6 space-y-1">
                                                                                                                                                            <li>Respektfullt bemötande – inga kränkningar, hot eller trakasserier.</li>
                                                                                                                                                                        <li>Transparens – tydlig information kring donationer, projekt och ändamål.</li>
                                                                                                                                                                                    <li>Integritet – personlig data skyddas och används inte i kommersiella syften.</li>
                                                                                                                                                                                                <li>Etik – projekt och initiativ ska alltid gagna människor och samhälle.</li>
                                                                                                                                                                                                          </ul>
                                                                                                                                                                                                                    <p className="text-sm text-muted-foreground">
                                                                                                                                                                                                                                Policyn kan komma att uppdateras. Senaste versionen publiceras alltid här.
                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                  </CardContent>
                                                                                                                                                                                                                                                        </Card>
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                              )
                                                                                                                                                                                                                                                              }
