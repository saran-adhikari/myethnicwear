import type { Metadata } from "next";
import { inter, playfair } from "./fonts";
import "./globals.css";
import { NewsletterPopup } from "@/components/ui/NewsletterPopup";

export const metadata: Metadata = {
  title: "MyEthnicWear.com - Traditional Fashion, Modern Elegance",
  description: "Sophisticated online ethnic wear boutique celebrating traditional fashion with a modern shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <NewsletterPopup />
      </body>
    </html>
  );
}
