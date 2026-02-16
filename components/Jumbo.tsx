"use client";

import React from "react";
import Logo from "./Logo";
import {CaretDownIcon} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";
import {Button} from "@heroui/button";

export default function Jumbo() {
	const logoRef = React.useRef<HTMLDivElement>(null);
	const caretRef = React.useRef<HTMLButtonElement>(null);
	const router = useRouter();

	React.useLayoutEffect(() => {
		const logo = logoRef.current;

		function handleScroll() {
			const isSticky = window.scrollY > window.innerHeight / 2;
			const opacity =
				window.innerHeight / 2 - logo.clientHeight / 2 - 0.9 * window.scrollY;

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
			caretRef.current.style.opacity = `${opacity}%`;
		}

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	});

	return (
		<div
			id="title-container"
			className="sticky z-10 -top-[calc(100%-120px)] w-full h-screen flex justify-end items-center bg-hatching overflow-hidden"
		>
			<div
				className="relative bg-background md:rounded-l-3xl w-full md:w-4/6 p-6 pb-2 flex flex-col items-start justify-start transition-all duration-700"
				ref={logoRef}
			>
				<Logo
					className="relative self-start w-65 md:w-100 xl:w-122 h-auto"
					border="var(--color-foreground)"
				/>
				<h1
					className="bottom-2 w-full mt-2 flex flex-row justify-between text-[14pt] md:text-3xl xl:text-4xl font-medium origin-top-left">
					HANDCRAFTED WEBDESIGN
				</h1>
			</div>
			<Button
				className="absolute bottom-9 inset-x-1/2 w-12 h-12 -translate-x-5 z-10 bg-background rounded-lg flex justify-center items-center"
				ref={caretRef}
				onPress={() => router.push("/")}
				isIconOnly
			>
				<CaretDownIcon
					size={48}
					weight="thin"
					className="opacity-90 animate-bounce mt-2"
				/>
			</Button>
		</div>
	);
}
