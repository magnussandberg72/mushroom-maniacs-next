// app/components/footer.tsx Global
"use client"

import Link from "next/link"

export default function Footer() {
  return (
      <footer className="site-footer py-8 mt-12">
            <div className="container mx-auto px-4 text-center space-y-4">
                    {/* Text */}
                            <p className="text-sm opacity-90">
                                      © {new Date().getFullYear()} Mushroom Maniacs. Ta det lugnt 🕊
                                              </p>

                                                      {/* Länkar */}
                                                              <div className="flex justify-center gap-4 flex-wrap">
                                                                        <Link href="/donate/charity" className="donate-btn">
                                                                                    Välgörenhet 🙏🏼
                                                                                              </Link>
                                                                                                        <Link href="/donate" className="donate-btn">
                                                                                                                    Stödj Appen ♥️
                                                                                                                              </Link>
                                                                                                                                        <Link href="/bauta" className="donate-btn">
                                                                                                                                                    🌍 Bauta
                                                                                                                                                              </Link>
                                                                                                                                                                        <Link href="/admin/info" className="donate-btn">
                                                                                                                                                                                    ℹ️ Info
                                                                                                                                                                                              </Link>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                </footer>
                                                                                                                                                                                                                  )
                                                                                                                                                                                                                  }
