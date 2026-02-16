"use client";

import {ListIcon, XIcon} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import MainNav from "./navigation/MainNav";
import {Button} from "@heroui/button";
import {usePathname} from "next/navigation";

const HeaderBar = () => {
	const [isNavOpen, setIsNavOpen] = React.useState(false);
	const logoRef = React.useRef<HTMLAnchorElement>(null);

	const pathname = usePathname();

	React.useLayoutEffect(() => {
		if (pathname === "/") {
			function handleScroll() {
				if (window.scrollY > window.innerHeight / 2) {
					logoRef.current.style.opacity = "100%";
					logoRef.current.style.pointerEvents = "auto";
				} else {
					logoRef.current.style.opacity = "0%";
					logoRef.current.style.pointerEvents = "none";
				}
			}

			handleScroll();
			document.addEventListener("scroll", handleScroll);
			return () => document.removeEventListener("scroll", handleScroll);
		}
	}, [pathname]);

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
		<header
			className={`fixed z-50 top-0 left-0 w-full ${pathname === "/" ? "" : "bg-background"}`}
		>
			<nav
				className={
					"max-w-6xl mx-auto flex h-24 justify-between p-3 flex-row transition-[filter]"
				}
			>
				<Link
					href="/"
					className="h-full px-3 py-2 bg-transparent rounded-md"
					ref={logoRef}
					style={{
						transition: "opacity 0.4s",
						opacity: pathname === "/" ? "0%" : "100%",
						pointerEvents: pathname === "/" ? "none" : "auto",
					}}
				>
					<Logo border="currentcolor" fill={isNavOpen ? "none" : undefined}
					      className="ms-4 h-14 w-auto"/>
				</Link>
				<div className="flex flex-row gap-3 items-center">
					{!isNavOpen && <DarkModeButton/>}
					<Button
						className="w-14 h-14 bg-background border-0"
						size="lg"
						onPress={toggleNav}
						variant="ghost"
						isIconOnly
					>
						<ListIcon
							size={32}
							className={`${
								isNavOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100 "
							} absolute transition-[transform_opacity]`}
						/>
						<XIcon
							size={32}
							className={`${
								isNavOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
							} absolute transition-[transform_opacity]`}
						/>
					</Button>
				</div>
			</nav>
			<MainNav isOpenState={[isNavOpen, toggleNav]}/>
			{pathname === "/contact" && (
				<div className="absolute w-full h-4 bg-hatching" aria-hidden/>
			)}
		</header>
	);
};

export default HeaderBar;
