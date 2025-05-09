"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";

export default function NewArrivalsPage() {
  const [sortBy, setSortBy] = useState("newest");

  // In a real app, you would fetch this data from an API
  const products = [
    {
      id: 1,
      name: "ساعت هوشمند سری ۶",
      price: 399.99,
      discountPercentage: 20,
      rating: 4.8,
      reviewCount: 45,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "لپ‌تاپ اولترابوک",
      price: 1299.99,
      discountPercentage: 0,
      rating: 4.9,
      reviewCount: 32,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "دوربین دیجیتال حرفه‌ای",
      price: 899.99,
      discountPercentage: 15,
      rating: 4.7,
      reviewCount: 28,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "هدفون بی‌سیم نویز کنسلینگ",
      price: 249.99,
      discountPercentage: 0,
      rating: 4.6,
      reviewCount: 56,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "کتابخوان الکترونیکی",
      price: 149.99,
      discountPercentage: 10,
      rating: 4.5,
      reviewCount: 42,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "اسپیکر بلوتوث قابل حمل",
      price: 79.99,
      discountPercentage: 0,
      rating: 4.4,
      reviewCount: 38,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      name: "دستگاه بازی دستی",
      price: 299.99,
      discountPercentage: 5,
      rating: 4.8,
      reviewCount: 67,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "شارژر بی‌سیم سریع",
      price: 49.99,
      discountPercentage: 0,
      rating: 4.3,
      reviewCount: 29,
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  // Sort products based on selected option
  const sortedProducts = useMemo(() => {
    switch (sortBy) {
      case "newest":
        return [...products];
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  }, [products, sortBy]);

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">New Arrivals</span>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg mb-8">
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-background">
          <div className="container px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                New Arrivals
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover our latest products, fresh off the shelves. Be the
                first to experience the newest trends and innovations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-20 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {[
                      "All Categories",
                      "Electronics",
                      "Clothing",
                      "Home & Kitchen",
                      "Beauty",
                      "Sports",
                      "Books",
                    ].map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`category-${category}`} />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-under-50" />
                      <Label
                        htmlFor="price-under-50"
                        className="text-sm font-normal cursor-pointer"
                      >
                        Under $50
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-50-100" />
                      <Label
                        htmlFor="price-50-100"
                        className="text-sm font-normal cursor-pointer"
                      >
                        $50 - $100
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-100-200" />
                      <Label
                        htmlFor="price-100-200"
                        className="text-sm font-normal cursor-pointer"
                      >
                        $100 - $200
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-over-200" />
                      <Label
                        htmlFor="price-over-200"
                        className="text-sm font-normal cursor-pointer"
                      >
                        Over $200
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label
                          htmlFor={`rating-${rating}`}
                          className="text-sm font-normal cursor-pointer flex items-center"
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                          <span className="ml-1">& Up</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Clear All Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">جدیدترین محصولات</h1>
                <p className="text-muted-foreground">
                  کشف آخرین محصولات اضافه شده به فروشگاه ما
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="md:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[300px] sm:w-[350px] p-0"
                  >
                    <SheetHeader className="p-6 pb-0">
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>
                        Narrow down your product search
                      </SheetDescription>
                    </SheetHeader>
                    <div className="p-6 space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Categories</h3>
                        <div className="space-y-2">
                          {[
                            "All Categories",
                            "Electronics",
                            "Clothing",
                            "Home & Kitchen",
                            "Beauty",
                            "Sports",
                            "Books",
                          ].map((category) => (
                            <div
                              key={category}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={`mobile-category-${category}`} />
                              <Label
                                htmlFor={`mobile-category-${category}`}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Price Range</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-under-50" />
                            <Label
                              htmlFor="mobile-price-under-50"
                              className="text-sm font-normal cursor-pointer"
                            >
                              Under $50
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-50-100" />
                            <Label
                              htmlFor="mobile-price-50-100"
                              className="text-sm font-normal cursor-pointer"
                            >
                              $50 - $100
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-100-200" />
                            <Label
                              htmlFor="mobile-price-100-200"
                              className="text-sm font-normal cursor-pointer"
                            >
                              $100 - $200
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-over-200" />
                            <Label
                              htmlFor="mobile-price-over-200"
                              className="text-sm font-normal cursor-pointer"
                            >
                              Over $200
                            </Label>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Rating</h3>
                        <div className="space-y-2">
                          {[4, 3, 2, 1].map((rating) => (
                            <div
                              key={rating}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={`mobile-rating-${rating}`} />
                              <Label
                                htmlFor={`mobile-rating-${rating}`}
                                className="text-sm font-normal cursor-pointer flex items-center"
                              >
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < rating
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                                <span className="ml-1">& Up</span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Clear All Filters
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="مرتب‌سازی بر اساس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">جدیدترین</SelectItem>
                    <SelectItem value="price-low">قیمت: کم به زیاد</SelectItem>
                    <SelectItem value="price-high">قیمت: زیاد به کم</SelectItem>
                    <SelectItem value="rating">بالاترین امتیاز</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Featured New Arrival */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Featured New Arrival"
                width={1200}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center p-8">
                <div className="max-w-xl text-white">
                  <Badge className="mb-4 bg-white text-black hover:bg-white/90">
                    جدید
                  </Badge>
                  <h2 className="text-3xl font-bold mb-2">ساعت هوشمند سری ۶</h2>
                  <p className="text-lg mb-4">
                    با آخرین فناوری‌های سلامتی و تناسب اندام. پیش‌سفارش امروز و
                    ۲۰٪ تخفیف دریافت کنید!
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    پیش‌سفارش
                  </Button>
                </div>
              </div>
            </div>

            {/* New Arrivals Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Badge className="absolute top-2 right-2 z-10 bg-green-500">
                      جدید
                    </Badge>
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                    </Link>
                  </div>
                  <CardContent className="p-4 flex-grow">
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground mr-1">
                        ({product.reviewCount})
                      </span>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="font-medium line-clamp-2 hover:underline"
                    >
                      {product.name}
                    </Link>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-sm text-muted-foreground line-through">
                          $
                          {(
                            product.price /
                            (1 - product.discountPercentage / 100)
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button size="sm" variant="secondary">
                      افزودن به سبد خرید
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <span>...</span>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  10
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
