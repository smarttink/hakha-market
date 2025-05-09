import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const slug = params.slug;

  // In a real app, you would fetch this data from an API
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          خانه
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/categories" className="hover:text-foreground">
          دسته‌بندی‌ها
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">{category.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-20 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">فیلترها</h2>
              <Accordion
                type="multiple"
                defaultValue={["price", "brand", "color"]}
                className="w-full"
              >
                <AccordionItem value="price">
                  <AccordionTrigger>محدوده قیمت</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="min-price">حداقل</Label>
                        <Label htmlFor="max-price">حداکثر</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          id="min-price"
                          type="number"
                          placeholder="0"
                          className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                        <span>-</span>
                        <input
                          id="max-price"
                          type="number"
                          placeholder="1000"
                          className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        اعمال
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="brand">
                  <AccordionTrigger>برند</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["برند الف", "برند ب", "برند ج", "برند د"].map(
                        (brand) => (
                          <div
                            key={brand}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={`brand-${brand}`} />
                            <Label
                              htmlFor={`brand-${brand}`}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {brand}
                            </Label>
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="color">
                  <AccordionTrigger>رنگ</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        "مشکی",
                        "سفید",
                        "قرمز",
                        "آبی",
                        "سبز",
                        "زرد",
                        "بنفش",
                        "خاکستری",
                      ].map((color) => (
                        <div
                          key={color}
                          className="flex flex-col items-center gap-1"
                        >
                          <div
                            className={`h-8 w-8 rounded-full cursor-pointer border hover:scale-110 transition-transform ${
                              color === "مشکی"
                                ? "bg-black"
                                : color === "سفید"
                                ? "bg-white"
                                : `bg-${color}-500`
                            }`}
                          />
                          <span className="text-xs capitalize">{color}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rating">
                  <AccordionTrigger>امتیاز</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div
                          key={rating}
                          className="flex items-center space-x-2"
                        >
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                <h1 className="text-2xl font-bold">{category.name}</h1>
                <p className="text-muted-foreground">
                  {category.productCount} محصول
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="md:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      فیلترها
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[300px] sm:w-[350px] p-0"
                  >
                    <div className="p-6 space-y-6">
                      <h2 className="text-lg font-semibold">فیلترها</h2>
                      <Accordion
                        type="multiple"
                        defaultValue={["price", "brand", "color"]}
                        className="w-full"
                      >
                        <AccordionItem value="price">
                          <AccordionTrigger>محدوده قیمت</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="min-price-mobile">حداقل</Label>
                                <Label htmlFor="max-price-mobile">حداکثر</Label>
                              </div>
                              <div className="flex items-center gap-2">
                                <input
                                  id="min-price-mobile"
                                  type="number"
                                  placeholder="0"
                                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                                <span>-</span>
                                <input
                                  id="max-price-mobile"
                                  type="number"
                                  placeholder="1000"
                                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                              </div>
                              <Button size="sm" className="w-full mt-2">
                                اعمال
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="brand">
                          <AccordionTrigger>برند</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {["برند الف", "برند ب", "برند ج", "برند د"].map(
                                (brand) => (
                                  <div
                                    key={brand}
                                    className="flex items-center space-x-2"
                                  >
                                    <Checkbox id={`brand-mobile-${brand}`} />
                                    <Label
                                      htmlFor={`brand-mobile-${brand}`}
                                      className="text-sm font-normal cursor-pointer"
                                    >
                                      {brand}
                                    </Label>
                                  </div>
                                )
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="color">
                          <AccordionTrigger>رنگ</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-4 gap-2">
                              {[
                                "مشکی",
                                "سفید",
                                "قرمز",
                                "آبی",
                                "سبز",
                                "زرد",
                                "بنفش",
                                "خاکستری",
                              ].map((color) => (
                                <div
                                  key={color}
                                  className="flex flex-col items-center gap-1"
                                >
                                  <div
                                    className={`h-8 w-8 rounded-full cursor-pointer border hover:scale-110 transition-transform ${
                                      color === "مشکی"
                                        ? "bg-black"
                                        : color === "سفید"
                                        ? "bg-white"
                                        : `bg-${color}-500`
                                    }`}
                                  />
                                  <span className="text-xs capitalize">
                                    {color}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Button variant="outline" className="w-full">
                        پاک کردن همه فیلترها
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="مرتب‌سازی بر اساس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">پیشنهادی</SelectItem>
                    <SelectItem value="newest">جدیدترین</SelectItem>
                    <SelectItem value="price-low">قیمت: کم به زیاد</SelectItem>
                    <SelectItem value="price-high">قیمت: زیاد به کم</SelectItem>
                    <SelectItem value="rating">بالاترین امتیاز</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full px-3 py-1">
                قیمت: ۵۰ تا ۲۰۰ دلار
                <button className="ml-1 hover:text-destructive">×</button>
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1">
                رنگ: مشکی
                <button className="ml-1 hover:text-destructive">×</button>
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1">
                برند: برند الف
                <button className="ml-1 hover:text-destructive">×</button>
              </Badge>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products
                .filter((p) => p.category === category.name)
                .map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden group h-full flex flex-col"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      {product.discountPercentage > 0 && (
                        <Badge className="absolute top-2 right-2 z-10 bg-red-500">
                          -{product.discountPercentage}%
                        </Badge>
                      )}
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

// Sample Data
const categories = [
  {
    name: "الکترونیک",
    slug: "electronics",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 124,
  },
  {
    name: "پوشاک",
    slug: "clothing",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 253,
  },
  {
    name: "خانه و آشپزخانه",
    slug: "home-kitchen",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 187,
  },
  {
    name: "زیبایی",
    slug: "beauty",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 98,
  },
  {
    name: "ورزشی",
    slug: "sports",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 76,
  },
  {
    name: "کتاب‌ها",
    slug: "books",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 215,
  },
];

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
  },
];
