import { heroui } from "@heroui/react";

module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				foreground: "var(--color-foreground)",
				background: "var(--color-background)",
				primary: "#ff6649",
				secondary: "#099",
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};
