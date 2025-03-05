import React from "react";
import "./globals.css";
import HeaderBar from "@/components/HeaderBar";
import { Raleway } from "next/font/google";
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
		<html lang="en">
			<body
				className={`${raleway.className} transition-colors duration-150 w-screen min-h-screen`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
