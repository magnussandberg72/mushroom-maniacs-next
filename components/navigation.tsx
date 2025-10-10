"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Home,
  MessageSquare,
  Users,
  Church,
  Calendar,
  BookOpen,
  Wrench,
  DollarSign,
  Heart,
  User,
  Settings,
} from "lucide-react"

const navItems = [
  { href: "/", label: "Hem", icon: Home },
  { href: "/testimonies", label: "Vittnesbörd", icon: MessageSquare },
  { href: "/chat", label: "Chat", icon: Users },
  { href: "/church", label: "Hälso-Kyrkan", icon: Church },
  { href: "/events", label: "Event", icon: Calendar },
  { href: "/diary", label: "Dagbok", icon: BookOpen },
  { href: "/resources", label: "Resurser", icon: MessageSquare },
  { href: "/verksta", label: "Verksta", icon: Wrench },
  { href: "/help", label: "Ekonomisk Hjälp", icon: DollarSign },
  { href: "/donate", label: "Admin Gåvor", icon: Heart },
  { href: "/profile", label: "Profil", icon: User },
  { href: "/admin", label: "Admin", icon: Settings },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🍄</span>
            <span className="font-bold text-xl">Mushroom Maniacs</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button variant={isActive ? "default" : "ghost"} size="sm" className="flex items-center space-x-1">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-2">
            <Link href="/profile">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
