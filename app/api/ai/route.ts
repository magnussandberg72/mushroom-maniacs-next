import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
      const { message } = await req.json();
          const apiKey = process.env.OPENAI_API_KEY;

              if (!apiKey) {
                    return NextResponse.json(
                            { error: "OPENAI_API_KEY saknas i Environment Variables." },
                                    { status: 500 }
                                          );
                                              }
                                                  if (!message || typeof message !== "string") {
                                                        return NextResponse.json(
                                                                { error: "Skicka { message: string } i body." },
                                                                        { status: 400 }
                                                                              );
                                                                                  }

                                                                                      // Pastoral/själavårdsram som systemprompt (sv + eng).
                                                                                          const systemPrompt =
                                                                                                "Du är en varsam, respektfull själavårdare. Svara på svenska när användaren skriver på svenska, " +
                                                                                                      "annars på engelska. Erbjud hopp, tydlighet, och praktiska nästa steg. " +
                                                                                                            "Ge INTE medicinska råd – föreslå att kontakta vården vid akuta lägen. " +
                                                                                                                  "Om självmordstankar nämns: uppmana att ringa 112 (Sweden) eller närmaste akuthjälp.";

                                                                                                                      const resp = await fetch("https://api.openai.com/v1/chat/completions", {
                                                                                                                            method: "POST",
                                                                                                                                  headers: {
                                                                                                                                          "Content-Type": "application/json",
                                                                                                                                                  Authorization: `Bearer ${apiKey}`,
                                                                                                                                                        },
                                                                                                                                                              body: JSON.stringify({
                                                                                                                                                                      model: "gpt-4o-mini",
                                                                                                                                                                              messages: [
                                                                                                                                                                                        { role: "system", content: systemPrompt },
                                                                                                                                                                                                  { role: "user", content: message },
                                                                                                                                                                                                          ],
                                                                                                                                                                                                                  temperature: 0.7,
                                                                                                                                                                                                                        }),
                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                if (!resp.ok) {
                                                                                                                                                                                                                                      const errText = await resp.text();
                                                                                                                                                                                                                                            return NextResponse.json(
                                                                                                                                                                                                                                                    { error: `OpenAI error: ${resp.status} – ${errText}` },
                                                                                                                                                                                                                                                            { status: 500 }
                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                          const data = await resp.json();
                                                                                                                                                                                                                                                                              const text =
                                                                                                                                                                                                                                                                                    data?.choices?.[0]?.message?.content ??
                                                                                                                                                                                                                                                                                          "Förlåt, jag kunde inte generera ett svar just nu.";

                                                                                                                                                                                                                                                                                              return NextResponse.json({ text });
                                                                                                                                                                                                                                                                                                } catch (e: any) {
                                                                                                                                                                                                                                                                                                    return NextResponse.json(
                                                                                                                                                                                                                                                                                                          { error: e?.message ?? "Något gick fel." },
                                                                                                                                                                                                                                                                                                                { status: 500 }
                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                      }
