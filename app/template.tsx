import HeaderBar from "@/components/HeaderBar";
import Logo from "@/components/Logo";

export default function Template({ children }) {
	return (
		<>
			<HeaderBar />
			<main
				id="main-content"
				className="w-full h-full transition-[filter,opacity] duration-500"
			>
				<div
					id="title-container"
					className="w-screen h-screen flex justify-center items-center bg-hatching overflow-hidden"
				>
					<div className="w-[360px] md:w-[480px] lg:w-[640px] relative z-20 bg-background rounded-xl p-6 flex flex-col items-center justify-center">
						<Logo border="var(--color-foreground)" />
						<h1 className="w-full leading-none mt-1 flex flex-row justify-between text-[2.2ch] md:text-[3.1ch] lg:text-[4.3ch] font-medium ">
							<span>HANDCRAFTED</span>
							<span>WEBDESIGN</span>
						</h1>
						<div className="absolute h-full w-[50vw] left-full bg-background -z-10" />
					</div>
				</div>
				{children}
			</main>
		</>
	);
}
