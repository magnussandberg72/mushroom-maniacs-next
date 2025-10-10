// Path: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
    theme: {
        extend: {
              fontFamily: {
                      display: ["Poppins", "ui-sans-serif", "system-ui"],
                              body: ["Nunito", "ui-sans-serif", "system-ui"],
                                    },
                                          colors: {
                                                  heal: {
                                                            bg: "hsl(210 60% 99%)",
                                                                      surf: "hsl(210 60% 98%)",
                                                                                text: "hsl(222 24% 16%)",
                                                                                          mute: "hsl(222 15% 45%)",
                                                                                                    blue: "hsl(202 100% 88%)",
                                                                                                              lavender: "hsl(258 100% 90%)",
                                                                                                                        pink: "hsl(338 100% 90%)",
                                                                                                                                  mint: "hsl(158 60% 86%)",
                                                                                                                                            glow: "hsl(210 100% 97%)",
                                                                                                                                                      ring: "hsl(210 90% 70%)",
                                                                                                                                                              },
                                                                                                                                                                    },
                                                                                                                                                                          boxShadow: {
                                                                                                                                                                                  heal: "0 10px 30px -12px rgba(50,100,150,.22)",
                                                                                                                                                                                          soft: "0 4px 16px -6px rgba(20,40,60,.14)",
                                                                                                                                                                                                  inner: "inset 0 1px 0 rgba(255,255,255,.8)",
                                                                                                                                                                                                        },
                                                                                                                                                                                                              borderRadius: {
                                                                                                                                                                                                                      xl2: "1.25rem",
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                  backdropBlur: {
                                                                                                                                                                                                                                          xs: "2px",
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                      keyframes: {
                                                                                                                                                                                                                                                              breathe: {
                                                                                                                                                                                                                                                                        "0%, 100%": { opacity: "0.92", transform: "translateY(0)" },
                                                                                                                                                                                                                                                                                  "50%": { opacity: "1", transform: "translateY(-2px)" },
                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                  subtleGlow: {
                                                                                                                                                                                                                                                                                                            "0%,100%": { boxShadow: "0 0 0 rgba(0,0,0,0)" },
                                                                                                                                                                                                                                                                                                                      "50%": { boxShadow: "0 0 40px rgba(100,170,255,.25)" },
                                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                          animation: {
                                                                                                                                                                                                                                                                                                                                                  breathe: "breathe 6s ease-in-out infinite",
                                                                                                                                                                                                                                                                                                                                                          glow: "subtleGlow 14s ease-in-out infinite",
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                        plugins: [], // v4: låt bli @tailwindcss/forms och egna addUtilities-plugins
                                                                                                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                                                                                        export default config;
