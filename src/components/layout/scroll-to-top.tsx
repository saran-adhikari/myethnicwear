"use client"

import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <div className={`fixed bottom-6 right-3 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-accent border-secondary/40 text-white p-3 rounded-full shadow-lg hover:bg-secondary hover:border-secondary transition-colors duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Back to top"
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </div>
    )
}