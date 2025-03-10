"use client";

import React from "react";

export default function useThemeColors() {
	const [primary, setPrimary] = React.useState<string>("");
	const [secondary, setSecondary] = React.useState<string>("");

	function setColors({
		primary,
		secondary,
	}: { primary?: string; secondary?: string }) {
		if (primary) {
			setPrimary(primary);
			document.documentElement.style.setProperty("--color-primary", primary);
		}
		if (secondary) {
			setSecondary(secondary);
			document.documentElement.style.setProperty(
				"--color-secondary",
				secondary,
			);
		}
	}

	function resetColors() {
		setPrimary("#ff6649");
		document.documentElement.style.setProperty("--color-primary", "#ff6649");
		setSecondary("#009999");
		document.documentElement.style.setProperty("--color-secondary", "#009999");
	}

	return { primary, secondary, setColors, resetColors };
}
