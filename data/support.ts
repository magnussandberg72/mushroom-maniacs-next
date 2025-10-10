// Path: data/support.ts
// Beskrivning: Statisk lista över personer som kan få direkt stöd.
// OBS: Denna fil kan senare bytas mot ett API, men v1 är helt statisk.

export type SupportPerson = {
  id: string; // unik slug/uuid
    name: string;
      category: "Admin" | "Medlem" | "Familj";
        description: string; // kort beskrivning
          swish: string; // endast siffror, ex "0728502584"
            contact: string; // e-post
              tel?: string; // valfritt
                city?: string; // valfritt
                  needLevel?: 1 | 2 | 3 | 4 | 5; // 5 = störst behov
                    addedAt?: string; // ISO-datum (valfritt)
                      bank?: {
                          iban?: string;
                              bic?: string;
                                  clearing?: string;
                                      account?: string;
                                          note?: string; // ex "Stöd till {name} via Mushroom Maniacs"
                                            };
                                            };

                                            export const supportPeople: SupportPerson[] = [
                                              {
                                                  id: "magnus-admin",
                                                      name: "Magnus (Admin)",
                                                          category: "Admin",
                                                              description:
                                                                    "Behöver ekonomiskt stöd för lön till appen och ett dyrt lån (35 000 kr). Tack för varje liten gåva.",
                                                                        swish: "0728502584",
                                                                            contact: "magnus.lulea@proton.me",
                                                                                tel: "0728502584",
                                                                                    city: "Luleå",
                                                                                        needLevel: 5,
                                                                                            addedAt: new Date().toISOString(),
                                                                                                bank: {
                                                                                                      iban: "SE4360000000000943291011",
                                                                                                            bic: "HANDSESS",
                                                                                                                  clearing: "6201",
                                                                                                                        account: "943291011",
                                                                                                                              note: "Stöd till Magnus (AI-room) via Mushroom Maniacs",
                                                                                                                                  },
                                                                                                                                    },
                                                                                                                                      {
                                                                                                                                          id: "elin-medlem",
                                                                                                                                              name: "Elin",
                                                                                                                                                  category: "Medlem",
                                                                                                                                                      description:
                                                                                                                                                            "Kämpar med långvarig utmattning och låg inkomst. Swish-hjälp uppskattas enormt.",
                                                                                                                                                                swish: "0701234567",
                                                                                                                                                                    contact: "elin@example.com",
                                                                                                                                                                        city: "Uppsala",
                                                                                                                                                                            needLevel: 4,
                                                                                                                                                                                addedAt: "2025-09-01T12:00:00.000Z",
                                                                                                                                                                                    bank: {
                                                                                                                                                                                          iban: "SE1212345678901234567890",
                                                                                                                                                                                                bic: "SWEDSESS",
                                                                                                                                                                                                      note: "Stöd till Elin via Mushroom Maniacs",
                                                                                                                                                                                                          },
                                                                                                                                                                                                            },
                                                                                                                                                                                                              {
                                                                                                                                                                                                                  id: "familj-lund",
                                                                                                                                                                                                                      name: "Familjen Lund",
                                                                                                                                                                                                                          category: "Familj",
                                                                                                                                                                                                                              description:
                                                                                                                                                                                                                                    "Behöver tillfällig hjälp med hyran efter sjukskrivning. Tack för ert stöd.",
                                                                                                                                                                                                                                        swish: "0737654321",
                                                                                                                                                                                                                                            contact: "familjen.lund@example.com",
                                                                                                                                                                                                                                                city: "Västerås",
                                                                                                                                                                                                                                                    needLevel: 3,
                                                                                                                                                                                                                                                        addedAt: "2025-09-10T09:30:00.000Z",
                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                          ];
