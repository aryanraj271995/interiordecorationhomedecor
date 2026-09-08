import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Interior & Home Décor | Beautiful Spaces & Elegant Interiors",
  description: "Explore premium home décor, interior solutions, wallpapers, furnishings, furniture, lighting and more. Discover beautiful spaces and connect with our team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
