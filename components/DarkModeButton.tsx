"use client";

import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/dropdown";
import {Button} from "@heroui/button";
import {MoonIcon, SunIcon} from "@phosphor-icons/react";
import React from "react";
import {useLocalStorage} from "usehooks-ts";

const DarkModeButton = () => {
	const [theme, setTheme] = useLocalStorage("theme", "auto");

	const Auto = () => {
		return (
			<svg
				width="30"
				height="30"
				viewBox="0 0 256 256"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				className="stroke-current"
				style={{
					fillRule: "evenodd",
					clipRule: "evenodd",
					strokeLinecap: "round",
					strokeLinejoin: "round",
				}}
			>
				<title>Auto</title>

				<path
					d="M128,40L128,16"
					style={{fill: "none", fillRule: "nonzero", strokeWidth: "16px"}}
				/>
				<path
					d="M74.97,146.03C73.045,140.371 72,134.307 72,128C72,97.093 97.093,72 128,72C134.307,72 140.371,73.045 146.03,74.97"
					style={{fill: "none", fillRule: "nonzero", strokeWidth: "16px"}}
				/>
				<path
					d="M64,64L48,48"
					style={{fill: "none", fillRule: "nonzero", strokeWidth: "16px"}}
				/>
				<path
					d="M208,48L48,208"
					style={{fill: "none", fillRule: "nonzero", strokeWidth: "16px"}}
				/>
				<path
					d="M40,128L16,128"
					style={{fill: "none", fillRule: "nonzero", strokeWidth: "16px"}}
				/>
				<g transform="matrix(1,0,0,1,-2.30216,-2.30216)">
					<path
						d="M154.983,140.621C168.466,147.873 183.834,151.999 200.091,151.999C209.509,151.999 218.875,150.615 227.89,147.89C215.628,188.208 178.185,215.956 136.044,215.956C119.812,215.956 104.467,211.839 91.003,204.602"
						style={{fill: "none", fillRule: "nonzero", strokeWidth: "16px"}}
					/>
				</g>
			</svg>
		);
	};

	const themes = React.useMemo(
		() => ({
			auto: {
				icon: <Auto/>,
				label: "Auto",
			},
			light: {
				icon: <SunIcon size="30" weight={theme === "dark" ? "fill" : "regular"}/>,
				label: "Light",
			},
			dark: {
				icon: <MoonIcon size="30" weight={theme === "dark" ? "regular" : "fill"}/>,
				label: "Dark",
			},
		}),
		[theme],
	);

	React.useLayoutEffect(() => {
		if (
			theme === "dark" ||
			(theme === "auto" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			document.body.classList.add("dark");
		else document.body.classList.remove("dark");
	});

	return (
		<Dropdown className="min-w-0">
			<DropdownTrigger>
				<Button
					variant="ghost"
					className="h-14 w-14 bg-background border-0"
					size="lg"
					isIconOnly
				>
					{themes[theme ?? "auto"].icon}
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label="Select dark mode"
				selectedKeys={[theme]}
				variant="solid"
				selectionMode="single"
				onSelectionChange={(keys) => {
					console.log([...keys][0]);
					setTheme(keys.currentKey);
				}}
			>
				{Object.entries(themes).map(([key, value]) => (
					<DropdownItem key={key} className="my-1">
						<div className="flex flex-row items-center px-1 gap-3">
							<span>{value.icon}</span>
							<span>{value.label}</span>
						</div>
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default DarkModeButton;
