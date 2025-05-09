"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  ChevronRight,
  Check,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id);
  const { toast } = useToast();

  // In a real app, you would fetch this data from an API
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  const originalPrice = product.price / (1 - product.discountPercentage / 100);

  // State for product options
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("m");
  const [quantity, setQuantity] = useState(1);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    rating: 5,
    title: "",
    review: "",
  });

  // Handle quantity changes
  const decreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  // Handle add to cart
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast({
      title: "Added to cart",
      description: "The product has been added to your cart.",
    });
  };

  // Handle add to wishlist
  const handleAddToWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast({
      title: "Added to wishlist",
      description: "The product has been added to your wishlist.",
    });
  };

  // Handle review form changes
  const handleReviewFormChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({
      ...reviewForm,
      [name]: value,
    });
  };

  // Handle review submission
  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !reviewForm.name ||
      !reviewForm.email ||
      !reviewForm.title ||
      !reviewForm.review
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would submit this to an API
    console.log("Review submitted:", reviewForm);

    toast({
      title: "Review submitted",
      description:
        "Thank you for your feedback! Your review will be published after moderation.",
    });

    // Reset form and close dialog
    setReviewForm({
      name: "",
      email: "",
      rating: 5,
      title: "",
      review: "",
    });
    setReviewDialogOpen(false);
  };

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
        <Link
          href={`/categories/${product.category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="hover:text-foreground"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=200&index=${i}`}
                  alt={`${product.name} - Image ${i}`}
                  fill
                  className="object-cover cursor-pointer hover:opacity-75 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount} نظر)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                  <Badge className="text-sm">
                    -{product.discountPercentage}%
                  </Badge>
                </>
              )}
            </div>
            {product.stockRemaining > 0 ? (
              <Badge
                variant="outline"
                className="text-green-500 border-green-500"
              >
                موجود در انبار
              </Badge>
            ) : (
              <Badge variant="outline" className="text-red-500 border-red-500">
                ناموجود
              </Badge>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="quantity">تعداد:</Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="color">رنگ:</Label>
                <Select defaultValue="black">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="انتخاب رنگ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="black">مشکی</SelectItem>
                    <SelectItem value="white">سفید</SelectItem>
                    <SelectItem value="red">قرمز</SelectItem>
                    <SelectItem value="blue">آبی</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                افزودن به سبد خرید
              </Button>
              <Button size="lg" variant="outline" onClick={handleAddToWishlist}>
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">مشخصات محصول</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">ویژگی‌های اصلی</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• طراحی مدرن و زیبا</li>
                  <li>• کیفیت ساخت عالی</li>
                  <li>• دوام و ماندگاری بالا</li>
                  <li>• گارانتی ۲ ساله</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">مشخصات فنی</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ابعاد: ۱۰ × ۵ × ۲ سانتی‌متر</li>
                  <li>• وزن: ۵۰۰ گرم</li>
                  <li>• جنس: فلز و پلاستیک</li>
                  <li>• رنگ‌بندی: متنوع</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">محصولات مرتبط</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
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
                  <span className="font-bold">${product.price.toFixed(2)}</span>
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
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="reviews">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="related"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Related Products
            </TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Customer Reviews</h3>
                <Button onClick={() => setReviewDialogOpen(true)}>
                  Write a Review
                </Button>
              </div>
              <div className="grid gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Customer Name</h4>
                        <div className="flex items-center">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star
                                key={j}
                                className={`h-4 w-4 ${
                                  j < 4
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-xs text-muted-foreground">
                            2 weeks ago
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Report
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam
                      nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                    <Separator />
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="related" className="pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {products.slice(0, 4).map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden">
                  <Link href={`/products/${relatedProduct.id}`}>
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Link
                      href={`/products/${relatedProduct.id}`}
                      className="font-medium line-clamp-1 hover:underline"
                    >
                      {relatedProduct.name}
                    </Link>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < relatedProduct.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Review Dialog */}
      <Dialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
            <DialogDescription>
              Share your thoughts about {product.name} with other customers.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={reviewForm.name}
                  onChange={handleReviewFormChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={reviewForm.email}
                  onChange={handleReviewFormChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Rating *</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <Button
                    key={rating}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="p-0 h-8 w-8"
                    onClick={() => setReviewForm({ ...reviewForm, rating })}
                  >
                    <Star
                      className={`h-6 w-6 ${
                        rating <= reviewForm.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Review Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="Summarize your review"
                value={reviewForm.title}
                onChange={handleReviewFormChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="review">Your Review *</Label>
              <Textarea
                id="review"
                name="review"
                rows={4}
                placeholder="What did you like or dislike about this product?"
                value={reviewForm.review}
                onChange={handleReviewFormChange}
                required
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setReviewDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Submit Review</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Sample Data
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
    description:
      "هدفون بی‌سیم با قابلیت حذف نویز فعال، کیفیت صدای استثنایی و راحتی بی‌نظیر برای استفاده طولانی مدت. با باتری با دوام و قابلیت شارژ سریع.",
    stockRemaining: 15,
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
    description:
      "تی‌شرت پنبه‌ای با کیفیت بالا، نرم و راحت. مناسب برای استفاده روزانه و مناسبت‌های مختلف. در رنگ‌های متنوع و سایزهای مختلف.",
    stockRemaining: 50,
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
    description:
      "ساعت هوشمند با قابلیت‌های پیشرفته سلامتی و تناسب اندام، نمایشگر همیشه روشن و باتری با دوام. مناسب برای ورزشکاران و افراد فعال.",
    stockRemaining: 8,
  },
];

const relatedProducts = [
  {
    id: 4,
    name: "هدفون بی‌سیم ورزشی",
    category: "الکترونیک",
    price: 199.99,
    discountPercentage: 20,
    rating: 4.6,
    reviewCount: 92,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "اسپیکر بلوتوث قابل حمل",
    category: "الکترونیک",
    price: 79.99,
    discountPercentage: 0,
    rating: 4.4,
    reviewCount: 156,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "شارژر بی‌سیم سریع",
    category: "الکترونیک",
    price: 49.99,
    discountPercentage: 15,
    rating: 4.3,
    reviewCount: 78,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "کیف محافظ هدفون",
    category: "الکترونیک",
    price: 24.99,
    discountPercentage: 0,
    rating: 4.1,
    reviewCount: 45,
    image: "/placeholder.svg?height=300&width=300",
  },
];
