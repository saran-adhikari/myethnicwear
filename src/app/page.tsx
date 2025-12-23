"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { ProductCard } from "@/components/products/ProductCard";
import { motion } from "framer-motion";

const bestSellers = [
  {
    id: "1",
    title: "Royal Silk Saree",
    price: "$299.00",
    category: "Sarees",
    image: "/hero1.png",
  },
  {
    id: "2",
    title: "Terracotta Linen Kurta",
    price: "$89.00",
    category: "Men's Wear",
    image: "/featured3.png",
  },
  {
    id: "3",
    title: "Sage Floral Lehenga",
    price: "$450.00",
    category: "Lehengas",
    image: "/hero3.png",
  },
  {
    id: "4",
    title: "Midnight Sherwani",
    price: "$599.00",
    category: "Men's Wear",
    image: "/hero2.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Featured Collections */}
      <FeaturedCollections />

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

      {/* Brand Values / Trust Section */}
      <section className="py-20 bg-primary/20 border-y border-border-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-xl text-charcoal">Authentic Craft</h4>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Every piece is handcrafted by traditional artisans using age-old techniques.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-xl text-charcoal">Secure Shopping</h4>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Your data and payments are protected with industry-leading encryption.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-xl text-charcoal">Global Shipping</h4>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                We deliver our heritage to your doorstep, no matter where you are in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
