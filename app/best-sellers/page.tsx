import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Filter, ArrowUpDown, TrendingUp } from "lucide-react";
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

export default function BestSellersPage() {
  // In a real app, you would fetch this data from an API
  const products = [
    {
      id: 1,
      name: "هدفون بی‌سیم نویز کنسلینگ",
      category: "الکترونیک",
      price: 249.99,
      discountPercentage: 15,
      rating: 4.5,
      reviewCount: 128,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 1245,
    },
    {
      id: 2,
      name: "تی‌شرت پنبه‌ای پریمیوم",
      category: "پوشاک",
      price: 29.99,
      discountPercentage: 0,
      rating: 4.2,
      reviewCount: 85,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 987,
    },
    {
      id: 3,
      name: "ساعت هوشمند سری ۵",
      category: "الکترونیک",
      price: 399.99,
      discountPercentage: 10,
      rating: 4.8,
      reviewCount: 210,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 1876,
    },
    {
      id: 4,
      name: "بطری آب استیل ضد زنگ",
      category: "خانه و آشپزخانه",
      price: 24.99,
      discountPercentage: 0,
      rating: 4.1,
      reviewCount: 56,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 756,
    },
    {
      id: 5,
      name: "مرطوب کننده صورت ارگانیک",
      category: "زیبایی",
      price: 34.99,
      discountPercentage: 20,
      rating: 4.6,
      reviewCount: 92,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 654,
    },
    {
      id: 6,
      name: "شلوار جین فیت اسلیم",
      category: "پوشاک",
      price: 59.99,
      discountPercentage: 25,
      rating: 4.3,
      reviewCount: 147,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 1432,
    },
    {
      id: 7,
      name: "چاقوی سرآشپز حرفه‌ای",
      category: "خانه و آشپزخانه",
      price: 79.99,
      discountPercentage: 0,
      rating: 4.9,
      reviewCount: 63,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 543,
    },
    {
      id: 8,
      name: "بلندگوی بلوتوث بی‌سیم",
      category: "الکترونیک",
      price: 129.99,
      discountPercentage: 15,
      rating: 4.4,
      reviewCount: 178,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 876,
    },
    {
      id: 9,
      name: "مت یوگا",
      category: "ورزشی",
      price: 45.99,
      discountPercentage: 10,
      rating: 4.2,
      reviewCount: 82,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 432,
    },
    {
      id: 10,
      name: "رمان پرفروش",
      category: "کتاب‌ها",
      price: 19.99,
      discountPercentage: 5,
      rating: 4.7,
      reviewCount: 215,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 2345,
    },
    {
      id: 11,
      name: "سرم ضد پیری",
      category: "زیبایی",
      price: 89.99,
      discountPercentage: 0,
      rating: 4.5,
      reviewCount: 124,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 765,
    },
    {
      id: 12,
      name: "ست دمبل قابل تنظیم",
      category: "ورزشی",
      price: 299.99,
      discountPercentage: 20,
      rating: 4.8,
      reviewCount: 97,
      image: "/placeholder.svg?height=300&width=300",
      salesCount: 543,
    },
  ];

  // Sort products by sales count (highest first)
  const sortedProducts = [...products].sort(
    (a, b) => b.salesCount - a.salesCount
  );

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          خانه
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">پرفروش‌ترین‌ها</span>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg mb-8">
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-background dark:from-primary/10 dark:via-primary/5 dark:to-background">
          <div className="container px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary">
                  محبوب‌ترین
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                پرفروش‌ترین‌ها
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                محصولات محبوب ما را که مورد علاقه هزاران مشتری است کشف کنید.
                کیفیت و رضایت تضمین شده است.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Best Sellers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">محصولات ترند</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedProducts.slice(0, 3).map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden group h-full flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden">
                <Badge className="absolute top-2 right-2 z-10 bg-amber-500 dark:bg-amber-600">
                  #{index + 1} پرفروش‌ترین
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
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-2 font-medium">
                  {product.salesCount.toLocaleString()} فروخته شده در این ماه
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {product.discountPercentage > 0 ? (
                    <>
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
                    </>
                  ) : (
                    <span className="font-bold">
                      ${product.price.toFixed(2)}
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
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-20 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">فیلترها</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">دسته‌بندی‌ها</h3>
                  <div className="space-y-2">
                    {[
                      "همه دسته‌بندی‌ها",
                      "الکترونیک",
                      "پوشاک",
                      "خانه و آشپزخانه",
                      "زیبایی",
                      "ورزشی",
                      "کتاب‌ها",
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
                  <h3 className="font-medium mb-2">محدوده قیمت</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-under-50" />
                      <Label
                        htmlFor="price-under-50"
                        className="text-sm font-normal cursor-pointer"
                      >
                        زیر ۵۰ دلار
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-50-100" />
                      <Label
                        htmlFor="price-50-100"
                        className="text-sm font-normal cursor-pointer"
                      >
                        ۵۰ تا ۱۰۰ دلار
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-100-200" />
                      <Label
                        htmlFor="price-100-200"
                        className="text-sm font-normal cursor-pointer"
                      >
                        ۱۰۰ تا ۲۰۰ دلار
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-over-200" />
                      <Label
                        htmlFor="price-over-200"
                        className="text-sm font-normal cursor-pointer"
                      >
                        بالای ۲۰۰ دلار
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">امتیاز</h3>
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
                          <span className="ml-1">و بالاتر</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              پاک کردن همه فیلترها
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">همه پرفروش‌ترین‌ها</h2>
                <p className="text-muted-foreground">
                  نمایش {sortedProducts.length} محصول
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="md:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      فیلترها
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[300px] sm:w-[350px] p-0"
                  >
                    <SheetHeader className="p-6 pb-0">
                      <SheetTitle>فیلترها</SheetTitle>
                      <SheetDescription>
                        جستجوی محصول خود را محدود کنید
                      </SheetDescription>
                    </SheetHeader>
                    <div className="p-6 space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">دسته‌بندی‌ها</h3>
                        <div className="space-y-2">
                          {[
                            "همه دسته‌بندی‌ها",
                            "الکترونیک",
                            "پوشاک",
                            "خانه و آشپزخانه",
                            "زیبایی",
                            "ورزشی",
                            "کتاب‌ها",
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
                        <h3 className="font-medium mb-2">محدوده قیمت</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-under-50" />
                            <Label
                              htmlFor="mobile-price-under-50"
                              className="text-sm font-normal cursor-pointer"
                            >
                              زیر ۵۰ دلار
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-50-100" />
                            <Label
                              htmlFor="mobile-price-50-100"
                              className="text-sm font-normal cursor-pointer"
                            >
                              ۵۰ تا ۱۰۰ دلار
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-100-200" />
                            <Label
                              htmlFor="mobile-price-100-200"
                              className="text-sm font-normal cursor-pointer"
                            >
                              ۱۰۰ تا ۲۰۰ دلار
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-price-over-200" />
                            <Label
                              htmlFor="mobile-price-over-200"
                              className="text-sm font-normal cursor-pointer"
                            >
                              بالای ۲۰۰ دلار
                            </Label>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        پاک کردن همه فیلترها
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select defaultValue="popularity">
                  <SelectTrigger className="w-[180px]">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="مرتب‌سازی بر اساس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">محبوب‌ترین</SelectItem>
                    <SelectItem value="price-low">قیمت: کم به زیاد</SelectItem>
                    <SelectItem value="price-high">قیمت: زیاد به کم</SelectItem>
                    <SelectItem value="rating">بالاترین امتیاز</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {sortedProducts.slice(3).map((product, index) => (
                <Card
                  key={product.id}
                  className="overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Badge className="absolute top-2 right-2 z-10 bg-amber-500/80 dark:bg-amber-600/80">
                      پرفروش‌ترین
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
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {product.discountPercentage > 0 ? (
                        <>
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
                        </>
                      ) : (
                        <span className="font-bold">
                          ${product.price.toFixed(2)}
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
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 bg-primary text-primary-foreground"
                >
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
