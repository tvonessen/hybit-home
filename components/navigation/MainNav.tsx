import {
	EnvelopeSimpleIcon,
	FolderSimpleIcon,
	HouseSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";

const MainNav = ({ isOpenState }) => {
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

	const positionClass =
		isOpen === true
			? "-left-[2.5%] top-0"
			: isOpen === null
				? "-left-full top-[10vw]"
				: "left-full top-[-10vw]";

	return (
		<div
			className={`fixed inset-0 z-30 w-full h-screen mt-20 pt-[calc(25vh-80px)] flex flex-col items-center justify-start ${positionClass} ${isOpen ? "opacity-100" : "opacity-0"} fixed text-current transition-all duration-500`}
		>
			<button
				type="button"
				aria-label="Close navigation"
				className="absolute inset-0 w-full h-full cursor-default"
				onClick={handleClose}
				tabIndex={isOpen ? 0 : -1}
			/>
			<h2
				className={`relative block text-2xl sm:text-4xl font-black ${transform} mb-24`}
			>
				Where shall I take you?
			</h2>
			<div className="relative flex flex-col w-fit justify-center items-start gap-10 ps-4">
				<NavLink className={`${transform}`} onClick={() => handleNavigate("/")}>
					<HouseSimpleIcon /> Home
				</NavLink>
				<NavLink
					className={`${transform}`}
					onClick={() => handleNavigate("projects")}
				>
					<FolderSimpleIcon /> Projects
				</NavLink>
				<NavLink
					className={`${transform}`}
					onClick={() => handleNavigate("contact")}
				>
					<EnvelopeSimpleIcon /> Contact
				</NavLink>
			</div>
		</div>
	);
};

export default MainNav;
