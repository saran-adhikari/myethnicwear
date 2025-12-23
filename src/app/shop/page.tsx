"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { ProductCard } from "@/components/products/ProductCard";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid, List as ListIcon, X } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

// Mock data for shop
const allProducts = [
    { id: "1", title: "Royal Silk Saree", price: "$299.00", category: "Sarees", image: "/hero1.png" },
    { id: "2", title: "Terracotta Kurta", price: "$89.00", category: "Men's Wear", image: "/featured3.png" },
    { id: "3", title: "Sage Lehenga", price: "$450.00", category: "Lehengas", image: "/hero3.png" },
    { id: "4", title: "Midnight Sherwani", price: "$599.00", category: "Men's Wear", image: "/hero2.png" },
    { id: "5", title: "Gold Silk Saree", price: "$320.00", category: "Sarees", image: "/featured1.png" },
    { id: "6", title: "Green Lehenga", price: "$480.00", category: "Lehengas", image: "/featured2.png" },
    { id: "7", title: "Classic Kurta", price: "$75.00", category: "Men's Wear", image: "/featured3.png" },
    { id: "8", title: "Bridal Saree", price: "$550.00", category: "Sarees", image: "/hero1.png" },
];

function ShopContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get("search");
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(() => {
        if (query) {
            const filtered = allProducts.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(allProducts);
        }
    }, [query]);

    const clearSearch = () => {
        router.push("/shop");
    };

    return (
        <>
            <div className="pt-24 pb-12 bg-primary/20 mt-16">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                            {query ? `Search Results for "${query}"` : "Our Collections"}
                        </h1>
                        <p className="text-charcoal/60 text-sm max-w-lg mx-auto leading-relaxed">
                            {query
                                ? `Showing ${filteredProducts.length} items for your search.`
                                : "Explore our wide range of traditional ethnic wear, meticulously handcrafted for the modern enthusiast."
                            }
                        </p>
                        {query && (
                            <button
                                onClick={clearSearch}
                                className="mt-4 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-charcoal transition-colors border-b border-accent pb-1"
                            >
                                <X size={14} />
                                <span>Clear Search</span>
                            </button>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <FilterSidebar />

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-border-light space-y-4 sm:space-y-0">
                            <div className="flex items-center space-x-4">
                                <button className="lg:hidden flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-charcoal">
                                    <SlidersHorizontal size={18} />
                                    <span>Filters</span>
                                </button>
                                <p className="text-xs text-charcoal/60 uppercase tracking-widest font-medium">
                                    Showing {filteredProducts.length} results
                                </p>
                            </div>

                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2 border-r border-border-light pr-6">
                                    <button className="p-2 text-charcoal"><Grid size={18} /></button>
                                    <button className="p-2 text-charcoal/30"><ListIcon size={18} /></button>
                                </div>
                                <select className="bg-transparent text-xs font-bold uppercase tracking-widest text-charcoal focus:outline-none cursor-pointer">
                                    <option>Default Sorting</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Latest Arrivals</option>
                                </select>
                            </div>
                        </div>

                        {/* Grid/Empty State */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-24 text-center">
                                <p className="text-lg text-charcoal/50 font-serif">We couldn't find any items matching your search.</p>
                                <button
                                    onClick={clearSearch}
                                    className="mt-6 text-sm font-bold uppercase tracking-widest text-accent border-b border-accent pb-1"
                                >
                                    Browse All Products
                                </button>
                            </div>
                        )}

                        {/* Pagination Placeholder */}
                        {filteredProducts.length > 0 && !query && (
                            <div className="mt-16 flex justify-center space-x-4">
                                <button className="w-10 h-10 border border-charcoal bg-charcoal text-white text-xs font-bold">1</button>
                                <button className="w-10 h-10 border border-border-light text-charcoal text-xs font-bold hover:border-accent hover:text-accent transition-colors">2</button>
                                <button className="w-10 h-10 border border-border-light text-charcoal text-xs font-bold hover:border-accent hover:text-accent transition-colors">3</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <Suspense fallback={
                <div className="h-screen flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
            }>
                <ShopContent />
            </Suspense>
            <Footer />
        </main>
    );
}
