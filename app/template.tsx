import HeaderBar from "@/components/HeaderBar";

export default function Template({ children }) {
	return (
		<>
			<HeaderBar />
			<main
				id="main-content"
				className="w-full h-full transition-[filter,opacity] duration-500 bg-hatching"
			>
				<div className="container pt-36 mx-auto">{children}</div>
			</main>
		</>
	);
}
