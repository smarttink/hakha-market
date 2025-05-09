"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Star, Award, ThumbsUp, CheckCircle } from "lucide-react";
import { HeroSlider } from "@/components/hero-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  // Slider data
  const sliderItems = [
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "مجموعه تابستانی ۱۴۰۳",
      description: "جدیدترین ترندها و استایل‌های فصل تابستان را کشف کنید.",
      buttonText: "خرید کنید",
      buttonLink: "/categories",
      secondaryButtonText: "جدیدترین‌ها",
      secondaryButtonLink: "/new-arrivals",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "تخفیف‌های ویژه",
      description: "تا ۵۰٪ تخفیف برای محصولات منتخب. پیشنهاد محدود.",
      buttonText: "مشاهده تخفیف‌ها",
      buttonLink: "/deals",
      secondaryButtonText: "کاوش",
      secondaryButtonLink: "/categories",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "جدیدترین محصولات تکنولوژی",
      description: "جدیدترین الکترونیک و گجت‌ها را برای سبک زندگی خود ببینید.",
      buttonText: "خرید الکترونیک",
      buttonLink: "/categories/electronics",
      secondaryButtonText: "بیشتر بدانید",
      secondaryButtonLink: "/categories",
    },
  ];

  // Most famous products - products with highest ratings
  const mostFamousProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  // Suggested products - could be based on user behavior, here we're just showing a mix
  const suggestedProducts = [
    products[2], // Smart Watch
    products[7], // Bluetooth Speaker
    products[4], // Face Moisturizer
    products[9], // Bestselling Novel
    products[11], // Dumbbell Set
    products[1], // T-Shirt
  ];

  // Top brands data
  const topBrands = [
    {
      name: "اپل",
      slug: "apple",
      logo: "/placeholder.svg?height=100&width=100",
      description: "برتری در نوآوری و طراحی",
      featured: true,
    },
    {
      name: "سامسونگ",
      slug: "samsung",
      logo: "/placeholder.svg?height=100&width=100",
      description: "راهکارهای پیشرو در تکنولوژی",
      featured: true,
    },
    {
      name: "نایک",
      slug: "nike",
      logo: "/placeholder.svg?height=100&width=100",
      description: "پوشاک ورزشی با عملکرد بالا",
      featured: true,
    },
    {
      name: "آدیداس",
      slug: "adidas",
      logo: "/placeholder.svg?height=100&width=100",
      description: "پوشاک ورزشی و روزمره",
      featured: false,
    },
    {
      name: "سونی",
      slug: "sony",
      logo: "/placeholder.svg?height=100&width=100",
      description: "سرگرمی و الکترونیک",
      featured: true,
    },
    {
      name: "ال‌جی",
      slug: "lg",
      logo: "/placeholder.svg?height=100&width=100",
      description: "لوازم خانگی و الکترونیک",
      featured: false,
    },
    {
      name: "فیلیپس",
      slug: "philips",
      logo: "/placeholder.svg?height=100&width=100",
      description: "تکنولوژی سلامت و الکترونیک",
      featured: false,
    },
    {
      name: "زارا",
      slug: "zara",
      logo: "/placeholder.svg?height=100&width=100",
      description: "مد سریع و اکسسوری",
      featured: true,
    },
  ];

  const styles = `
  .product-swiper {
    padding-bottom: 40px;
  }
  .product-swiper .swiper-button-next,
  .product-swiper .swiper-button-prev {
    color: hsl(var(--primary));
    background: hsl(var(--background));
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .product-swiper .swiper-button-next:after,
  .product-swiper .swiper-button-prev:after {
    font-size: 18px;
  }
  .product-swiper .swiper-pagination-bullet-active {
    background: hsl(var(--primary));
  }
  
  .famous-product-card {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    height: 100%;
  }
  
  .famous-product-card .badge-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .famous-product-card .content-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(to top, hsl(var(--background)) 0%, hsla(var(--background), 0.8) 50%, transparent 100%);
  }
  
  .suggestion-section {
    background-color: hsl(var(--muted));
    border-radius: 1rem;
    padding: 2rem 0;
    margin: 0 1rem;
  }
  
  .brand-card {
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
  }
  
  .brand-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .brand-card .brand-logo {
    transition: transform 0.5s ease;
  }
  
  .brand-card:hover .brand-logo {
    transform: scale(1.1);
  }
  
  .featured-brand {
    border-color: hsl(var(--primary));
  }
  
  .brand-card .brand-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(to top, hsl(var(--background)) 0%, hsla(var(--background), 0.9) 50%, transparent 100%);
    transform: translateY(30%);
    transition: transform 0.3s ease;
  }
  
  .brand-card:hover .brand-overlay {
    transform: translateY(0);
  }
  
  .recommendation-card {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    transition: all 0.3s ease;
  }
  
  .recommendation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .recommendation-card .recommendation-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
  }
  
  .recommendation-card .recommendation-content {
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .suggestion-section {
      margin: 0 2rem;
    }
  }
`;

  return (
    <>
      <div className="flex flex-col gap-10 pb-20">
        {/* Hero Section with Swiper Slider */}
        <section className="w-full">
          <HeroSlider slides={sliderItems} />
        </section>

        {/* Most Famous Products Section */}
        <section className="container px-4 md:px-6 py-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                پرفروش‌ترین محصولات
              </h2>
            </div>
            <Link
              href="/best-sellers"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              مشاهده همه
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mostFamousProducts.map((product) => (
              <div key={product.id} className="famous-product-card group">
                <div className="badge-container">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 bg-primary text-primary-foreground"
                  >
                    <Star className="h-3 w-3 fill-current" /> {product.rating}
                  </Badge>
                  {product.discountPercentage > 0 && (
                    <Badge variant="destructive">
                      -{product.discountPercentage}%
                    </Badge>
                  )}
                </div>

                <Link href={`/products/${product.id}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="content-overlay">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {product.discountPercentage > 0 ? (
                          <>
                            <span className="text-xl font-bold">
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
                          <span className="text-xl font-bold">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Best Market Brands Section - Improved UI */}
        <section className="container px-4 md:px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                برترین برندهای بازار
              </h2>
            </div>
            <Link
              href="/brands"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              مشاهده همه برندها
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {topBrands.map((brand) => (
              <Link
                key={brand.name}
                href={`/brands/${brand.slug}`}
                className="block"
              >
                <div
                  className={`brand-card h-full ${
                    brand.featured ? "border-2 featured-brand" : "border"
                  }`}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-full h-full flex items-center justify-center brand-logo">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={brand.name}
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="brand-overlay">
                      <h3 className="font-bold text-lg mb-1">{brand.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {brand.description}
                      </p>
                      {brand.featured && (
                        <Badge
                          variant="outline"
                          className="mt-3 bg-primary/10 text-primary border-primary"
                        >
                          Featured Brand
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="container px-4 md:px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              دسته‌بندی‌های ویژه
            </h2>
            <Link
              href="/categories"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              مشاهده همه
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <h3 className="font-medium text-foreground">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* New Arrivals, Trending, Best Deals Tabs */}
        <section className="container px-4 md:px-6 py-6">
          <Tabs defaultValue="new" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="new">جدیدترین‌ها</TabsTrigger>
                <TabsTrigger value="trending">ترندها</TabsTrigger>
                <TabsTrigger value="deals">بهترین تخفیف‌ها</TabsTrigger>
              </TabsList>
              <Link
                href="/products"
                className="hidden sm:flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                مشاهده همه
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <TabsContent value="new" className="space-y-4">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="product-swiper py-4"
              >
                {products.slice(0, 8).map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/products">مشاهده همه محصولات</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="trending" className="space-y-4">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="product-swiper py-4"
              >
                {products.slice(4, 12).map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/products">مشاهده همه محصولات</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="deals" className="space-y-4">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="product-swiper py-4"
              >
                {products
                  .filter((p) => p.discountPercentage > 0)
                  .slice(0, 8)
                  .map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="flex justify-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/products">مشاهده همه محصولات</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Recommended For You Section - Improved UI */}
        <section className="suggestion-section my-10">
          <div className="container px-4 md:px-6 py-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">
                  پیشنهاد شده برای شما
                </h2>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="product-swiper py-4"
            >
              {suggestedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="recommendation-card border-2 border-primary/10 hover:border-primary/30 transition-colors h-full">
                    <div className="relative aspect-square overflow-hidden">
                      <Badge className="recommendation-badge bg-primary text-primary-foreground">
                        پیشنهاد شده
                      </Badge>
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="recommendation-content">
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

                      <div className="mt-4 flex items-center justify-between">
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
                        <Button size="sm">افزودن به سبد خرید</Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Banner Section */}
        <section className="container px-4 md:px-6 py-6">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Promotional Banner"
              width={1200}
              height={400}
              className="w-full object-cover h-[200px] md:h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 flex items-center">
              <div className="p-6 md:p-10 max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  حراج تابستانی
                </h2>
                <p className="text-muted-foreground mb-4">
                  تا ۵۰٪ تخفیف برای محصولات منتخب. پیشنهاد محدود.
                </p>
                <Button asChild>
                  <Link href="/deals">خرید کنید</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx global>
        {styles}
      </style>
    </>
  );
}

// Product Card Component
function ProductCard({ product }: any) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <Badge
          className={`absolute top-2 right-2 z-10 ${
            product.discountPercentage > 0 ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {product.discountPercentage > 0
            ? `-${product.discountPercentage}%`
            : "جدید"}
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
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
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
          افزودن به سبد خرید
        </Button>
      </CardFooter>
    </Card>
  );
}

// Sample Data
const categories = [
  {
    name: "الکترونیک",
    slug: "electronics",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "پوشاک",
    slug: "clothing",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "خانه و آشپزخانه",
    slug: "home-kitchen",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "زیبایی",
    slug: "beauty",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "ورزشی",
    slug: "sports",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "کتاب‌ها",
    slug: "books",
    image: "/placeholder.svg?height=200&width=200",
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
  {
    id: 7,
    name: "چاقوی سرآشپز حرفه‌ای",
    category: "خانه و آشپزخانه",
    price: 79.99,
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 63,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "اسپیکر بلوتوث بی‌سیم",
    category: "الکترونیک",
    price: 129.99,
    discountPercentage: 15,
    rating: 4.4,
    reviewCount: 178,
    image: "/placeholder.svg?height=300&width=300",
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
  },
];
