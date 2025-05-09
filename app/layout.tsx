import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileNavbar } from "@/components/mobile-navbar"
import localFont from "next/font/local";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ModernShop - Your Premium E-commerce Destination",
  description: "Discover the latest trends and products at ModernShop",
    generator: 'v0.dev'
}
const yekan = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-ExtraBlack.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${yekan.className}`} dir="rtl">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileNavbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
