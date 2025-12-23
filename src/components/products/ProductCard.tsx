"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store/cartStore";
import { useWishlistStore } from "@/lib/store/wishlistStore";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    id: string;
    title: string;
    price: string;
    category: string;
    image: string;
}

export const ProductCard = ({ id, title, price, category, image }: ProductCardProps) => {
    const addItemToCart = useCartStore((state) => state.addItem);
    const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();

    const isWishlisted = isInWishlist(id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addItemToCart({
            id,
            title,
            price: parseFloat(price.replace("$", "")),
            image,
            category,
        });
    };

    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isWishlisted) {
            removeFromWishlist(id);
        } else {
            addToWishlist({
                id,
                title,
                price: parseFloat(price.replace("$", "")),
                image,
                category,
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#F9F9F9] mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-center space-x-2">
                    <button
                        className={cn(
                            "p-3 transition-all shadow-soft group/btn",
                            isWishlisted ? "bg-secondary text-white" : "bg-white text-charcoal hover:bg-accent hover:text-white"
                        )}
                        onClick={handleWishlist}
                    >
                        <Heart size={18} className={cn(isWishlisted && "fill-current")} />
                    </button>
                    <button
                        className="bg-accent px-6 py-3 text-white flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase hover:bg-charcoal transition-all shadow-soft"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart size={16} />
                        <span>Add to Cart</span>
                    </button>
                    <button className="bg-white p-3 text-charcoal hover:bg-accent hover:text-white transition-all shadow-soft">
                        <Eye size={18} />
                    </button>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-charcoal shadow-sm">
                        New Arrival
                    </span>
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-charcoal/50 font-medium">
                    {category}
                </p>
                <Link href={`/product/${id}`} className="block">
                    <h4 className="text-sm font-medium text-charcoal hover:text-accent transition-colors">
                        {title}
                    </h4>
                </Link>
                <p className="text-sm font-bold text-accent">{price}</p>
            </div>
        </motion.div>
    );
};
