"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export const AboutHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-16">
                <Image
                    src="/hero2.jpg"
                    alt="About Us"
                    fill
                    className="object-cover "
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
                <div className="relative z-10 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
                    >
                        Our Heritage
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        The MyEthnicWear Story
                    </motion.h1>
                </div>
            </section>
    )
}