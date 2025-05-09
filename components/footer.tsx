import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">هاکامارکت</h3>
            <p className="text-sm text-muted-foreground">
              مقصد برتر خرید آنلاین برای آخرین ترندها و محصولات.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">فیسبوک</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">توییتر</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">اینستاگرام</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">فروشگاه</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-foreground"
                >
                  همه دسته‌بندی‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-muted-foreground hover:text-foreground"
                >
                  جدیدترین‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="text-muted-foreground hover:text-foreground"
                >
                  پرفروش‌ترین‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/deals"
                  className="text-muted-foreground hover:text-foreground"
                >
                  تخفیف‌ها و پیشنهادها
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">حساب کاربری</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/account"
                  className="text-muted-foreground hover:text-foreground"
                >
                  حساب من
                </Link>
              </li>
              <li>
                <Link
                  href="/account/orders"
                  className="text-muted-foreground hover:text-foreground"
                >
                  تاریخچه سفارش‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/account/wishlist"
                  className="text-muted-foreground hover:text-foreground"
                >
                  لیست علاقه‌مندی‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/account/addresses"
                  className="text-muted-foreground hover:text-foreground"
                >
                  آدرس‌ها
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">خبرنامه</h3>
            <p className="text-sm text-muted-foreground">
              برای دریافت آخرین به‌روزرسانی‌ها و پیشنهادها در خبرنامه ما عضو
              شوید.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="max-w-[220px]"
              />
              <Button>عضویت</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© ۱۴۰۳ هاکامارکت. تمامی حقوق محفوظ است.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-foreground">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              شرایط استفاده
            </Link>
            <Link href="/shipping" className="hover:text-foreground">
              ارسال و مرجوعی
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
