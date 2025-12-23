"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Search as SearchIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const suggestions = [
    "Silk Sarees",
    "Handcrafted Kurtas",
    "Bridal Lehengas",
    "Men's Sherwanis",
    "New Arrivals",
    "Floral Prints",
];

export const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
            onClose();
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        router.push(`/shop?search=${encodeURIComponent(suggestion)}`);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[110] bg-white flex flex-col"
                >
                    {/* Header */}
                    <div className="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between border-b border-border-light">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl font-serif font-bold text-charcoal tracking-tight">
                                Search <span className="text-accent">Collection</span>
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-primary transition-colors text-charcoal flex items-center space-x-2 group"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-primary/5">
                        <div className="w-full max-w-4xl space-y-12">
                            <form onSubmit={handleSubmit} className="relative group">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="What are you looking for?"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full bg-transparent border-b-2 border-charcoal/10 focus:border-accent py-6 px-4 text-3xl md:text-5xl font-serif text-charcoal placeholder:text-charcoal/20 outline-none transition-all"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 hover:text-accent transition-colors"
                                >
                                    <SearchIcon size={32} />
                                </button>
                            </form>

                            {/* Suggestions */}
                            <div className="space-y-6">
                                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40 text-center">Popular Searches</h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {suggestions.map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            onClick={() => handleSuggestionClick(suggestion)}
                                            className="px-6 py-2 bg-white border border-border-light rounded-full text-sm text-charcoal hover:border-accent hover:text-accent transition-all shadow-sm"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-8 bg-white border-t border-border-light">
                        <p className="text-[10px] text-charcoal/30 uppercase tracking-[0.4em] text-center">
                            Search the finest ethnic wear ensembles
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
