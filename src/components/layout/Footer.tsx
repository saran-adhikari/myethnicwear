import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { ScrollToTop } from "./scroll-to-top";

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-border-light pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Story */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-serif font-bold text-charcoal">
                                MyEthnic<span className="text-accent">Wear</span>
                            </span>
                        </Link>
                        <p className="text-charcoal/70 text-sm leading-relaxed">
                            Celebrating the timeless beauty of ethnic craftsmanship. We bring you a curated collection
                            of traditional wear that blends heritage with contemporary style.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <Link key={idx} href="#" className="p-2 bg-primary rounded-full text-charcoal hover:bg-accent hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-charcoal text-lg mb-6 uppercase tracking-wider">Shopping</h4>
                        <ul className="space-y-4">
                            {["Women's Wear", "Men's Wear", "New Arrivals", "Best Sellers", "Sale"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-sm text-charcoal/70 hover:text-accent transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-serif font-bold text-charcoal text-lg mb-6 uppercase tracking-wider">Support</h4>
                        <ul className="space-y-4">
                            {["Contact Us", "Shipping Info", "Returns & Exchanges", "Size Guide", "FAQs"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-sm text-charcoal/70 hover:text-accent transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="font-serif font-bold text-charcoal text-lg mb-6 uppercase tracking-wider">Stay Connected</h4>
                        <p className="text-sm text-charcoal/70">
                            Subscribe to stay updated on new collections and exclusive offers.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-primary border border-border-light rounded-sm py-3 px-4 pr-12 text-sm focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="absolute right-0 top-0 h-full px-4 text-accent hover:text-charcoal transition-colors">
                                <Mail size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-[12px] text-charcoal/50">
                        © {new Date().getFullYear()} MyEthnicWear.com. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-[12px] text-charcoal/50">
                        <Link href="#" className="hover:text-accent">Privacy Policy</Link>
                        <Link href="#" className="hover:text-accent">Terms of Service</Link>
                        <Link href="#" className="hover:text-accent">Cookie Policy</Link>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </footer>
    );
};
