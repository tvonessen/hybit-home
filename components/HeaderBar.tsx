"use client";

import { List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import MainNav from "./navigation/MainNav";
import { Button } from "@heroui/react";

const HeaderBar = () => {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	const toggleNav = (state) => {
		const targetState =
			typeof state === "boolean" || state === null ? state : !isNavOpen;
		const backdrop = document.getElementById("main-content");
		if (!backdrop) return;
		if (targetState === true) {
			backdrop.classList.add("blur-[6px]", "opacity-20");
			setIsNavOpen(true);
		} else {
			setIsNavOpen(null);
			backdrop.classList.remove("blur-[6px]", "opacity-20");
			setTimeout(() => {
				setIsNavOpen(false);
			}, 500);
		}
	};

	return (
		<header className="fixed z-50 top-0 left-0 w-full">
			<nav className="container mx-auto flex h-24 justify-between p-5 flex-row transition-[filter]">
				<Link href="/" className="h-full">
					<Logo border="currentcolor" fill={isNavOpen ? "none" : undefined} />
				</Link>
				<div className="flex flex-row gap-3 items-center">
					<DarkModeButton />
					<Button
						className="w-14 h-14 bg-background border-0"
						size="lg"
						onPress={toggleNav}
						variant="ghost"
						isIconOnly
					>
						<List
							size={32}
							className={`${
								isNavOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100 "
							} absolute transition-[transform_opacity]`}
						/>
						<X
							size={32}
							className={`${
								isNavOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
							} absolute transition-[transform_opacity]`}
						/>
					</Button>
				</div>
			</nav>
			<MainNav isOpenState={[isNavOpen, toggleNav]} />
		</header>
	);
};

export default HeaderBar;
