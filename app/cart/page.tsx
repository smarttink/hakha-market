"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronRight,
  Trash2,
  CreditCard,
  ShoppingBag,
  Minus,
  Plus,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "هدفون بی‌سیم نویز کنسلینگ",
      price: 249.99,
      discountPercentage: 15,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "ساعت هوشمند سری ۵",
      price: 399.99,
      discountPercentage: 10,
      quantity: 2,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "بلندگوی بلوتوث بی‌سیم",
      price: 129.99,
      discountPercentage: 0,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = cartItems.reduce(
    (total, item) =>
      total +
      (item.discountPercentage > 0
        ? (item.price * item.discountPercentage * item.quantity) / 100
        : 0),
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = (subtotal - discount) * 0.1;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          خانه
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">سبد خرید</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">سبد خرید</h1>
              <Button variant="ghost" className="text-muted-foreground">
                <Trash2 className="h-4 w-4 mr-2" />
                پاک کردن همه
              </Button>
            </div>

            <Separator />

            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 py-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <Separator />

            <div className="flex items-center justify-between">
              <Button variant="outline" className="text-muted-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                ادامه خرید
              </Button>
              <Button variant="outline" className="text-muted-foreground">
                <RefreshCw className="h-4 w-4 mr-2" />
                به‌روزرسانی سبد خرید
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <Card>
            <CardHeader>
              <CardTitle>خلاصه سفارش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">جمع کل</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">هزینه ارسال</span>
                  <span>
                    {shipping === 0 ? "رایگان" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">مالیات</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>مجموع</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full">پرداخت</Button>
              <div className="text-center text-sm text-muted-foreground">
                <p>یا</p>
                <Button variant="link" className="text-primary">
                  ورود به حساب کاربری
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
