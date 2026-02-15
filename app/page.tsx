import Jumbo from "@/components/Jumbo";
import NavButton from "@/components/navigation/NavButton";
import {
	ArrowSquareInIcon,
	AtomIcon,
	FlaskIcon,
	GithubLogoIcon,
	GraduationCapIcon,
	HandPeaceIcon,
	HandPointingIcon,
	HandWavingIcon,
	HeartIcon,
	RecycleIcon,
	SignpostIcon,
	SpeedometerIcon,
	StarIcon,
	TrophyIcon,
	WallIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
	return (
		<>
			<Jumbo/>
			<section className="container mx-auto px-6 mt-12 pt-48 text-xl leading-relaxed">
				<Image
					alt="Portait of Tobias von Essen"
					src="/img/DSC139949.jpg"
					sizes="(min-width: 1280px) 480px, (min-width: 1024px) 360px, 280px"
					width={480}
					height={640}
					className="w-70 sm:w-70 lg:w-90 aspect-square sm:aspect-auto object-cover rounded-xl sm:float-end  mx-auto sm:ms-8 mb-8"
				/>

				<h2 className="text-3xl font-medium mb-12">
					Hey there!{" "}
					<HandWavingIcon
						role="img"
						aria-label="Waving hand"
						weight="duotone"
						className="text-yellow-600 inline-block -mt-2 text-4xl"
					/>
				</h2>
				<p className="mb-16">
					I am <b>Tobias</b>, web developer and designer based in the Berlin
					area, Germany. I{" "}
					<HeartIcon
						role="img"
						aria-label="Heart"
						weight="fill"
						className="fill-primary text-2xl inline-block -mt-1"
					/>{" "}
					tinkering with web technologies and creating beautiful, functional
					websites.
				</p>
				<p className="mb-8">
					<GraduationCapIcon
						role="img"
						aria-label="Graduation cap"
						weight="light"
						className="fill-secondary float-start text-6xl md:mx-3 me-2"
					/>
					Actually, I am a graduated R&D engineer{" "}
					<FlaskIcon
						className="inline-block text-xl -mt-1 text-secondary"
						aria-hidden="true"
					/>
					, but ever since the internet became <i>a thing</i> I have been
					experimenting around with <b className="text-primary">HTML</b>,{" "}
					<b className="text-purple-600">CSS</b>,{" "}
					<b className="text-yellow-600">JavaScript</b> and later the CMS{" "}
					<b className="text-orange-500">TYPO3</b>.
				</p>
				<p className="mb-16">
					Today, I am a full-time frontend developer at a renewable energy
					company and can follow my passion day by day. I have fallen in love
					with <b className="text-blue-500 inline-block">TypeScript</b>,{" "}
					<b className="text-secondary inline-block">
						<AtomIcon className="inline-block text-2xl -mt-1" aria-hidden="true"/>
						&nbsp;ReactJS
					</b>{" "}
					and <b>NextJS</b> and all the modern web technologies, frameworks and
					libraries that grow faster than my creativity allows me to keep up
					with.
				</p>
			</section>

			<section className="w-full py-16 bg-[color-mix(in_srgb,var(--color-secondary)_10%,transparent)]">
				<div className="container mx-auto px-6 text-xl leading-loose">
					<p>
						My key competences are{" "}
						<SignpostIcon
							aria-hidden="true"
							weight="fill"
							className="inline-block text-secondary text-2xl -mt-1"
						/>{" "}
						straightforward and{" "}
						<WallIcon
							aria-hidden="true"
							weight="fill"
							className="inline-block text-primary text-2xl -mt-1"
						/>{" "}
						robust websites, that provide{" "}
						<StarIcon
							aria-hidden="true"
							weight="bold"
							className="inline-block text-yellow-500 text-2xl -mt-1"
						/>{" "}
						best user experience, run{" "}
						<SpeedometerIcon
							className="inline-block text-primary text-2xl"
							aria-hidden="true"
						/>{" "}
						smoothly and{" "}
						<RecycleIcon
							aria-hidden="true"
							className="inline-block text-secondary text-2xl -mt-1"
						/>{" "}
						resource-efficient. I like drafting and designing websites from
						scratch to create{" "}
						<TrophyIcon
							aria-hidden="true"
							weight="duotone"
							className="inline-block text-yellow-700 text-2xl -mt-1"
						/>{" "}
						unique presences on the internet.
					</p>
				</div>
				<div className="container mx-auto px-6 text-xl leading-loose">
					<p className="mt-8">
						If you'd like to have a look at some of my work, feel free to check
						out my{" "}
						<Link
							href="/projects"
							className="inline font-semibold bg-primary px-2 py-1 mx-1 rounded-lg text-nowrap"
						>
							<ArrowSquareInIcon size={24} aria-hidden className="inline"/>{" "}
							portfolio
						</Link>{" "}
						or my{" "}
						<a
							href="https://github.com/tvonessen"
							target="_blank"
							rel="noopener noreferrer"
							className="inline font-semibold bg-secondary px-2 py-1 mx-1 rounded-lg text-nowrap"
						>
							<GithubLogoIcon
								size={24}
								role="img"
								aria-label="Github Logo"
								className="inline"
							/>
							&nbsp;GitHub
						</a>{" "}
						profile.
					</p>
				</div>
			</section>

			<section className="w-full py-16 bg-hatching">
				<div className="container mx-auto px-6 py-4 text-xl leading-loose bg-background rounded-3xl">
					<HandPeaceIcon
						weight="duotone"
						className="text-4xl mx-auto text-primary my-6"
					/>
					<p className="mb-6 mx-auto">
						Though I am full-time employed, I am always open for{" "}
						<b>new projects</b> and collaborations. If you have a project in
						mind, that you think I could help you with, feel free to get in
						touch with me. I am looking forward to hearing from you!
					</p>
					<div className="flex justify-center my-6">
						<NavButton
							color="primary"
							variant="solid"
							size="lg"
							type="button"
							className="font-semibold text-xl italic"
							href="/contact"
						>
							<HandPointingIcon
								weight="duotone"
								className="rotate-90 inline-block text-3xl"
							/>{" "}
							Get in touch
						</NavButton>
					</div>
				</div>
			</section>
		</>
	);
}
