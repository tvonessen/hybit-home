"use client";

import { List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import MainNav from "./navigation/MainNav";

const HeaderBar = () => {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	const toggleNav = (state) => {
		const targetState =
			typeof state === "boolean" || state === null ? state : !isNavOpen;
		const backdrop = document.getElementById("main-content");
		if (!backdrop) return;
		if (targetState === true) {
			backdrop.classList.add("blur-sm", "opacity-50");
			setIsNavOpen(true);
		} else {
			setIsNavOpen(null);
			backdrop.classList.remove("blur-sm", "opacity-50");
			setTimeout(() => {
				setIsNavOpen(false);
			}, 500);
		}
	};

	// const DarkModeButton = dynamic(() => import("./DarkModeButton"), {
	// 	ssr: false,
	// });

	return (
		<>
			<nav className="w-full flex h-24 justify-between p-5 flex-row transition-[filter]">
				<Link href="/" className="h-full">
					<Logo border="currentcolor" fill={isNavOpen ? "none" : undefined} />
				</Link>
				<div className="flex flex-row gap-3 items-center">
					<DarkModeButton />
					<button
						type="button"
						className="cursor-pointer block h-12 w-12 relative"
						onClick={toggleNav}
					>
						<List
							size={48}
							className={`${
								isNavOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100 "
							} absolute top-0 left-0 transition-[transform_opacity]`}
						/>
						<X
							size={48}
							className={`${
								isNavOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
							} absolute bottom-0 left-0 transition-[transform_opacity]`}
						/>
					</button>
				</div>
			</nav>
			<MainNav isOpenState={[isNavOpen, toggleNav]} />
		</>
	);
};

export default HeaderBar;
