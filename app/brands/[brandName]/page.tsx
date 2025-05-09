"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Award,
  Globe,
  Users,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Filter,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Checkbox,
  CheckboxDescription,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function BrandPage() {
  const params = useParams();
  const brandName =
    typeof params.brandName === "string" ? params.brandName : "";
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching brand data
    const fetchBrand = () => {
      setLoading(true);
      // Find the brand in our mock data
      const foundBrand = brands.find((b) => b.slug === brandName);

      if (foundBrand) {
        // Get products for this brand
        const brandProducts = products.filter(
          (p) => p.brand?.toLowerCase() === foundBrand.name.toLowerCase()
        );
        foundBrand.products = brandProducts;
        setBrand(foundBrand);
      }

      setLoading(false);
    };

    fetchBrand();
  }, [brandName]);

  if (loading) {
    return (
      <div className="container py-20 flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-32 w-32 bg-muted rounded-full"></div>
          <div className="h-8 w-64 bg-muted rounded"></div>
          <div className="h-4 w-96 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!brand) {
    return (
      <div className="container py-20 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Brand Not Found</h1>
        <p className="text-muted-foreground">
          We couldn't find the brand you're looking for.
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="gap-1">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Brand Header */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="relative h-40 w-40 md:h-48 md:w-48 bg-muted/30 rounded-xl p-4 flex items-center justify-center">
          <Image
            src={brand.logo || "/placeholder.svg"}
            alt={brand.name}
            fill
            className="object-contain p-4"
          />
          {brand.verified && (
            <Badge className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Verified Brand
            </Badge>
          )}
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{brand.name}</h1>
          <p className="text-muted-foreground mb-4 max-w-2xl">
            {brand.description}
          </p>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm">{brand.established}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">{brand.headquarters}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm">{brand.website}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm">{brand.employees}+ employees</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6 justify-center md:justify-start">
            <Button>Shop All Products</Button>
            <Button variant="outline">Follow Brand</Button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center md:justify-start gap-4 mb-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-muted/30 hover:bg-muted"
        >
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-muted/30 hover:bg-muted"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-muted/30 hover:bg-muted"
        >
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-muted/30 hover:bg-muted"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </div>

      <Separator className="my-8" />

      {/* Brand Content Tabs */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="mb-8 justify-start">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Products by {brand.name}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Sort
              </Button>
            </div>
          </div>

          {brand.products && brand.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brand.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available from this brand at the moment.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="about">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About {brand.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {brand.longDescription ||
                  `${brand.name} is a leading brand known for its commitment to quality and innovation. 
                Founded in ${brand.established}, the company has grown to become one of the most recognized names in its industry.
                With headquarters in ${brand.headquarters}, ${brand.name} continues to push boundaries and set new standards.`}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                {brand.mission ||
                  `To provide exceptional products that enhance people's lives while maintaining the highest standards of quality, innovation, and sustainability.`}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Brand Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(
                  brand.values || [
                    "Quality",
                    "Innovation",
                    "Sustainability",
                    "Customer Focus",
                  ]
                ).map((value, index) => (
                  <Card key={index} className="bg-muted/30">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">{value}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="collections">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(
                brand.collections || [
                  {
                    name: "Summer 2024",
                    image: "/placeholder.svg?height=300&width=400",
                    productCount: 12,
                  },
                  {
                    name: "Essentials",
                    image: "/placeholder.svg?height=300&width=400",
                    productCount: 8,
                  },
                  {
                    name: "Premium Line",
                    image: "/placeholder.svg?height=300&width=400",
                    productCount: 5,
                  },
                ]
              ).map((collection, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {collection.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {collection.productCount} products
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <Button>Write a Review</Button>
            </div>

            <div className="flex flex-col gap-6">
              {(
                brand.reviews || [
                  {
                    name: "Sarah Johnson",
                    rating: 5,
                    date: "May 2, 2024",
                    comment:
                      "Absolutely love this brand! Their products are consistently high quality and their customer service is exceptional.",
                  },
                  {
                    name: "Michael Chen",
                    rating: 4,
                    date: "April 15, 2024",
                    comment:
                      "Great products overall. Shipping was a bit slow but the quality makes up for it.",
                  },
                  {
                    name: "Emma Williams",
                    rating: 5,
                    date: "March 28, 2024",
                    comment:
                      "I've been a loyal customer for years and have never been disappointed. Highly recommend!",
                  },
                ]
              ).map((review, index) => (
                <div key={index} className="border rounded-lg p-6 bg-muted/10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
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
      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <div>
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
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <span className="font-bold">${product.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" variant="secondary">
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample Data
const brands = [
  {
    name: "Apple",
    slug: "apple",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Innovation and design excellence in technology products",
    longDescription:
      "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services. The company is known for its hardware products such as the iPhone, iPad, Mac, Apple Watch, and Apple TV, as well as software like macOS, iOS, iPadOS, watchOS, and tvOS.",
    established: "1976",
    headquarters: "Cupertino, California",
    website: "apple.com",
    employees: "147,000",
    verified: true,
    featured: true,
    mission:
      "To bring the best user experience to customers through innovative hardware, software, and services.",
    values: ["Innovation", "Quality", "Simplicity", "Privacy"],
    collections: [
      {
        name: "iPhone Series",
        image: "/placeholder.svg?height=300&width=400",
        productCount: 6,
      },
      {
        name: "Mac Collection",
        image: "/placeholder.svg?height=300&width=400",
        productCount: 8,
      },
      {
        name: "Wearables",
        image: "/placeholder.svg?height=300&width=400",
        productCount: 5,
      },
    ],
  },
  {
    name: "Samsung",
    slug: "samsung",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Leading technology solutions and innovation",
    established: "1938",
    headquarters: "Seoul, South Korea",
    website: "samsung.com",
    employees: "267,000",
    verified: true,
    featured: true,
  },
  {
    name: "Nike",
    slug: "nike",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Performance sportswear and athletic innovation",
    established: "1964",
    headquarters: "Beaverton, Oregon",
    website: "nike.com",
    employees: "73,000",
    verified: true,
    featured: true,
  },
  {
    name: "Adidas",
    slug: "adidas",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Athletic and casual wear with heritage design",
    established: "1949",
    headquarters: "Herzogenaurach, Germany",
    website: "adidas.com",
    employees: "62,000",
    verified: true,
    featured: false,
  },
  {
    name: "Sony",
    slug: "sony",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Entertainment and electronics innovation",
    established: "1946",
    headquarters: "Tokyo, Japan",
    website: "sony.com",
    employees: "109,000",
    verified: true,
    featured: true,
  },
  {
    name: "LG",
    slug: "lg",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Home appliances and electronics solutions",
    established: "1947",
    headquarters: "Seoul, South Korea",
    website: "lg.com",
    employees: "75,000",
    verified: true,
    featured: false,
  },
  {
    name: "Philips",
    slug: "philips",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Health technology and electronics innovation",
    established: "1891",
    headquarters: "Amsterdam, Netherlands",
    website: "philips.com",
    employees: "80,000",
    verified: true,
    featured: false,
  },
  {
    name: "Zara",
    slug: "zara",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Fast fashion and contemporary design",
    established: "1975",
    headquarters: "Arteixo, Spain",
    website: "zara.com",
    employees: "162,000",
    verified: true,
    featured: true,
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
    name: "ساعت هوشمند سری ۵",
    category: "الکترونیک",
    price: 399.99,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 210,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "بلندگوی بلوتوث بی‌سیم",
    category: "الکترونیک",
    price: 129.99,
    discountPercentage: 15,
    rating: 4.4,
    reviewCount: 178,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "لپ‌تاپ اولترابوک",
    category: "الکترونیک",
    price: 1299.99,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 89,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "دوربین دیجیتال حرفه‌ای",
    category: "الکترونیک",
    price: 899.99,
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 156,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "کیبورد مکانیکی گیمینگ",
    category: "الکترونیک",
    price: 149.99,
    discountPercentage: 0,
    rating: 4.6,
    reviewCount: 92,
    image: "/placeholder.svg?height=300&width=300",
  },
];
