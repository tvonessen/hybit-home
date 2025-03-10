"use client";

import { ColorContext } from "@/utility/colorContext";
import { Button, Image, Link } from "@heroui/react";
// import React from "react";

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
	image: string;
	title: string;
	description: string | React.ReactElement;
	link: { href: string; text?: string };
}

export default function Project({
	image,
	title,
	description,
	link,
	...props
}: ProjectProps) {
	return (
		<div
			{...props}
			className={`${props.className ?? ""} project max-w-6xl mx-auto min-h-[80vh] py-36 flex items-center  transition-all duration-700`}
		>
			<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 py-4 md:py-24 lg:py-36 px-4 md:px-8 lg:px-12 rounded-2xl md:rounded-3xl shadow-split">
				<div className="lg:col-span-3">
					<Image className="" src={image} alt={title} radius="sm" />
				</div>
				<div className="lg:col-span-2 flex flex-col justify-start gap-4">
					<div>
						<h3 className="text-3xl my-3 font-semibold">{title}</h3>
						<hr className="border-secondary" />
						{typeof description === "string" ? (
							<p className="my-4 text-lg leading-relaxed">{description}</p>
						) : (
							description
						)}
					</div>
					<Button
						radius="sm"
						as={Link}
						href={link.href}
						target="_blank"
						rel="noreferrer"
						showAnchorIcon
						color="primary"
						className="text-lg"
					>
						{link.text ??
							link.href.replace("https://", "").replace("http://", "")}
					</Button>
				</div>
			</div>
		</div>
	);
}
