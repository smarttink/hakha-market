"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Upload, Trash2, Plus, Save, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function NewProductPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [imagePreview, setImagePreview] = useState("")
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "0",
    stock: "",
    images: [],
    featured: false,
    newArrival: true,
    tags: "",
    sku: "",
    weight: "",
    dimensions: "",
    variants: [{ name: "", options: "" }],
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: "",
    },
  })

  const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Books",
    "Toys & Games",
    "Automotive",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setProductData({
        ...productData,
        [parent]: {
          ...productData[parent],
          [child]: value,
        },
      })
    } else {
      setProductData({
        ...productData,
        [name]: value,
      })
    }
  }

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...productData.variants]
    updatedVariants[index] = {
      ...updatedVariants[index],
      [field]: value,
    }
    setProductData({
      ...productData,
      variants: updatedVariants,
    })
  }

  const addVariant = () => {
    setProductData({
      ...productData,
      variants: [...productData.variants, { name: "", options: "" }],
    })
  }

  const removeVariant = (index) => {
    const updatedVariants = [...productData.variants]
    updatedVariants.splice(index, 1)
    setProductData({
      ...productData,
      variants: updatedVariants,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, you would send this data to an API
      // await fetch('/api/products', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(productData)
      // })

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSuccess(true)
      setTimeout(() => {
        router.push("/admin/products")
      }, 2000)
    } catch (error) {
      console.error("Error adding product:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="flex items-center justify-center p-6 min-h-[70vh]">
        <Card className="w-full max-w-md p-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold">Product Added Successfully!</h2>
            <p className="text-muted-foreground">Your product has been added to the inventory.</p>
            <div className="flex gap-2 mt-4">
              <Button asChild>
                <Link href="/admin/products">View All Products</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/products/new">Add Another Product</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/products">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h2 className="text-2xl font-bold tracking-tight">Add New Product</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/products">Cancel</Link>
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Product
              </>
            )}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="w-full justify-start mb-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="variants">Variants</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Product Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={productData.name}
                      onChange={handleChange}
                      placeholder="Enter product name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Description <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={productData.description}
                      onChange={handleChange}
                      placeholder="Enter product description"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">
                        Category <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={productData.category}
                        onValueChange={(value) => setProductData({ ...productData, category: value })}
                        required
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input
                        id="tags"
                        name="tags"
                        value={productData.tags}
                        onChange={handleChange}
                        placeholder="casual, summer, etc."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">
                        Price ($) <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={productData.price}
                        onChange={handleChange}
                        placeholder="0.00"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="discountPercentage">Discount (%)</Label>
                      <Input
                        id="discountPercentage"
                        name="discountPercentage"
                        type="number"
                        min="0"
                        max="100"
                        value={productData.discountPercentage}
                        onChange={handleChange}
                        placeholder="0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stock">
                        Stock <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="stock"
                        name="stock"
                        type="number"
                        min="0"
                        value={productData.stock}
                        onChange={handleChange}
                        placeholder="0"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="featured"
                        checked={productData.featured}
                        onCheckedChange={(checked) => setProductData({ ...productData, featured: checked })}
                      />
                      <Label htmlFor="featured">Featured Product</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="newArrival"
                        checked={productData.newArrival}
                        onCheckedChange={(checked) => setProductData({ ...productData, newArrival: checked })}
                      />
                      <Label htmlFor="newArrival">New Arrival</Label>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input
                      id="sku"
                      name="sku"
                      value={productData.sku}
                      onChange={handleChange}
                      placeholder="Enter SKU"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        name="weight"
                        value={productData.weight}
                        onChange={handleChange}
                        placeholder="Enter weight"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dimensions">Dimensions (cm)</Label>
                      <Input
                        id="dimensions"
                        name="dimensions"
                        value={productData.dimensions}
                        onChange={handleChange}
                        placeholder="L x W x H"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="variants" className="space-y-4">
                <div className="grid gap-4">
                  {productData.variants.map((variant, index) => (
                    <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-4 items-start">
                      <div className="space-y-2">
                        <Label htmlFor={`variant-name-${index}`}>Variant Name</Label>
                        <Input
                          id={`variant-name-${index}`}
                          value={variant.name}
                          onChange={(e) => handleVariantChange(index, "name", e.target.value)}
                          placeholder="Color, Size, etc."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`variant-options-${index}`}>Options</Label>
                        <Input
                          id={`variant-options-${index}`}
                          value={variant.options}
                          onChange={(e) => handleVariantChange(index, "options", e.target.value)}
                          placeholder="Red,Blue,Green"
                        />
                      </div>

                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="mt-8"
                        onClick={() => removeVariant(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  ))}

                  <Button type="button" variant="outline" className="w-full" onClick={addVariant}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Variant
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="seo" className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      name="seo.metaTitle"
                      value={productData.seo.metaTitle}
                      onChange={handleChange}
                      placeholder="Enter meta title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      name="seo.metaDescription"
                      value={productData.seo.metaDescription}
                      onChange={handleChange}
                      placeholder="Enter meta description"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords">Keywords</Label>
                    <Input
                      id="keywords"
                      name="seo.keywords"
                      value={productData.seo.keywords}
                      onChange={handleChange}
                      placeholder="keyword1, keyword2, etc."
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Product Image</h3>

                  {imagePreview ? (
                    <div className="relative group">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Product preview"
                        className="w-full aspect-square rounded-md object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                        <Button type="button" variant="destructive" size="icon" onClick={() => setImagePreview("")}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove Image</span>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-md cursor-pointer bg-muted/40 hover:bg-muted/60 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">PNG, JPG or WebP (MAX. 2MB)</p>
                      </div>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Product Status</h3>

                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Ready to publish</span>
                  </div>

                  <Alert>
                    <AlertDescription>
                      Required fields are marked with <span className="text-destructive">*</span>
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
