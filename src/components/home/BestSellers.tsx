"use client"
import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";

const bestSellers = [
  {
    id: "1",
    title: "Royal Silk Saree",
    price: "$299.00",
    category: "Sarees",
    image: "/bestseller1.jpg",
  },
  {
    id: "2",
    title: "Terracotta Linen Kurta",
    price: "$89.00",
    category: "Men's Wear",
    image: "/bestseller2.jpg",
  },
  {
    id: "3",
    title: "Sage Floral Lehenga",
    price: "$450.00",
    category: "Lehengas",
    image: "/bestseller3.jpg",
  },
  {
    id: "4",
    title: "Midnight Sherwani",
    price: "$599.00",
    category: "Men's Wear",
    image: "/bestseller4.jpg",
  },
];

export const BestSellers = () => {
    return (
        <>
        
        
       {/* Best Sellers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-2 block"
              >
                Trending Now
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-serif font-bold text-charcoal"
              >
                Our Best Sellers
              </motion.h2>
            </div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold uppercase tracking-widest text-charcoal hover:text-accent transition-colors border-b border-charcoal hover:border-accent pb-1"
            >
              View All Products
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      </>
    );
}

