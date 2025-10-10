import { ReactNode } from "react";

export default function HealingCard({
  children,
    className = "",
    }: { children: ReactNode; className?: string }) {
      return (
          <div
                className={`heal-card p-5 md:p-6 animate-breathe ${className}`}
                      role="region"
                          >
                                {children}
                                    </div>
                                      );
                                      }
