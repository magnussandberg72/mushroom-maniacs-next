// B B
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Props = {
  label?: string;
    fallback?: string;   // vart vi går om back inte funkar
      className?: string;
      };

      export default function BackButton({
        label = "Tillbaka",
          fallback = "/",
            className = "",
            }: Props) {
              const router = useRouter();

                function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
                    // Kolla om vi *kan* gå bakåt i SPA-historiken
                        const idx = (history.state?.idx ?? 0);               // Next.js sätter idx
                            const sameHost =
                                  !!document.referrer &&
                                        new URL(document.referrer).host === location.host;

                                            const canGoBack = idx > 0 || sameHost;

                                                if (canGoBack) {
                                                      // Vi hanterar själv: stoppa länkens default och gå back()
                                                            e.preventDefault();
                                                                  router.back();
                                                                      }
                                                                          // Om vi inte kan gå bakåt så låter vi länken göra sitt jobb
                                                                              // (den har href=fallback) – ingen preventDefault -> navigerar säkert.
                                                                                }

                                                                                  return (
                                                                                      <div className={`backbtn-wrap ${className}`}>
                                                                                            <Link href={fallback} onClick={handleClick} className="back-btn">
                                                                                                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                                                                                                            {label}
                                                                                                                  </Link>
                                                                                                                      </div>
                                                                                                                        );
                                                                                                                        }
