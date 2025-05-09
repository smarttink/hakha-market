import Link from "next/link";
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  ArrowUpRight,
  Clock,
  AlertCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">داشبورد</h2>
          <p className="text-muted-foreground">
            خوش آمدید، ادمین! اینجا می‌توانید وضعیت فروشگاه خود را امروز مشاهده
            کنید.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Package className="mr-2 h-4 w-4" />
            افزودن محصول
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">درآمد کل</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+20.1%</span> نسبت به
              ماه گذشته
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">سفارش‌ها</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+12.2%</span> نسبت به
              ماه گذشته
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">محصولات</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,324</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+8.4%</span> نسبت به
              ماه گذشته
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">مشتریان</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,834</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500 font-medium">-3.2%</span> نسبت به
              ماه گذشته
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Sales Overview */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>نمای کلی فروش</CardTitle>
            <CardDescription>
              عملکرد فروش شما در ۳۰ روز گذشته در مقایسه با دوره قبل.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[240px] flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-sm text-muted-foreground">
                نمودار فروش در اینجا نمایش داده می‌شود
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>فعالیت‌های اخیر</CardTitle>
            <CardDescription>آخرین به‌روزرسانی‌ها و فعالیت‌ها</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    سفارش جدید #1234
                  </p>
                  <p className="text-xs text-muted-foreground">
                    جان دو هدفون بی‌سیم خریداری کرد
                  </p>
                  <div className="flex items-center pt-1">
                    <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      ۲ دقیقه پیش
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">مشتری جدید</p>
                  <p className="text-xs text-muted-foreground">
                    جین اسمیت یک حساب کاربری ایجاد کرد
                  </p>
                  <div className="flex items-center pt-1">
                    <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      ۱۵ دقیقه پیش
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Package className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    به‌روزرسانی محصول
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ساعت هوشمند سری ۵ اکنون موجود است
                  </p>
                  <div className="flex items-center pt-1">
                    <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      ۱ ساعت پیش
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <AlertCircle className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    هشدار موجودی کم
                  </p>
                  <p className="text-xs text-muted-foreground">
                    شلوار جین فیت اسلیم فقط ۱۲ عدد باقی مانده است
                  </p>
                  <div className="flex items-center pt-1">
                    <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      ۳ ساعت پیش
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/admin/activity">
                مشاهده همه فعالیت‌ها
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Orders */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>سفارش‌های اخیر</CardTitle>
            <CardDescription>آخرین سفارش‌های مشتریان</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((order) => (
                <div key={order} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={`/placeholder.svg?height=36&width=36`}
                        alt="Avatar"
                      />
                      <AvatarFallback>
                        {order % 3 === 0 ? "JD" : order % 3 === 1 ? "AS" : "TK"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        سفارش #{1000 + order}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {order % 3 === 0
                          ? "جان دو"
                          : order % 3 === 1
                          ? "آلیس اسمیت"
                          : "تام کینگ"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        ${(order * 49.99).toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(2024, 4, 13 - order).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge
                      variant={
                        order % 4 === 0
                          ? "outline"
                          : order % 4 === 1
                          ? "secondary"
                          : order % 4 === 2
                          ? "default"
                          : "destructive"
                      }
                    >
                      {order % 4 === 0
                        ? "در حال پردازش"
                        : order % 4 === 1
                        ? "ارسال شده"
                        : order % 4 === 2
                        ? "تحویل داده شده"
                        : "لغو شده"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/admin/orders">
                مشاهده همه سفارش‌ها
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Top Products */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>محصولات پرفروش</CardTitle>
            <CardDescription>
              پرفروش‌ترین محصولات شما در این ماه
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "هدفون بی‌سیم", sales: 245, percentage: 85 },
                { name: "ساعت هوشمند سری ۵", sales: 187, percentage: 65 },
                { name: "تی‌شرت پنبه‌ای پریمیوم", sales: 143, percentage: 50 },
                { name: "شلوار جین فیت اسلیم", sales: 132, percentage: 45 },
                { name: "رمان پرفروش", sales: 98, percentage: 35 },
              ].map((product, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{product.name}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {product.sales} فروخته شده
                      </Badge>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <Progress value={product.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/admin/products">
                مشاهده همه محصولات
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
