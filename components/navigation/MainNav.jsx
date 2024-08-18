import React from "react";
import { useRouter } from "next/navigation";
import {
  HouseSimple,
  FolderSimple,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import NavLink from "./NavLink";

const MainNav = ({ isOpenState }) => {
  const [isOpen, toggleState] = isOpenState;
  const router = useRouter();
  const transform = "skew-x-6 -skew-y-12 rotate-6";

  const handleNavigate = (href) => {
    toggleState(false);
    router.push(href);
  };

  return (
    <div
      className={`z-50 w-screen h-[calc(100vh_-_6rem)] flex flex-col items-center justify-center ${
        isOpen === true
          ? "-left-[2.5%] top-24"
          : isOpen === null
          ? "-left-full top-[calc(6rem_+_10vw)]"
          : "left-full top-[calc(6rem_-_10vw)]"
      } ${
        isOpen ? "opacity-100" : "opacity-0"
      } fixed text-[currentcolor] transition-all duration-500`}
    >
      <h2
        className={`block text-2xl sm:text-4xl font-black ${transform} mb-24`}
      >
        Where shall I take you?
      </h2>
      <div className="flex flex-col w-fit justify-center items-start gap-10 ps-4">
        <NavLink
          href="/"
          className={`${transform}`}
          onClick={() => handleNavigate("/")}
        >
          <HouseSimple /> Home
        </NavLink>
        <NavLink
          href="projects"
          className={`${transform}`}
          onClick={() => handleNavigate("projects")}
        >
          <FolderSimple /> Projects
        </NavLink>
        <NavLink
          href="contact"
          className={`${transform}`}
          onClick={() => handleNavigate("contact")}
        >
          <EnvelopeSimple /> Contact
        </NavLink>
      </div>
    </div>
  );
};

export default MainNav;
