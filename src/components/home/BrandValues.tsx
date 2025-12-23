"use client"

import { Shield, Sparkles, Globe } from 'lucide-react';

export const BrandValues = () => {
    return (
        <section className="relative py-12 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 border-y border-amber-200/30 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Authentic Craft */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-50 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 space-y-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex justify-left">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:rotate-6 group-hover:shadow-xl">
                      <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-gray-900 tracking-tight">
                    Authentic Craft
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Every piece is handcrafted by traditional artisans using age-old techniques passed down through generations.
                  </p>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Secure Shopping */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 space-y-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex justify-left">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:rotate-6 group-hover:shadow-xl">
                      <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-gray-900 tracking-tight">
                    Secure Shopping
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Your data and payments are protected with industry-leading encryption and security protocols.
                  </p>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Global Shipping */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-50 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 space-y-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex justify-left">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:rotate-6 group-hover:shadow-xl ">
                      <Globe className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-gray-900 tracking-tight">
                    Global Shipping
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We deliver our heritage to your doorstep, no matter where you are in the world.
                  </p>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}