"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-16">
                <Image
                    src="/hero1.png"
                    alt="About Us"
                    fill
                    className="object-cover opacity-30 grayscale"
                />
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
                        className="text-4xl md:text-7xl font-serif font-bold text-charcoal mb-6"
                    >
                        The MyEthnicWear Story
                    </motion.h1>
                </div>
            </section>

            {/* Story Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-serif font-bold text-charcoal">Tradition Reimagined</h2>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Founded in 2024, MyEthnicWear.com was born out of a deep-seated love for the rich textile
                                    heritage of India. We believe that ethnic wear is not just clothing; it's a celebration
                                    of identity, craftsmanship, and timeless elegance.
                                </p>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Our journey began in the small weaver clusters of Varanasi and Kanchipuram, where we
                                    saw the incredible skill of artisans who have been daping heritage for generations.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative aspect-[4/5] overflow-hidden"
                            >
                                <Image
                                    src="/featured1.png"
                                    alt="Craftsmanship"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative aspect-[4/5] overflow-hidden md:order-2"
                            >
                                <Image
                                    src="/featured2.png"
                                    alt="Our Vision"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="space-y-6 md:order-1"
                            >
                                <h2 className="text-3xl font-serif font-bold text-charcoal">Our Commitment</h2>
                                <p className="text-charcoal/70 leading-relaxed">
                                    We are committed to ethical fashion and sustainable practices. By working directly with
                                    artisans, we ensure fair wages and help preserve dying art forms.
                                </p>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Every saree, lehenga, and kurta in our collection is a testament to the artisan's
                                    soul, designed to make you feel regal and connected to your roots.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-primary/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { title: "Authenticity", desc: "100% genuine handcrafted products." },
                            { title: "Artisan Support", desc: "Directly empowering local craftspeople." },
                            { title: "Quality", desc: "Premium fabrics and meticulous detailing." },
                            { title: "Modern Style", desc: "Traditional soul with contemporary silhouettes." },
                        ].map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center space-y-4"
                            >
                                <h3 className="font-serif font-bold text-xl text-charcoal">{value.title}</h3>
                                <p className="text-sm text-charcoal/60 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
