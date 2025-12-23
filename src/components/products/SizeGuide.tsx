"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SizeGuideProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SizeGuide = ({ isOpen, onClose }: SizeGuideProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white max-w-2xl w-full p-8 md:p-12 relative shadow-2xl overflow-y-auto max-h-[90vh]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-charcoal hover:text-accent"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">Size Guide</h2>

                        <div className="space-y-12">
                            {/* Women's Wear */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6 border-b border-border-light pb-2">Women's Ethnic Wear</h3>
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-border-light">
                                            <th className="py-4 font-bold">Size</th>
                                            <th className="py-4 font-bold">Bust (in)</th>
                                            <th className="py-4 font-bold">Waist (in)</th>
                                            <th className="py-4 font-bold">Hip (in)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light/50">
                                        {["XS", "S", "M", "L", "XL"].map((size, idx) => (
                                            <tr key={size} className="hover:bg-primary/30 transition-colors">
                                                <td className="py-4 font-bold">{size}</td>
                                                <td className="py-4">{32 + idx * 2}</td>
                                                <td className="py-4">{26 + idx * 2}</td>
                                                <td className="py-4">{36 + idx * 2}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Men's Wear */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6 border-b border-border-light pb-2">Men's Kurtas & Sherwanis</h3>
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-border-light">
                                            <th className="py-4 font-bold">Size</th>
                                            <th className="py-4 font-bold">Chest (in)</th>
                                            <th className="py-4 font-bold">Shoulder (in)</th>
                                            <th className="py-4 font-bold">Length (in)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light/50">
                                        {["38", "40", "42", "44", "46"].map((size) => (
                                            <tr key={size} className="hover:bg-primary/30 transition-colors">
                                                <td className="py-4 font-bold">{size}</td>
                                                <td className="py-4">{size}</td>
                                                <td className="py-4">{17 + (parseInt(size) - 38) / 2}</td>
                                                <td className="py-4">{42}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-primary/20 text-[11px] text-charcoal/60 uppercase tracking-widest leading-relaxed">
                            <p>Note: These are standard body measurements. Actual garment measurements may vary slightly depending on the style and fabric.</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
