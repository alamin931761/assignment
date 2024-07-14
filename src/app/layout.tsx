import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Shared/Navbar";

// Configuring Lexend font with specific weights, styles, and subsets
const lexend = Lexend({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Metadata for the Next.js application
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// RootLayout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className="bg-ceramic">
          {/* Navbar component */}
          <Navbar />

          {/* Rendering children components */}
          {children}
        </div>
      </body>
    </html>
  );
}
