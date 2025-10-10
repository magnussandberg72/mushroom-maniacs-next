"use client";

import { ButtonHTMLAttributes } from "react";

export default function HealingButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
  ) {
    const { className = "", ...rest } = props;
      return (
          <button
                {...rest}
                      className={[
                              "px-5 py-2.5 rounded-xl2 font-medium",
                                      "bg-white/80 hover:bg-white shadow-soft",
                                              "border border-[rgba(120,150,200,.25)]",
                                                      "transition transform active:scale-[.99]",
                                                              "focus-visible:outline-[3px] focus-visible:outline-heal-ring",
                                                                      "animate-breathe",
                                                                              className,
                                                                                    ].join(" ")}
                                                                                        />
                                                                                          );
                                                                                          }
