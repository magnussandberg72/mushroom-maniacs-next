import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Mushroom Maniacs",
    description: "En plats för stöd, gemenskap och tro.",
    generator: 'v0.app'
};

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
          <html lang="sv">
                <body className="flex flex-col min-h-screen">
                        <SiteHeader />
                                <main className="flex-grow">{children}</main>

                                        {/* Global BackButton – centrerad med luft */}
                                                <div className="backbtn-wrap">
                                                          <BackButton fallback="/" />
                                                                  </div>

                                                                          <Footer />
                                                                                </body>
                                                                                    </html>
                                                                                      );
                                                                                      }
