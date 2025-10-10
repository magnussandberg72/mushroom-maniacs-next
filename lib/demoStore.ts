export function pushItem(key: string, item: any) {
  if (typeof window === "undefined") return
  const arr = JSON.parse(localStorage.getItem(key) || "[]")
  arr.unshift({ ...item, _ts: Date.now() })
  localStorage.setItem(key, JSON.stringify(arr))
}

export function readItems<T = any>(key: string): T[] {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem(key) || "[]")
  } catch {
    return []
  }
}
