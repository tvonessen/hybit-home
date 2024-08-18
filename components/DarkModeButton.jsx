"use client";

import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const DarkModeButton = () => {
  const [theme, setTheme] = useLocalStorage("theme", "auto");

  React.useLayoutEffect(() => {
    if (
      theme === "dark" ||
      (theme === "auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  });

  return (
    <select
      className="h-12 text-[currentcolor]"
      value={theme}
      onChange={(event) => setTheme(event.target.value)}
    >
      <option value="auto">Auto</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default DarkModeButton;
