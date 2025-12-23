"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { BrandValues } from "@/components/home/BrandValues";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <AboutHero />

            
            {/* Story Content */}
            <AboutStory/>

            {/* Values */}
            <BrandValues/>

            <Footer />
        </main>
    );
}
