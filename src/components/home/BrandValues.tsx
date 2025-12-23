"use client"

export const BrandValues = () => {
    return (
        <> 
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

      </>
    );
}
