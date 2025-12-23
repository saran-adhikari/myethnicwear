"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store/cartStore";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-border-light flex items-center justify-between">
                            <h2 className="text-xl font-serif font-bold text-charcoal flex items-center space-x-2">
                                <ShoppingBag size={20} className="text-accent" />
                                <span>Your Shopping Bag</span>
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-primary transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-primary/50 rounded-full flex items-center justify-center text-accent">
                                        <ShoppingBag size={32} />
                                    </div>
                                    <p className="text-charcoal/50 text-sm">Your bag is empty.</p>
                                    <button
                                        onClick={onClose}
                                        className="text-xs font-bold uppercase tracking-widest text-accent border-b border-accent pb-1"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex space-x-4">
                                        <div className="relative w-24 h-32 flex-shrink-0 bg-primary">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex justify-between">
                                                <h4 className="text-sm font-bold text-charcoal leading-tight">{item.title}</h4>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-charcoal/30 hover:text-secondary transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <p className="text-xs text-charcoal/50">{item.category}</p>
                                            <div className="flex items-center justify-between pt-2">
                                                <div className="flex items-center border border-border-light">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-3 py-1 text-xs hover:bg-primary"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-3 py-1 text-xs font-bold border-x border-border-light">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-3 py-1 text-xs hover:bg-primary"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p className="text-sm font-bold text-charcoal">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-border-light bg-primary/20 space-y-4">
                                <div className="flex justify-between items-center text-lg font-bold text-charcoal">
                                    <span>Subtotal</span>
                                    <span>${totalPrice().toFixed(2)}</span>
                                </div>
                                <p className="text-[10px] text-charcoal/50 uppercase tracking-widest text-center">
                                    Shipping and taxes calculated at checkout
                                </p>
                                <button className="w-full bg-charcoal text-white py-4 uppercase font-bold tracking-widest text-sm hover:bg-accent transition-all">
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
