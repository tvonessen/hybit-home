import React from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react/dist/ssr";

const NavLink = React.memo(({ className, children, onClick }) => {
  return (
    <button
      className={`cursor-pointer relative group ps-3 pe-4 rotate-3 gap-3 text-4xl sm:text-5xl p-3 bg-black  dark:bg-white text-white dark:text-black transition-all duration-300 rounded-lg hover:rounded-sm ${className} shadow-[4px_4px_0_0_#ff6659,inset_4px_4px_0_0_#099] hover:[box-shadow:48px_4px_0_0_#ff6659,-48px_-4px_0_0_#099]`}
      onClick={onClick}
    >
      <div className={`transition-[filter] flex flex-row gap-2`}>
        {children}
      </div>
      <div className="hidden group-hover:flex absolute h-full flex-row justify-center items-center top-0 -left-12">
        <CaretRight />
      </div>
      <div className="hidden group-hover:flex absolute h-full flex-row justify-center items-center top-0 -right-12">
        <CaretLeft />
      </div>
    </button>
  );
});

export default NavLink;
