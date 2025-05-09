import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Filter, ArrowUpDown, Percent } from "lucide-react";
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
import { Progress } from "@/components/ui/progress";

export default function DealsPage() {
  // In a real app, you would fetch this data from an API
  const products = [
    {
      id: 1,
      name: "هدفون بی‌سیم نویز کنسلینگ",
      category: "Electronics",
      price: 249.99,
      discountPercentage: 40,
      rating: 4.5,
      reviewCount: 128,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 65,
    },
    {
      id: 2,
      name: "تی‌شرت پنبه‌ای پریمیوم",
      category: "Clothing",
      price: 29.99,
      discountPercentage: 25,
      rating: 4.2,
      reviewCount: 85,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 42,
    },
    {
      id: 3,
      name: "ساعت هوشمند سری ۵",
      category: "Electronics",
      price: 399.99,
      discountPercentage: 30,
      rating: 4.8,
      reviewCount: 210,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 18,
    },
    {
      id: 4,
      name: "بطری آب استیل ضد زنگ",
      category: "Home & Kitchen",
      price: 24.99,
      discountPercentage: 20,
      rating: 4.1,
      reviewCount: 56,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 87,
    },
    {
      id: 5,
      name: "مرطوب کننده صورت ارگانیک",
      category: "Beauty",
      price: 34.99,
      discountPercentage: 35,
      rating: 4.6,
      reviewCount: 92,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 29,
    },
    {
      id: 6,
      name: "شلوار جین فیت اسلیم",
      category: "Clothing",
      price: 59.99,
      discountPercentage: 50,
      rating: 4.3,
      reviewCount: 147,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 12,
    },
    {
      id: 7,
      name: "کفش ورزشی نایک",
      category: "Home & Kitchen",
      price: 89.99,
      discountPercentage: 30,
      rating: 4.7,
      reviewCount: 203,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 54,
    },
    {
      id: 8,
      name: "کیف لپ‌تاپ چرمی",
      category: "Electronics",
      price: 79.99,
      discountPercentage: 40,
      rating: 4.4,
      reviewCount: 118,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 23,
    },
    {
      id: 9,
      name: "Yoga Mat",
      category: "Sports",
      price: 45.99,
      discountPercentage: 20,
      rating: 4.2,
      reviewCount: 82,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 76,
    },
    {
      id: 10,
      name: "Bestselling Novel",
      category: "Books",
      price: 19.99,
      discountPercentage: 15,
      rating: 4.7,
      reviewCount: 215,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 92,
    },
    {
      id: 11,
      name: "Anti-Aging Serum",
      category: "Beauty",
      price: 89.99,
      discountPercentage: 30,
      rating: 4.5,
      reviewCount: 124,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 38,
    },
    {
      id: 12,
      name: "Adjustable Dumbbell Set",
      category: "Sports",
      price: 299.99,
      discountPercentage: 25,
      rating: 4.8,
      reviewCount: 97,
      image: "/placeholder.svg?height=300&width=300",
      stockRemaining: 8,
    },
  ];

  // Sort products by discount percentage (highest first)
  const sortedProducts = [...products].sort(
    (a, b) => b.discountPercentage - a.discountPercentage
  );

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">Deals & Discounts</span>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg mb-8 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700">
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="h-6 w-6" />
              <span className="text-sm font-medium">Limited Time Offers</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Special Deals & Discounts
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Grab these amazing deals before they're gone! Up to 50% off on
              selected items across all categories.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-white/90"
              >
                Shop All Deals
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Deals */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Flash Deals - Ending Soon!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.slice(0, 4).map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden group h-full flex flex-col border-red-200 dark:border-red-900"
            >
              <div className="relative aspect-square overflow-hidden">
                <Badge className="absolute top-2 right-2 z-10 bg-red-600">
                  {product.discountPercentage}% OFF
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
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.reviewCount})
                  </span>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="font-medium line-clamp-2 hover:underline"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.category}
                </p>
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">
                      Stock remaining
                    </span>
                    <span className="text-xs font-medium">
                      {product.stockRemaining} left
                    </span>
                  </div>
                  <Progress
                    value={product.stockRemaining}
                    max={100}
                    className="h-1"
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold">
                    $
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
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
                  <h3 className="font-medium mb-2">Discount</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount-50" />
                      <Label
                        htmlFor="discount-50"
                        className="text-sm font-normal cursor-pointer"
                      >
                        50% or more
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount-40" />
                      <Label
                        htmlFor="discount-40"
                        className="text-sm font-normal cursor-pointer"
                      >
                        40% or more
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount-30" />
                      <Label
                        htmlFor="discount-30"
                        className="text-sm font-normal cursor-pointer"
                      >
                        30% or more
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount-20" />
                      <Label
                        htmlFor="discount-20"
                        className="text-sm font-normal cursor-pointer"
                      >
                        20% or more
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount-10" />
                      <Label
                        htmlFor="discount-10"
                        className="text-sm font-normal cursor-pointer"
                      >
                        10% or more
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

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
                <h1 className="text-2xl font-bold">تخفیف‌های ویژه</h1>
                <p className="text-muted-foreground">
                  پیشنهادهای باورنکردنی با تخفیف‌های شگفت‌انگیز
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="مرتب‌سازی بر اساس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">پیشنهادی</SelectItem>
                    <SelectItem value="newest">جدیدترین</SelectItem>
                    <SelectItem value="price-low">قیمت: کم به زیاد</SelectItem>
                    <SelectItem value="price-high">قیمت: زیاد به کم</SelectItem>
                    <SelectItem value="discount">بیشترین تخفیف</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Featured Deal */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Featured Deal"
                width={1200}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center p-8">
                <div className="max-w-xl text-white">
                  <Badge className="mb-4 bg-white text-black hover:bg-white/90">
                    تخفیف ۵۰٪
                  </Badge>
                  <h2 className="text-3xl font-bold mb-2">
                    تخفیف‌های پایان فصل
                  </h2>
                  <p className="text-lg mb-4">
                    تا ۵۰٪ تخفیف برای تمام محصولات منتخب. این پیشنهاد محدود است!
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    خرید کنید
                  </Button>
                </div>
              </div>
            </div>

            {/* Deal Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "الکترونیک",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "پوشاک",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "خانه و آشپزخانه",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "زیبایی",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((category) => (
                <Link
                  key={category.name}
                  href={`/categories/${category.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="group relative rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Badge className="absolute top-2 right-2 z-10 bg-red-500">
                      -{product.discountPercentage}%
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
                      <span className="text-sm text-muted-foreground line-through">
                        $
                        {(
                          product.price /
                          (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                      </span>
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
