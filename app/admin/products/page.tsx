"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Package, Search, Plus, Filter, MoreHorizontal, Edit, Trash2, ArrowUpDown, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function AdminProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Noise Cancelling Headphones",
      category: "Electronics",
      price: 249.99,
      discountPercentage: 15,
      stock: 65,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      category: "Clothing",
      price: 29.99,
      discountPercentage: 0,
      stock: 142,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Smart Watch Series 5",
      category: "Electronics",
      price: 399.99,
      discountPercentage: 10,
      stock: 18,
      status: "Low Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      category: "Home & Kitchen",
      price: 24.99,
      discountPercentage: 0,
      stock: 87,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Organic Face Moisturizer",
      category: "Beauty",
      price: 34.99,
      discountPercentage: 20,
      stock: 29,
      status: "Low Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Slim Fit Jeans",
      category: "Clothing",
      price: 59.99,
      discountPercentage: 25,
      stock: 0,
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Professional Chef Knife",
      category: "Home & Kitchen",
      price: 79.99,
      discountPercentage: 0,
      stock: 54,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Wireless Bluetooth Speaker",
      category: "Electronics",
      price: 129.99,
      discountPercentage: 15,
      stock: 23,
      status: "Low Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 9,
      name: "Yoga Mat",
      category: "Sports",
      price: 45.99,
      discountPercentage: 10,
      stock: 76,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 10,
      name: "Bestselling Novel",
      category: "Books",
      price: 19.99,
      discountPercentage: 5,
      stock: 92,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const toggleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(products.map((product) => product.id))
    }
  }

  const toggleSelectProduct = (productId: number) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId))
    } else {
      setSelectedProducts([...selectedProducts, productId])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">Manage your product inventory, prices, and stock levels.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/admin/products/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-full pl-8" />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>Narrow down products by applying filters</SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="space-y-2">
                    {["Electronics", "Clothing", "Home & Kitchen", "Beauty", "Sports", "Books"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`} className="text-sm font-normal">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Status</h3>
                  <div className="space-y-2">
                    {["In Stock", "Low Stock", "Out of Stock"].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <Checkbox id={`status-${status}`} />
                        <Label htmlFor={`status-${status}`} className="text-sm font-normal">
                          {status}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label htmlFor="min-price" className="text-sm font-normal">
                        Min
                      </Label>
                      <Input id="min-price" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="max-price" className="text-sm font-normal">
                        Max
                      </Label>
                      <Input id="max-price" type="number" placeholder="1000" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Button>Apply Filters</Button>
                  <Button variant="outline">Reset Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="home">Home & Kitchen</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="books">Books</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedProducts.length > 0 && (
        <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-md">
          <p className="text-sm">{selectedProducts.length} products selected</p>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedProducts.length === products.length && products.length > 0}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Product
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Price
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Stock
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => toggleSelectProduct(product.id)}
                  />
                </TableCell>
                <TableCell>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>${product.price.toFixed(2)}</span>
                    {product.discountPercentage > 0 && (
                      <span className="text-xs text-green-600">-{product.discountPercentage}%</span>
                    )}
                  </div>
                </TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      product.status === "In Stock"
                        ? "outline"
                        : product.status === "Low Stock"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Package className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>1</strong> to <strong>10</strong> of <strong>100</strong> products
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            Next
            <ChevronDown className="h-4 w-4 rotate-270" />
          </Button>
        </div>
      </div>
    </div>
  )
}
