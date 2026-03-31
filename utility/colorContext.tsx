import type { ReactNode } from "react";
import React from "react";

interface ColorValues {
	primary: string;
	secondary: string;
}

interface ColorContextType {
	primary: string;
	secondary: string;
	setColors: (colors: ColorValues) => void;
	resetColors: () => void;
}

export const ColorContext = React.createContext<ColorContextType>({
	primary: "",
	secondary: "",
	setColors: (_colors: ColorValues) => {},
	resetColors: () => {},
});

export const ColorProvider = ({ children }: { children: ReactNode }) => {
	const [primary, setPrimary] = React.useState("");
	const [secondary, setSecondary] = React.useState("");

	function setColors({ primary, secondary }: ColorValues): void {
		setPrimary(primary ?? "#ff6649");
		document.documentElement.style.setProperty(
			"--color-primary",
			primary ?? "#ff6649",
		);
		setSecondary(secondary ?? "#009999");
		document.documentElement.style.setProperty(
			"--color-secondary",
			secondary ?? "#009999",
		);
	}

	function resetColors(): void {
		setPrimary("#ff6649");
		document.documentElement.style.setProperty("--color-primary", "#ff6649");
		setSecondary("#009999");
		document.documentElement.style.setProperty("--color-secondary", "#009999");
	}

	return (
		<ColorContext.Provider
			value={{ primary, secondary, setColors, resetColors }}
		>
			{children}
		</ColorContext.Provider>
	);
};
