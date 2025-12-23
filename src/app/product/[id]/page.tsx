"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Share2, Ruler, ShieldCheck, RefreshCw, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cartStore";
import { SizeGuide } from "@/components/products/SizeGuide";

const product = {
    id: "1",
    title: "Royal Silk Saree with Zari Borders",
    price: "$299.00",
    category: "Sarees",
    description: "Experience the ultimate luxury with our Royal Silk Saree. Meticulously hand-woven by master weavers in Varanasi, this saree features intricate zari borders and a rich pallu that celebrates the heritage of Indian craftsmanship. Perfect for weddings and grand festive occasions.",
    fabric: "100% Pure Mulberry Silk",
    care: "Dry clean only. Store in a cool, dry place wrapped in soft muslin cloth.",
    images: ["/hero1.png", "/featured1.png", "/hero3.png"],
    sizes: ["Standard (One Size)"],
};

const suggestions = [
    { id: "2", title: "Terracotta Kurta", price: "$89.00", category: "Men's Wear", image: "/featured3.png" },
    { id: "3", title: "Sage Lehenga", price: "$450.00", category: "Lehengas", image: "/hero3.png" },
    { id: "4", title: "Midnight Sherwani", price: "$599.00", category: "Men's Wear", image: "/hero2.png" },
];

export default function ProductPage({ params }: { params: { id: string } }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem({
                id: product.id,
                title: product.title,
                price: parseFloat(product.price.replace("$", "")),
                image: product.images[0],
                category: product.category,
            });
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="relative aspect-[3/4] overflow-hidden bg-[#F9F9F9]">
                                <Image
                                    src={product.images[selectedImage]}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {product.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={cn(
                                            "relative aspect-[3/4] overflow-hidden border-2 transition-colors",
                                            selectedImage === idx ? "border-accent" : "border-transparent"
                                        )}
                                    >
                                        <Image src={img} alt={`${product.title} ${idx}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">{product.category}</p>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight">{product.title}</h1>
                                <p className="text-2xl font-bold text-charcoal">{product.price}</p>
                            </div>

                            <div className="mb-8 border-y border-border-light py-8">
                                <p className="text-charcoal/70 leading-relaxed mb-6">{product.description}</p>
                                <div className="space-y-4">
                                    <p className="text-sm"><strong>Fabric:</strong> {product.fabric}</p>
                                    <p className="text-sm"><strong>Care:</strong> {product.care}</p>
                                </div>
                            </div>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal">Select Size</h4>
                                    <button
                                        onClick={() => setIsSizeGuideOpen(true)}
                                        className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-charcoal transition-colors border-b border-accent"
                                    >
                                        <Ruler size={14} />
                                        <span>Size Guide</span>
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {["XS", "S", "M", "L", "XL", "Custom"].map(size => (
                                        <button key={size} className="px-6 py-2 border border-border-light text-xs font-bold hover:border-accent hover:text-accent transition-all">
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal">Quantity</h4>
                                    <div className="flex items-center border border-border-light">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-primary transition-colors">-</button>
                                        <span className="px-6 py-2 text-sm font-bold">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-primary transition-colors">+</button>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        className="flex-1 bg-charcoal text-white py-5 px-8 uppercase font-bold tracking-widest text-sm hover:bg-accent transition-all flex items-center justify-center space-x-3"
                                        onClick={handleAddToCart}
                                    >
                                        <ShoppingBag size={20} />
                                        <span>Add to Bag</span>
                                    </button>
                                    <button className="p-5 border border-border-light hover:border-accent hover:text-accent transition-all">
                                        <Heart size={20} />
                                    </button>
                                    <button className="p-5 border border-border-light hover:border-accent hover:text-accent transition-all">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* USP List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-border-light">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary rounded-full text-accent"><Truck size={20} /></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-charcoal/70">Free Shipping $500+</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary rounded-full text-accent"><RefreshCw size={20} /></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-charcoal/70">7-Day Easy Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Style It With Section */}
            <section className="py-24 bg-primary/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">Complete the Look</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal">Style It With</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {suggestions.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <SizeGuide isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
        </main>
    );
}
