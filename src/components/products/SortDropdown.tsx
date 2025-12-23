"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SortOption {
    label: string;
    value: string;
}

const options: SortOption[] = [
    { label: "Default", value: "default" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Latest Arrivals", value: "latest" },
];

interface SortDropdownProps {
    onSortChange?: (value: string) => void;
}

export const SortDropdown = ({ onSortChange }: SortDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: SortOption) => {
        setSelected(option);
        setIsOpen(false);
        if (onSortChange) onSortChange(option.value);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-3 px-4 py-2 bg-primary rounded-full border border-border-light hover:border-accent transition-all duration-300 group"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/60">Sort By:</span>
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal">{selected.label}</span>
                <ChevronDown
                    size={14}
                    className={cn("text-charcoal transition-transform duration-300", isOpen && "rotate-180")}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white border border-border-light shadow-xl rounded-xl z-[60] overflow-hidden"
                    >
                        <div className="py-2">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className={cn(
                                        "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-primary",
                                        selected.value === option.value ? "text-accent bg-primary/50" : "text-charcoal"
                                    )}
                                >
                                    <span className="text-xs font-bold uppercase tracking-widest">{option.label}</span>
                                    {selected.value === option.value && <Check size={14} className="text-accent" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
