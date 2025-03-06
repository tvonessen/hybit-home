"use client";

import React from "react";
import Logo from "./Logo";

export default function Jumbo() {
	const logoRef = React.useRef<HTMLDivElement>(null);
	const logoSubRef = React.useRef<HTMLHeadingElement>(null);

	React.useLayoutEffect(() => {
		const logo = logoRef.current;

		function handleScroll() {
			const isSticky = window.scrollY > window.innerHeight / 2;
			const opacity = 100 - (window.scrollY / (window.innerHeight / 2)) * 100;

			if (isSticky) {
				logo.style.position = "fixed";
				logo.style.top = `${100 - logo.clientHeight}px`;
				logo.classList.remove("md:w-4/6");
				logo.classList.add("md:ps-[33%]");
			} else {
				logo.style.position = "relative";
				logo.style.top = "unset";
				logo.classList.remove("md:ps-[33%]");
				logo.classList.add("md:w-4/6");
			}
			for (const child of logo.children) {
				(child as HTMLElement).style.opacity = `${opacity}%`;
			}
			console.log(isSticky);
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div
			id="title-container"
			className="sticky z-10 -top-[calc(100%_-_120px)] w-screen h-screen flex justify-end items-center bg-hatching overflow-hidden"
		>
			<div
				className="bg-background md:rounded-l-3xl w-full md:w-4/6 h-[25vw] max-h-72 p-6 pb-2 flex flex-col items-start justify-start transition-all"
				ref={logoRef}
			>
				<Logo
					className="relative"
					width="auto"
					height="auto"
					border="var(--color-foreground)"
				/>
				<h1
					ref={logoSubRef}
					className="bottom-2 w-full mt-2 flex flex-row justify-between text-[clamp(18pt,3vw,24pt)] font-medium origin-top-left"
				>
					HANDCRAFTED WEBDESIGN
				</h1>
			</div>
		</div>
	);
}
