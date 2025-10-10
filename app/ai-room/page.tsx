// app/ai-room/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
 // ✅ Lägg till

// ... THEMES och resten oförändrat ...

export default function AIRoomPage() {
  const [input, setInput] = useState("");
    const [busy, setBusy] = useState(false);
      const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string }[]>([]);
        const [currentTheme, setCurrentTheme] = useState("theme-airoom");

          // ... useEffect och chat-funktioner oförändrade ...

            return (
                <div className="flex min-h-screen flex-col">
                      <main className="container mx-auto max-w-3xl px-4 py-10 flex-grow">
                              {/* Intro */}
                                      {/* ... intro + chat som du redan har ... */}

                                              {/* Back */}
                                                      
                                                                              </main>
                                                                                  </div>
                                                                                    );
                                                                                    }
