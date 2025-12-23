"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store/cartStore";
import { useWishlistStore } from "@/lib/store/wishlistStore";
import { CartDrawer } from "./CartDrawer";
import { WishlistDrawer } from "./WishlistDrawer";

const navItems = [
    { name: "Women's Wear", href: "/category/women" },
    { name: "Men's Wear", href: "/category/men" },
    { name: "Occasion", href: "/occasion" },
    { name: "Collections", href: "/collections" },
    { name: "Sale", href: "/sale", highlight: true },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    const totalCartItems = useCartStore((state) => state.totalItems());
    const totalWishlistItems = useWishlistStore((state) => state.totalItems());

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md shadow-soft py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <button
                            className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-charcoal" : "text-white")}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <span className={cn("text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors", isScrolled ? "text-charcoal" : "text-white")}>
                                MyEthnic<span className="text-accent">Wear</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium tracking-wide transition-colors hover:text-accent uppercase",
                                        item.highlight ? "text-accent" : (isScrolled ? "text-charcoal" : "text-white")
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Action Icons */}
                        <div className="flex items-center space-x-4 md:space-x-6">
                            <button className={cn("p-2 hover:text-accent cursor-pointer transition-colors hidden sm:block", isScrolled ? "text-charcoal" : "text-white")}>
                                <Search size={20} />
                            </button>
                            <button className={cn("p-2 hover:text-accent cursor-pointer transition-colors", isScrolled ? "text-charcoal" : "text-white")}>
                                <User size={20} />
                            </button>
                            <button
                                className={cn("p-2 hover:text-accent cursor-pointer transition-colors relative", isScrolled ? "text-charcoal" : "text-white")}
                                onClick={() => setIsWishlistOpen(true)}
                            >
                                <Heart size={20} className={cn(totalWishlistItems > 0 && "fill-secondary text-secondary")} />
                                {totalWishlistItems > 0 && (
                                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-secondary text-[10px] text-white rounded-full">
                                        {totalWishlistItems}
                                    </span>
                                )}
                            </button>
                            <button
                                className={cn("p-2 hover:text-accent cursor-pointer transition-colors relative", isScrolled ? "text-charcoal" : "text-white")}
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingCart size={20} />
                                {totalCartItems > 0 && (
                                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-accent text-[10px] text-white rounded-full">
                                        {totalCartItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="fixed inset-0 top-[60px] bg-white z-40 md:hidden flex flex-col p-6 space-y-6"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium tracking-wide uppercase",
                                        item.highlight ? "text-accent" : "text-charcoal"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-border-light flex flex-col space-y-4">
                                <button
                                    onClick={() => { setIsMobileMenuOpen(false); setIsWishlistOpen(true); }}
                                    className="flex items-center space-x-3 text-charcoal hover:text-accent transition-colors"
                                >
                                    <Heart size={20} />
                                    <span>Wishlist</span>
                                </button>
                                <Link href="/profile" className="flex items-center space-x-3 text-charcoal hover:text-accent transition-colors">
                                    <User size={20} />
                                    <span>My Account</span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
        </>
    );
};
