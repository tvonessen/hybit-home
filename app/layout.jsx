import React from "react";
import "./globals.css";
import { Raleway } from "next/font/google";
import HeaderBar from "@/components/HeaderBar";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata = {
  title: "HyBit Media",
  description: "Handcrafted Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} transition-colors container mx-auto`}
      >
        <header>
          <HeaderBar />
        </header>
        <main
          id="main-content"
          className="mt-12 transition-[filter,opacity] duration-500"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
