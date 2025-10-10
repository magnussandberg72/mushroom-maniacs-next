"use client"

import SiteHeader from "@/components/SiteHeader.new"
import Link from "next/link"

export default function ChatPage() {
  return (
      <div className="min-h-screen flex flex-col">
            <SiteHeader />
                  <main className="container mx-auto max-w-3xl px-4 py-10 flex-grow">
                          <h1 className="text-3xl font-bold mb-4">Chatt</h1>
                                  <p className="text-slate-600">
                                            Här kommer chattrummet. Under tiden – prova{" "}
                                                      <Link href="/ai-room" className="text-blue-600 underline">AI-rummet</Link>.
                                                              </p>

                                                                      <div className="mt-8">
                                                                                <Link href="/" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-50">
                                                                                            ← Tillbaka hem
                                                                                                      </Link>
                                                                                                              </div>
                                                                                                                    </main>
                                                                                                                        </div>
                                                                                                                          )
                                                                                                                          }
