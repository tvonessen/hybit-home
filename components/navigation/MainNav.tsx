import {EnvelopeSimple, FolderSimple, HouseSimple,} from "@phosphor-icons/react/dist/ssr";
import {useRouter} from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const MainNav = ({isOpenState}) => {
	const [isOpen, toggleState] = isOpenState;
	const router = useRouter();
	const transform = "skew-x-6 -skew-y-12 rotate-6";

	const handleNavigate = (href: string) => {
		toggleState(false);
		setTimeout(() => {
			router.push(href);
		}, 250);
	};

	function handleClose() {
		toggleState(false);
	}

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className={`fixed inset-0 z-30 w-full h-screen mt-20 pt-[calc(25vh-80px)] flex flex-col items-center justify-start ${
				isOpen === true
					? "-left-[2.5%] top-0"
					: isOpen === null
						? "-left-full top-[10vw]"
						: "left-full top-[-10vw]"
			} ${
				isOpen ? "opacity-100" : "opacity-0"
			} fixed text-current transition-all duration-500`}
			onClick={handleClose}
		>
			<h2
				className={`block text-2xl sm:text-4xl font-black ${transform} mb-24`}
			>
				Where shall I take you?
			</h2>
			<div className="flex flex-col w-fit justify-center items-start gap-10 ps-4">
				<NavLink className={`${transform}`} onClick={() => handleNavigate("/")}>
					<HouseSimple/> Home
				</NavLink>
				<NavLink
					className={`${transform}`}
					onClick={() => handleNavigate("projects")}
				>
					<FolderSimple/> Projects
				</NavLink>
				<NavLink
					className={`${transform}`}
					onClick={() => handleNavigate("contact")}
				>
					<EnvelopeSimple/> Contact
				</NavLink>
			</div>
		</div>
	);
};

export default MainNav;
