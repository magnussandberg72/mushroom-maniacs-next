"use client"

import { useEffect, useState } from "react"

export function useToast() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    if (!msg) return
    const timer = setTimeout(() => setMsg(""), 2000)
    return () => clearTimeout(timer)
  }, [msg])

  const Toast = () =>
    msg ? (
      <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">{msg}</div>
    ) : null

  return { setMsg, Toast }
}
