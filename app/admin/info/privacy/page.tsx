// privacy

"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
            <Card className="shadow-md">
                    <CardHeader>
                              <CardTitle>🔒 Privacy Policy</CardTitle>
                                        <CardDescription>
                                                    Så här hanteras dina personuppgifter och din integritet.
                                                              </CardDescription>
                                                                      </CardHeader>
                                                                              <CardContent className="space-y-4 text-base leading-relaxed">
                                                                                        <p>
                                                                                                    Vi respekterar din integritet. Endast nödvändig information sparas
                                                                                                                för att kunna erbjuda våra tjänster. Ingen data säljs eller delas
                                                                                                                            med tredje part utan samtycke.
                                                                                                                                      </p>
                                                                                                                                                <p className="text-sm text-muted-foreground">
                                                                                                                                                            Du kan när som helst kontakta oss för att få veta vilken information
                                                                                                                                                                        som lagras om dig eller begära radering.
                                                                                                                                                                                  </p>
                                                                                                                                                                                          </CardContent>
                                                                                                                                                                                                </Card>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                      )
                                                                                                                                                                                                      }
