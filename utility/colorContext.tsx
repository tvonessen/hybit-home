import React from "react";

export const ColorContext = React.createContext({
	primary: "",
	secondary: "",
	setColors: ({ primary, secondary }) => {},
	resetColors: () => {},
});

export const ColorProvider = ({ children }) => {
	const [primary, setPrimary] = React.useState("");
	const [secondary, setSecondary] = React.useState("");

	function setColors({ primary, secondary }) {
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

	function resetColors() {
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
