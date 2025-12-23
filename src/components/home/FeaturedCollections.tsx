import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
    {
        title: "Signature Sarees",
        subtitle: "The Art of Draping",
        image: "/featured1.jpg",
        href: "/category/sarees",
        size: "large",
    },
    {
        title: "Luxe Lehengas",
        subtitle: "Festive Grandeur",
        image: "/featured2.jpg",
        href: "/category/lehengas",
        size: "small",
    },
    {
        title: "Modern Kurtas",
        subtitle: "Daily Craftsmanship",
        image: "/featured03.jpg",
        href: "/category/kurtas",
        size: "small",
    },
    {
        title: "Regal Sherwanis",
        subtitle: "Daily Craftsmanship",
        image: "/featured4.jpg",
        href: "/category/sherwanis",
        size: "large",
    },
];

export const FeaturedCollections = () => {
    return (
        <section className="py-24 bg-primary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4 block"
                    >
                        Curated For You
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-charcoal"
                    >
                        Our Featured Collections
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden bg-white ${collection.size === "large" ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                                } h-[400px] md:h-[500px]`}
                        >
                            <Link href={collection.href} className="block h-full">
                                <Image
                                    src={collection.image}
                                    alt={collection.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <span className="text-sm uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                        {collection.subtitle}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                                        {collection.title}
                                    </h3>
                                    <div className="w-12 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
