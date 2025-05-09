"use client"

import Link from "next/link"
import { Home, Search, ShoppingCart, User, Grid } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"

export function MobileNavbar() {
  const isMobile = useIsMobile()
  const pathname = usePathname()

  if (!isMobile) {
    return null
  }

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      active: pathname === "/",
    },
    {
      name: "Categories",
      href: "/categories",
      icon: Grid,
      active: pathname === "/categories",
    },
    {
      name: "Search",
      href: "/search",
      icon: Search,
      active: pathname === "/search",
    },
    {
      name: "Cart",
      href: "/cart",
      icon: ShoppingCart,
      active: pathname === "/cart",
      badge: 3,
    },
    {
      name: "Account",
      href: "/account",
      icon: User,
      active: pathname === "/account",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-background md:hidden">
      <div className="grid h-full grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center",
              item.active ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div className="relative">
              <item.icon className="h-6 w-6" />
              {item.badge && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {item.badge}
                </Badge>
              )}
            </div>
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
