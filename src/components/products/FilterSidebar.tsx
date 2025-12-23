import React from "react";
import { ChevronDown } from "lucide-react";

const filters = [
    {
        name: "Category",
        options: ["Sarees", "Lehengas", "Kurtas", "Sherwanis", "Accessories"],
    },
    {
        name: "Size",
        options: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
    },
    {
        name: "Fabric",
        options: ["Silk", "Cotton", "Linen", "Velvet", "Georgette", "Chiffon"],
    },
    {
        name: "Occasion",
        options: ["Wedding", "Festive", "Casual", "Party", "Formal"],
    },
];

export const FilterSidebar = () => {
    return (
        <aside className="hidden lg:block w-64 space-y-8">
            <div>
                <h3 className="font-serif font-bold text-xl text-charcoal mb-6">Filters</h3>
                <div className="space-y-8">
                    {filters.map((filter) => (
                        <div key={filter.name} className="border-b border-border-light pb-6">
                            <button className="flex items-center justify-between w-full text-left mb-4 group">
                                <span className="text-sm font-bold uppercase tracking-widest text-charcoal group-hover:text-accent transition-colors">
                                    {filter.name}
                                </span>
                                <ChevronDown size={16} className="text-charcoal/50" />
                            </button>
                            <div className="space-y-3">
                                {filter.options.map((option) => (
                                    <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 border-border-light rounded-sm accent-accent"
                                        />
                                        <span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                                            {option}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Price Range Placeholder */}
                    <div className="pb-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-4">Price Range</h4>
                        <div className="space-y-4">
                            <input type="range" className="w-full accent-accent" min="0" max="1000" />
                            <div className="flex justify-between text-xs text-charcoal/50">
                                <span>$0</span>
                                <span>$1000+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
