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
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};
