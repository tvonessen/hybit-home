import {
	GithubLogo,
	Infinity as InfinityIcon,
	LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";

export default function Footer() {
	return (
		<footer className="w-screen mt-24 bg-hatching-color border-t-2 border-[color-mix(in_srgb,var(--color-primary)_50%,transparent)] flex flex-row justify-center items-center">
			<div className="mt-6 py-4 pt-8 pb-16 px-8 bg-background rounded-t-3xl shadow-sm flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center">
				<div className="flex flex-row gap-4">
					<a
						href="https://github.com/tvonessen"
						target="_blank"
						rel="noopener noreferrer"
						className="block bg-foreground p-2 rounded-lg aspect-square hover:bg-secondary focus-visible:bg-secondary transition-colors"
					>
						<GithubLogo size={24} color="var(--color-background)" />
					</a>
					<a
						href="https://www.linkedin.com/in/tobias-von-essen/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BvSZ4qn1yTJ2E%2BROoTFwhuQ%3D%3D"
						target="_blank"
						rel="noopener noreferrer"
						className="block bg-foreground p-2 rounded-lg aspect-square hover:bg-secondary focus-visible:bg-secondary transition-colors"
					>
						<LinkedinLogo size={24} color="var(--color-background)" />
					</a>
					<a
						href="https://app.daily.dev/hybit"
						target="_blank"
						rel="noopener noreferrer"
						className="block bg-foreground p-2 rounded-lg aspect-square hover:bg-secondary focus-visible:bg-secondary transition-colors"
					>
						<InfinityIcon size={24} color="var(--color-background)" />
					</a>
				</div>

				<Logo
					fill="transparent"
					border="var(--color-foreground)"
					height="36px"
				/>

				<div className="text-center text-sm">
					<p className="text-nowrap">
						© {new Date().getFullYear()} Tobias von Essen
					</p>
					{/* <p className="text-nowrap">Tobias von Essen</p> */}
				</div>
			</div>
		</footer>
	);
}
