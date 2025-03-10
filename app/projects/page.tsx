"use client";

import Project from "@/components/Project";
import { ColorContext } from "@/utility/colorContext";
import React from "react";
import { projects } from "./projects";
import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react";
import { Image } from "@heroui/react";

export default function Projects() {
	const { setColors, resetColors } = React.useContext(ColorContext);

	const handleScroll = React.useCallback(() => {
		let foundOne = false;

		for (const p of projects) {
			const el = document.getElementById(p.title);
			if (!el) continue;

			const rect = el.getBoundingClientRect();
			const center = rect.top + rect.height / 2;

			if (center >= 0 && center <= window.innerHeight) {
				if (!foundOne) {
					setColors(p.colors);
					el.classList.remove("opacity-30", "saturate-0");
				} else {
					el.classList.add("opacity-30", "saturate-0");
				}
				foundOne = true;
			} else {
				el.classList.add("opacity-30", "saturate-0");
			}
		}
		if (!foundOne) {
			resetColors();
		}
	}, [resetColors, setColors]);

	React.useLayoutEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);
		handleScroll();

		return () => {
			resetColors();
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, [handleScroll, resetColors]);

	return (
		<main className="w-full mx-auto px-6 mt-1 py-36 bg-hatching-color">
			<div className="bg-[color-mix(in_srgb,var(--color-background)_70%,transparent)] w-auto max-w-7xl  mx-auto p-4 rounded-3xl">
				<div className="min-h-[75vh] mx-auto flex flex-col justify-between">
					<div className="max-w-3xl mx-auto">
						<h1 className="w-full max-w-full mx-auto mt-16 mb-6 text-3xl font-semibold">
							PROJECTS
						</h1>
					</div>
					<Image
						src="/img/bernd-dittrich-E1eKa8PJHTU-unsplash.jpg"
						alt="Projects image"
						aria-hidden
						className="w-full lg:w-5/6 mx-auto mt-6 mb-16 aspect-[21/6] object-cover rounded-2xl !opacity-85 contrast-[0.9] -hue-rotate-[120deg]"
					/>
					<div className="max-w-3xl mx-auto">
						<p className="mb-4 max-w-full mx-auto text-lg leading-loose">
							This is a brief collection of projects I have worked on in the
							past
							<b> decades </b>(!)
						</p>
						<p className="mb-4 max-w-full mx-auto text-lg leading-loose">
							While my focus has always been to create something functional,
							beautiful, simplistic and something that puts the content in the
							right light, I have also been working on projects that were more
							complex and required a lot of backend work.
						</p>
						<p className="mb-4 max-w-full mx-auto text-lg leading-loose">
							Feel free to visit the projects to get an original impression.
							Please note that some of the projects are not maintained anymore
							and are only kept online for nostalgic reasons. If any of the
							projects is offline, feel free to{" "}
							<Link href="/contact" className="underline">
								send me a brief message
							</Link>
							.
						</p>
					</div>
					<div className="text-center md:text-lg mt-24">
						<CaretDown size={32} className="mx-auto inline-block -mt-1" />
						<p className="inline-block px-4">To the projects</p>
						<CaretDown size={32} className="mx-auto inline-block -mt-1" />
					</div>
				</div>

				{projects.map((project) => (
					<Project
						key={project.title}
						id={project.title}
						title={project.title}
						image={project.image}
						description={project.description}
						link={project.link}
						className="opacity-30 saturate-0"
					/>
				))}
			</div>
		</main>
	);
}
