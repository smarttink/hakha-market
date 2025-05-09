"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  const cartItems = [
    {
      id: 1,
      name: "هدفون بی‌سیم نویز کنسلینگ",
      price: 249.99,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "ساعت هوشمند سری ۵",
      price: 399.99,
      quantity: 2,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "بلندگوی بلوتوث بی‌سیم",
      price: 129.99,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

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
        <Link href="/cart" className="hover:text-foreground">
          سبد خرید
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">تکمیل خرید</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">تکمیل خرید</h1>
              <p className="text-muted-foreground">
                لطفاً اطلاعات خود را برای تکمیل سفارش وارد کنید.
              </p>
            </div>

            <Separator />

            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-semibold mb-4">اطلاعات تماس</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تماس</Label>
                  <Input id="phone" type="tel" placeholder="+98 912 345 6789" />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-lg font-semibold mb-4">آدرس ارسال</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">نام</Label>
                  <Input id="firstName" placeholder="نام" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">نام خانوادگی</Label>
                  <Input id="lastName" placeholder="نام خانوادگی" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">آدرس</Label>
                  <Input id="address" placeholder="آدرس کامل" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">شهر</Label>
                  <Input id="city" placeholder="شهر" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">کد پستی</Label>
                  <Input id="postalCode" placeholder="کد پستی" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="country">کشور</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب کشور" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ir">ایران</SelectItem>
                      <SelectItem value="us">آمریکا</SelectItem>
                      <SelectItem value="ca">کانادا</SelectItem>
                      <SelectItem value="uk">انگلستان</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-lg font-semibold mb-4">روش پرداخت</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="font-normal">
                    کارت اعتباری
                  </Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">شماره کارت</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">نام صاحب کارت</Label>
                    <Input id="cardName" placeholder="نام صاحب کارت" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">تاریخ انقضا</Label>
                    <Input id="expiryDate" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">کد امنیتی</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
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
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">جمع کل</span>
                  <span>
                    $
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">هزینه ارسال</span>
                  <span>رایگان</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">مالیات</span>
                  <span>
                    $
                    {(
                      cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      ) * 0.1
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between font-medium">
                <span>مجموع</span>
                <span>
                  $
                  {(
                    cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) +
                    cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) *
                      0.1
                  ).toFixed(2)}
                </span>
              </div>

              <Button className="w-full">پرداخت و ثبت سفارش</Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>با کلیک روی دکمه پرداخت، شما با</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Link href="/terms" className="text-primary hover:underline">
                    شرایط و ضوابط
                  </Link>
                  <span>و</span>
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    سیاست حفظ حریم خصوصی
                  </Link>
                  <span>موافقت می‌کنید</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
