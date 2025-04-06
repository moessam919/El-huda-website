"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define slide data type
interface Slide {
    image: string;
    alt: string;
}

// Slider Component
const HomeSlider: React.FC = () => {
    // Slider images
    const slides: Slide[] = [
        {
            image: "/Rectangle.jpg",
            alt: "Variety of Beans Collection",
        },
        {
            image: "/collection-raw-cereals-beans-seeds.jpg",
            alt: "Premium Legumes Display",
        },
        {
            image: "/Rectangle.jpg",
            alt: "Fresh Legumes Selection",
        },
        {
            image: "/collection-raw-cereals-beans-seeds.jpg",
            alt: "Organic Beans Assortment",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        fill
                        priority
                        className="object-cover brightness-75"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all z-10"
            >
                <ChevronLeft className="text-white" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all z-10"
            >
                <ChevronRight className="text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`
                            w-3 h-3 rounded-full transition-all
                            ${
                                currentSlide === index
                                    ? "bg-[#8AB420] w-6"
                                    : "bg-white/50 hover:bg-white/75"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;
