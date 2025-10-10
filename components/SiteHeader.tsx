// NEW Path: components/SiteHeader.tsx
"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
      <header className="sticky top-0 z-40 heal-glass border-b border-slate-200">
            <div className="page-wrap py-3 flex items-center justify-between gap-2">
                    {/* Logo + namn (vänster) */}
                            <Link
                                      href="/"
                                                className="min-w-0 flex items-center gap-2 text-slate-900"
                                                          aria-label="Gå till startsidan"
                                                                  >
                                                                            <span className="text-2xl leading-none">🍄</span>
                                                                                      <span className="text-base sm:text-lg md:text-xl font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                                                                                                  Mushroom Maniacs
                                                                                                            </span>
                                                                                                                    </Link>

                                                                                                                            {/* Stöd-knapp (höger) */}
                                                                                                                                    <Link
                                                                                                                                              href="/ai-room/support"
                                                                                                                                                        className="inline-flex items-center whitespace-nowrap rounded-lg px-3 py-1.5 bg-blue-500 text-white text-sm sm:text-base font-medium hover:bg-blue-600 transition"
                                                                                                                                                                  aria-label="Gå till stöd-sidan"
                                                                                                                                                                          >
                                                                                                                                                                                    Stödj ♥️
                                                                                                                                                                                            </Link>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      </header>
                                                                                                                                                                                                        );
                                                                                                                                                                                                        }
