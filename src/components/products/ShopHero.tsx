"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface ShopHeroProps {
    query: string | null;
    totalResults: number;
    onClearSearch: () => void;
}

export const ShopHero = ({ query, totalResults, onClearSearch }: ShopHeroProps) => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-16">
            <Image
                src="/hero3.jpg"
                alt="Our Collections"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

            <div className="relative z-10 text-center px-4 w-full max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
                >
                    {query ? "Search Results" : "Exclusive Collection"}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
                >
                    {query ? `"${query}"` : "Our Collections"}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        {query
                            ? `Showing ${totalResults} exquisite items found for your search.`
                            : "Discover the essence of tradition blended with contemporary style. Our handcrafted pieces are designed for moments that matter."
                        }
                    </p>

                    {query && (
                        <button
                            onClick={onClearSearch}
                            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors border-b border-accent pb-1"
                        >
                            <X size={14} />
                            <span>Clear Search and View All</span>
                        </button>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
