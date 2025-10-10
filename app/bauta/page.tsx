// Path: app/bauta/page.tsx
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bautaProjects } from "@/data/bauta";

export default function BautaOverviewPage() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-10">🌍 BAUTA Projects</h1>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                          {bautaProjects.map((p) => (
                                    <Card key={p.id} className="hover:shadow-md transition-shadow">
                                                <CardHeader>
                                                              <CardTitle>
                                                                              {p.title} <span className="text-slate-500 text-sm">• ID {p.id}</span>
                                                                                            </CardTitle>
                                                                                                        </CardHeader>
                                                                                                                    <CardContent>
                                                                                                                                  <p className="text-sm text-slate-700 mb-4">{p.presentation}</p>
                                                                                                                                                <Link href={`/bauta/${p.id}`} className="text-blue-600 hover:underline text-sm">
                                                                                                                                                                Read more →
                                                                                                                                                                              </Link>
                                                                                                                                                                                          </CardContent>
                                                                                                                                                                                                    </Card>
                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                        }
