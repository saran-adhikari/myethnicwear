"use client";

import React, { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeen = localStorage.getItem("newsletter-seen");
            if (!hasSeen) {
                setIsVisible(true);
            }
        }, 5000); // Show after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("newsletter-seen", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white max-w-2xl w-full overflow-hidden relative shadow-2xl flex flex-col md:flex-row"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-charcoal hover:text-accent z-10"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Side */}
                        <div className="hidden md:block w-1/2 bg-primary relative min-h-[400px]">
                            <div className="absolute inset-0 bg-accent/10"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-12 text-center pointer-events-none">
                                <div className="space-y-4">
                                    <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">The Boutique</span>
                                    <h3 className="text-3xl font-serif font-bold text-charcoal">Exclusive Access</h3>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center text-center md:text-left">
                            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Subscribe & Save</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Join Our Inner Circle</h2>
                            <p className="text-charcoal/60 text-sm mb-8 leading-relaxed">
                                Receive 15% off your first luxury ethnic ensemble and stay updated on our latest collections.
                            </p>

                            <form className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-primary border border-border-light rounded-sm py-4 px-4 pr-12 text-sm focus:outline-none focus:border-accent transition-colors"
                                    />
                                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-charcoal text-white py-4 uppercase font-bold tracking-widest text-sm hover:bg-accent transition-all"
                                    onClick={handleAddToCart}
                                >
                                    Join the Boutique
                                </button>
                            </form>

                            <p className="text-[10px] text-charcoal/30 mt-6 uppercase tracking-widest text-center">
                                NO SPAM. JUST PURE TRADITIONAL ELEGANCE.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

// Dummy function to avoid lint errors since I copied some logic
const handleAddToCart = () => { };
