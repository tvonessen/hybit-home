import React from "react";
import "./globals.css";
import HeaderBar from "@/components/HeaderBar";
import {Raleway} from "next/font/google";
import {Providers} from "./providers";
import Footer from "@/components/Footer";

const raleway = Raleway({
	subsets: ["latin"],
});

export const metadata = {
	title: "HyBit Media",
	description: "Handcrafted Design",
};

export default function RootLayout({children}) {
	return (
		<html lang="en" className="scroll-smooth!" suppressHydrationWarning>
		<body
			className={`${raleway.className} transition-colors duration-150 w-full min-h-screen`}
		>
		<div/>
		<Providers>
			<HeaderBar/>
			<div
				id="main-content"
				className="relative z-10 w-full min-h-screen transition-[color,background-image,filter,opacity] duration-500 flex flex-col justify-between"
			>
				<div className="main-content-inner">{children}</div>
				<Footer/>
			</div>
		</Providers>
		</body>
		</html>
	);
}
