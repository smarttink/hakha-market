import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Grid, LayoutGrid, X, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CategoriesPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 pb-20">
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Browse Categories
          </h1>
          <p className="text-muted-foreground mt-1">
            Discover our wide range of products across different categories
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search categories..." className="pl-9 w-full" />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Tabs defaultValue="grid" className="w-[180px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="grid" className="flex items-center gap-1">
                  <Grid className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Grid</span>
                </TabsTrigger>
                <TabsTrigger value="list" className="flex items-center gap-1">
                  <LayoutGrid className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Compact</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Active Filters - optional section */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 gap-1 cursor-pointer"
          >
            Electronics
            <X className="h-3 w-3" />
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 gap-1 cursor-pointer"
          >
            Price: $50-$200
            <X className="h-3 w-3" />
          </Badge>
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1 hover:bg-muted cursor-pointer"
          >
            Clear Filters
          </Badge>
        </div>

        {/* Featured Categories Banner */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Electronics</h2>
              <p className="text-muted-foreground mb-4 max-w-md">
                Discover the latest gadgets, smart devices, and tech
                accessories.
              </p>
              <Button asChild>
                <Link href="/categories/electronics">Browse Electronics</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Clothing</h2>
              <p className="text-muted-foreground mb-4 max-w-md">
                Explore trendy fashion items for all seasons and occasions.
              </p>
              <Button asChild>
                <Link href="/categories/clothing">Browse Clothing</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/categories/${category.slug}`}
              className="block group"
            >
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <Badge variant="outline" className="ml-2">
                      {category.productCount} items
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Popular Collections Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Popular Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {collections.map((collection) => (
              <Card
                key={collection.name}
                className="overflow-hidden bg-muted/40 border-0"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                    <collection.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{collection.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {collection.description}
                    </p>
                    <Link
                      href={collection.link}
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center mt-1"
                    >
                      Browse Collection
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Category Navigation */}
        <div className="mt-8 border-t pt-8">
          <h2 className="text-xl font-bold mb-4">All Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
            {allCategories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-foreground py-1 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample Data with expanded information
const categories = [
  {
    id: 1,
    name: "الکترونیک",
    description: "گوشی‌های هوشمند، لپ‌تاپ‌ها، تبلت‌ها و لوازم جانبی",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 1245,
  },
  {
    id: 2,
    name: "پوشاک",
    description: "لباس‌های مردانه، زنانه و بچه‌گانه، کفش و اکسسوری",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 876,
  },
  {
    id: 3,
    name: "خانه و آشپزخانه",
    description: "لوازم خانگی، دکوراسیون، آشپزخانه و حمام",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 543,
  },
  {
    id: 4,
    name: "زیبایی",
    description: "لوازم آرایشی، بهداشتی، عطر و محصولات مراقبت از پوست",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 432,
  },
  {
    id: 5,
    name: "ورزشی",
    description: "تجهیزات ورزشی، لباس‌های ورزشی و لوازم جانبی",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 321,
  },
  {
    id: 6,
    name: "کتاب‌ها",
    description: "کتاب‌های داستانی، غیرداستانی، آموزشی و مجلات",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 654,
  },
];

// Import icons for collections
import { Zap, Flame, Star } from "lucide-react";

const collections = [
  {
    name: "Summer Essentials",
    description: "Everything you need for the hot season",
    icon: Flame,
    link: "/collections/summer-essentials",
  },
  {
    name: "New Arrivals",
    description: "The latest products in our store",
    icon: Zap,
    link: "/new-arrivals",
  },
  {
    name: "Best Sellers",
    description: "Our most popular products",
    icon: Star,
    link: "/best-sellers",
  },
];

const allCategories = [
  "Electronics",
  "Smartphones",
  "Laptops",
  "Audio",
  "Gaming",
  "Clothing",
  "Men's Wear",
  "Women's Wear",
  "Footwear",
  "Accessories",
  "Home & Kitchen",
  "Furniture",
  "Appliances",
  "Decor",
  "Bedding",
  "Beauty",
  "Skincare",
  "Makeup",
  "Fragrances",
  "Personal Care",
  "Sports",
  "Fitness",
  "Outdoor",
  "Team Sports",
  "Camping",
  "Books",
  "Fiction",
  "Non-Fiction",
  "Academic",
  "Magazines",
  "Toys & Games",
  "Kids",
  "Board Games",
  "Puzzles",
  "Collectibles",
  "Automotive",
  "Car Accessories",
  "Tools",
  "Parts",
  "Maintenance",
];
