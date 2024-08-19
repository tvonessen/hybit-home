import React from "react";
import "./globals.css";
import { Raleway } from "next/font/google";
import HeaderBar from "@/components/HeaderBar";
import { Providers } from "./providers";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata = {
  title: "HyBit Media",
  description: "Handcrafted Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="transition-colors duration-150">
      <body
        className={`${raleway.className} transition-colors duration-150 container mx-auto mt-2`}
      >
        <Providers>
          <header>
            <HeaderBar />
          </header>
          <main
            id="main-content"
            className="mt-12 mx-5 transition-[filter,opacity] duration-500"
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
