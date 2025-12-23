"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { ProductCard } from "@/components/products/ProductCard";
import { motion } from "framer-motion";
import { BestSellers } from "@/components/home/BestSellers";
import { BrandValues } from "@/components/home/BrandValues";



export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Hero />
    
      {/* Featured Collections */}
      <FeaturedCollections />

      {/* Best Sellers */}
      <BestSellers />

      {/* Brand Values / Trust Section */}
      <BrandValues />

      <Footer />
    </main>
  );
}
