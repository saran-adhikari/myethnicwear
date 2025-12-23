import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistItem {
    id: string;
    title: string;
    price: number;
    image: string;
    category: string;
}

interface WishlistStore {
    items: WishlistItem[];
    addItem: (product: any) => void;
    removeItem: (id: string) => void;
    clearWishlist: () => void;
    totalItems: () => number;
    isInWishlist: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const currentItems = get().items;
                if (!currentItems.find((item) => item.id === product.id)) {
                    set({ items: [...currentItems, product] });
                }
            },
            removeItem: (id) => {
                set({ items: get().items.filter((item) => item.id !== id) });
            },
            clearWishlist: () => set({ items: [] }),
            totalItems: () => get().items.length,
            isInWishlist: (id) => get().items.some((item) => item.id === id),
        }),
        {
            name: "my-ethnic-wear-wishlist",
        }
    )
);
