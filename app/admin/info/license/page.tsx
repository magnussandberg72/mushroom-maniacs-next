// license

"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function LicensePage() {
  return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
            <Card className="shadow-md">
                    <CardHeader>
                              <CardTitle>📜 License</CardTitle>
                                        <CardDescription>
                                                    Rättigheter och villkor för Mushroom Maniacs.
                                                              </CardDescription>
                                                                      </CardHeader>
                                                                              <CardContent className="space-y-4 text-base leading-relaxed">
                                                                                        <p>
                                                                                                    Allt innehåll i appen tillhör Mushroom Maniacs om inte annat anges.
                                                                                                                Material får inte kopieras eller spridas utan tillstånd.
                                                                                                                          </p>
                                                                                                                                    <p className="text-sm text-muted-foreground">
                                                                                                                                                Användningen av appen innebär att du accepterar dessa villkor.
                                                                                                                                                          </p>
                                                                                                                                                                  </CardContent>
                                                                                                                                                                        </Card>
                                                                                                                                                                            </div>
                                                                                                                                                                              )
                                                                                                                                                                              }
