"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideItem {
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

interface HeroSliderProps {
  slides: SlideItem[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const slidesLength = slides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesLength - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesLength - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Pause auto sliding when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  // Resume auto sliding after a period of inactivity
  const resumeAutoPlay = () => {
    setIsAutoPlaying(true)
  }

  // Handle auto-sliding
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentSlide])

  // Reset auto-play timer after user inactivity
  useEffect(() => {
    const resumeTimer = setTimeout(() => {
      resumeAutoPlay()
    }, 3000) // Resume after 3 seconds of inactivity

    return () => clearTimeout(resumeTimer)
  }, [currentSlide])

  return (
    <div
      className="relative overflow-hidden rounded-b-lg h-[300px] md:h-[400px] lg:h-[500px]"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 flex items-center">
              <div className="container px-4 md:px-6">
                <div className="max-w-md space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{slide.title}</h1>
                  <p className="text-muted-foreground md:text-lg">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button size="lg" asChild>
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                    {slide.secondaryButtonText && (
                      <Button size="lg" variant="outline" asChild>
                        <Link href={slide.secondaryButtonLink || "#"}>{slide.secondaryButtonText}</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault()
            pauseAutoPlay()
            prevSlide()
          }}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault()
            pauseAutoPlay()
            nextSlide()
          }}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "w-6 bg-primary" : "bg-primary/50"
            }`}
            onClick={() => {
              pauseAutoPlay()
              goToSlide(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
