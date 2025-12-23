"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
    {
        image: "/saree-collection.jpg",
        subtitle: "New Collection 2024",
        title: "Timeless Elegance in Every Thread",
        description: "Discover our handcrafted sarees that celebrate centuries of tradition with a modern touch.",
        cta: "Shop Sarees",
    },
    {
        image: "/groom.jpg",
        subtitle: "Groom's Special",
        title: "Regal Sherwanis for Your Big Day",
        description: "Make a statement with our premium sherwani collection, tailored for royalty.",
        cta: "Explore Men's Wear",
    },
    {
        image: "/lehenga.jpg",
        subtitle: "Festive Favorites",
        title: "Contemporary Soul, Traditional Heart",
        description: "Elegant lehengas and ethnic ensembles for the modern woman who values her roots.",
        cta: "Discover More",
    },
];

export const Hero = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="relative h-[100vh] overflow-hidden">
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover object-center"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-black/40 md:bg-black/40"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-start">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="max-w-2xl text-white drop-shadow-lg"
                                >
                                    <span className="text-accent uppercase tracking-[0.3em] font-medium text-sm mb-4 block">
                                        {slide.subtitle}
                                    </span>
                                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-lg">
                                        {slide.description}
                                    </p>
                                    <button className="bg-accent hover:bg-white hover:text-charcoal text-white px-8 py-4 transition-all duration-300 font-medium tracking-wide uppercase text-sm">
                                        {slide.cta}
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex space-x-4">
                <button
                    onClick={scrollPrev}
                    className="p-3 border border-white/50 text-white hover:bg-white hover:text-charcoal transition-all duration-300"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollNext}
                    className="p-3 border border-white/50 text-white hover:bg-white hover:text-charcoal transition-all duration-300"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-8 hidden md:block">
                <div className="flex items-center space-x-3 text-white/70 text-[10px] tracking-[0.2em] uppercase">
                    <span>01</span>
                    <div className="w-20 h-[1px] bg-white/30 relative">
                        <div className="absolute left-0 top-0 h-full bg-accent w-1/3"></div>
                    </div>
                    <span>03</span>
                </div>
            </div>
        </section>
    );
};
