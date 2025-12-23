"use client"

export const AboutStory = () => {
    return (
        
        <section className="relative py-24 bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                <span className="inline-block text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
                    Our Story
                </span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                    Where Heritage Meets Heart
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                {/* Content Grid 1 */}
                <div className="max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                    <div className="inline-block">
                        <h3 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                        Tradition Reimagined
                        </h3>
                        <div className="w-20 h-1 bg-accent"></div>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p className="relative pl-6 border-l-4 border-accent">
                        Founded in 2024, MyEthnicWear.com was born out of a deep-seated love for the rich textile
                        heritage of India. We believe that ethnic wear is not just clothing; it's a celebration
                        of identity, craftsmanship, and timeless elegance.
                        </p>
                        <p>
                        Our journey began in the small weaver clusters of Varanasi and Kanchipuram, where we
                        saw the incredible skill of artisans who have been shaping heritage for generations.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-6 pt-8">
                        <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-1">2025</div>
                        <div className="text-sm text-gray-600">Founded</div>
                        </div>
                        <div className="text-center border-x border-gray-200">
                        <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                        <div className="text-sm text-gray-600">Artisans</div>
                        </div>
                        <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-1">5000+</div>
                        <div className="text-sm text-gray-600">Happy Customers</div>
                        </div>
                    </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 to-rose-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                        <div className="relative aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/featured1.jpg"
                            alt="Traditional craftsmanship"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <p className="text-sm font-medium tracking-wide">Handcrafted Excellence</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Content Grid 2 */}
                <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="order-1">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-rose-400 to-amber-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                        <div className="relative aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/featured2.jpg"
                            alt="Our commitment to artisans"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <p className="text-sm font-medium tracking-wide">Sustainable Fashion</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8 order-2">
                    <div className="inline-block">
                        <h3 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                        Our Commitment
                        </h3>
                        <div className="w-20 h-1 bg-accent"></div>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p className="relative pl-6 border-l-4 border-accent">
                        We are committed to ethical fashion and sustainable practices. By working directly with
                        artisans, we ensure fair wages and help preserve dying art forms.
                        </p>
                        <p>
                        Every saree, lehenga, and kurta in our collection is a testament to the artisan's
                        soul, designed to make you feel regal and connected to your roots.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="space-y-8 pt-4">
                        <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors ">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Ethical Sourcing</h4>
                            <p className="text-gray-600 text-sm">Direct partnerships with artisan communities</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Heritage Preservation</h4>
                            <p className="text-gray-600 text-sm">Keeping traditional crafts alive for future generations</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                            <p className="text-gray-600 text-sm">Every piece inspected for perfection</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}