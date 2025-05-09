"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
  LogIn,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Navigation data with subcategories
const navigationData = [
  {
    name: "خانه",
    href: "/",
    subcategories: [],
  },
  {
    name: "دسته‌بندی‌ها",
    href: "/categories",
    subcategories: [
      {
        name: "الکترونیک",
        href: "/categories/electronics",
        featured: [
          {
            name: "گوشی‌های هوشمند",
            href: "/categories/electronics/smartphones",
          },
          { name: "لپ‌تاپ‌ها", href: "/categories/electronics/laptops" },
          { name: "صوتی", href: "/categories/electronics/audio" },
        ],
      },
      {
        name: "پوشاک",
        href: "/categories/clothing",
        featured: [
          { name: "مردانه", href: "/categories/clothing/mens" },
          { name: "زنانه", href: "/categories/clothing/womens" },
          { name: "بچه‌گانه", href: "/categories/clothing/kids" },
        ],
      },
      {
        name: "خانه و آشپزخانه",
        href: "/categories/home-kitchen",
        featured: [
          { name: "لوازم خانگی", href: "/categories/home-kitchen/appliances" },
          { name: "مبلمان", href: "/categories/home-kitchen/furniture" },
          { name: "دکوراسیون", href: "/categories/home-kitchen/decor" },
        ],
      },
      {
        name: "زیبایی",
        href: "/categories/beauty",
        featured: [
          { name: "مراقبت پوست", href: "/categories/beauty/skincare" },
          { name: "آرایشی", href: "/categories/beauty/makeup" },
          { name: "مراقبت مو", href: "/categories/beauty/haircare" },
        ],
      },
    ],
  },
  {
    name: "جدیدترین‌ها",
    href: "/new-arrivals",
    subcategories: [
      {
        name: "این هفته",
        href: "/new-arrivals/this-week",
        featured: [
          { name: "مجموعه زنانه", href: "/new-arrivals/this-week/womens" },
          { name: "مجموعه مردانه", href: "/new-arrivals/this-week/mens" },
          { name: "اکسسوری", href: "/new-arrivals/this-week/accessories" },
        ],
      },
      {
        name: "فصلی",
        href: "/new-arrivals/seasonal",
        featured: [
          { name: "مجموعه تابستانی", href: "/new-arrivals/seasonal/summer" },
          { name: "مجموعه زمستانی", href: "/new-arrivals/seasonal/winter" },
          { name: "مجموعه بهاری", href: "/new-arrivals/seasonal/spring" },
        ],
      },
    ],
  },
  {
    name: "پرفروش‌ترین‌ها",
    href: "/best-sellers",
    subcategories: [
      {
        name: "برترین‌ها",
        href: "/best-sellers/top-rated",
        featured: [
          { name: "الکترونیک", href: "/best-sellers/top-rated/electronics" },
          { name: "پوشاک", href: "/best-sellers/top-rated/clothing" },
          {
            name: "خانه و آشپزخانه",
            href: "/best-sellers/top-rated/home-kitchen",
          },
        ],
      },
      {
        name: "محبوب‌ترین‌ها",
        href: "/best-sellers/most-popular",
        featured: [
          { name: "این ماه", href: "/best-sellers/most-popular/this-month" },
          { name: "امسال", href: "/best-sellers/most-popular/this-year" },
          { name: "همه زمان‌ها", href: "/best-sellers/most-popular/all-time" },
        ],
      },
    ],
  },
  {
    name: "تخفیف‌ها",
    href: "/deals",
    subcategories: [
      {
        name: "حراج",
        href: "/deals/clearance",
        featured: [
          { name: "تا ۳۰٪ تخفیف", href: "/deals/clearance/30-off" },
          { name: "تا ۵۰٪ تخفیف", href: "/deals/clearance/50-off" },
          { name: "تا ۷۰٪ تخفیف", href: "/deals/clearance/70-off" },
        ],
      },
      {
        name: "پیشنهادهای ویژه",
        href: "/deals/special-offers",
        featured: [
          { name: "پکیج‌های تخفیف", href: "/deals/special-offers/bundles" },
          { name: "حراج‌های فوری", href: "/deals/special-offers/flash-sales" },
          { name: "پیشنهادهای فصلی", href: "/deals/special-offers/seasonal" },
        ],
      },
    ],
  },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // For demo purposes
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Check if user is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile) {
    return (
      <div
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          isScrolled && "shadow-sm"
        )}
      >
        <div className="container flex h-14 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col h-full">
                <div className="py-4">
                  <Link href="/" className="flex items-center mx-2 px-2">
                    <span className="font-bold text-xl">هاکامارکت</span>
                  </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                  <nav className="flex flex-col space-y-1">
                    {navigationData.map((item) => (
                      <div key={item.name}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center px-2 py-2 text-base rounded-md",
                              pathname === item.href
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:bg-muted"
                            )}
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                        {item.subcategories.length > 0 && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.subcategories.map((subcat) => (
                              <SheetClose asChild key={subcat.name}>
                                <Link
                                  href={subcat.href}
                                  className="flex items-center px-2 py-1.5 text-sm rounded-md text-muted-foreground hover:bg-muted"
                                >
                                  {subcat.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="border-t py-4">
                  {isAuthenticated ? (
                    <div className="px-2 space-y-1">
                      <SheetClose asChild>
                        <Link
                          href="/account"
                          className="flex items-center px-2 py-2 text-base rounded-md text-muted-foreground hover:bg-muted"
                        >
                          <User className="mr-2 h-4 w-4" />
                          My Account
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/wishlist"
                          className="flex items-center px-2 py-2 text-base rounded-md text-muted-foreground hover:bg-muted"
                        >
                          <Heart className="mr-2 h-4 w-4" />
                          Wishlist
                        </Link>
                      </SheetClose>
                      <Button
                        variant="outline"
                        className="w-full mt-2"
                        onClick={() => setIsAuthenticated(false)}
                      >
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="px-2 space-y-2">
                      <SheetClose asChild>
                        <Button asChild className="w-full">
                          <Link href="/login">Sign In</Link>
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button asChild variant="outline" className="w-full">
                          <Link href="/signup">Create Account</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">هاکامارکت</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="mr-2" asChild>
              <Link href="/cart">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    3
                  </Badge>
                </div>
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
        {isSearchOpen && (
          <div className="container py-2 pb-3 border-t">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="جستجوی محصولات..."
                className="w-full pl-9 pr-10"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">هاکامارکت</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigationData.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80 flex items-center",
                    pathname === item.href
                      ? "text-foreground font-semibold"
                      : "text-foreground/60",
                    item.subcategories.length > 0 && "pr-1"
                  )}
                >
                  {item.name}
                  {item.subcategories.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.subcategories.length > 0 && (
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-2 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                      activeDropdown === item.name && "opacity-100 visible"
                    )}
                  >
                    <div className="bg-background rounded-md border shadow-lg overflow-hidden">
                      <div className="grid grid-cols-1 gap-0">
                        {item.subcategories.map((subcategory) => (
                          <div
                            key={subcategory.name}
                            className="p-4 hover:bg-muted"
                          >
                            <Link
                              href={subcategory.href}
                              className="font-medium text-sm hover:text-primary"
                            >
                              {subcategory.name}
                            </Link>

                            {subcategory.featured &&
                              subcategory.featured.length > 0 && (
                                <div className="mt-2 grid grid-cols-1 gap-1">
                                  {subcategory.featured.map((featuredItem) => (
                                    <Link
                                      key={featuredItem.name}
                                      href={featuredItem.href}
                                      className="text-xs text-muted-foreground hover:text-foreground pl-2 py-1"
                                    >
                                      {featuredItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">هاکامارکت</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="جستجوی محصولات..."
              className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    3
                  </Badge>
                </div>
                <span className="sr-only">Cart</span>
              </Link>
            </Button>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="User"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>حساب من</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/account" className="cursor-pointer">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/account/orders" className="cursor-pointer">
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/account/wishlist" className="cursor-pointer">
                      Wishlist
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/account/addresses" className="cursor-pointer">
                      Addresses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => setIsAuthenticated(false)}
                    className="cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="default" size="sm" asChild>
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
