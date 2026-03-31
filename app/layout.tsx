import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer";
import HeaderBar from "@/components/HeaderBar";
import { Providers } from "./providers";

import "./globals.css";

const raleway = Raleway({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "HyBit Media",
	description: "Handcrafted Design",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth!" suppressHydrationWarning>
			<body
				className={`${raleway.className} transition-colors duration-150 w-full min-h-screen`}
			>
				<div />
				<Providers>
					<HeaderBar />
					<div
						id="main-content"
						className="relative z-10 w-full min-h-screen transition-[color,background-image,filter,opacity] duration-500 flex flex-col justify-between"
					>
						<div className="main-content-inner">{children}</div>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
