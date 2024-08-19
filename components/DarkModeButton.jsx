"use client";

import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Moon, LightbulbFilament, Sun } from "@phosphor-icons/react";

const DarkModeButton = () => {
  const [theme, setTheme] = useLocalStorage("theme", "auto");

  const themes = React.useMemo(
    () => ({
      auto: {
        icon: <LightbulbFilament size="24" weight="light" />,
        label: "Auto",
      },
      light: {
        icon: <Sun size="24" weight={theme === "dark" ? "fill" : "regular"} />,
        label: "Light",
      },
      dark: {
        icon: <Moon size="24" weight={theme === "dark" ? "regular" : "fill"} />,
        label: "Dark",
      },
    }),
    [theme]
  );

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
    <Dropdown className="min-w-0">
      <DropdownTrigger>
        <Button variant="light" size="sm" className="px-2 min-w-0">
          {themes[theme].icon}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {Object.entries(themes).map(([key, value]) => (
          <DropdownItem
            key={key}
            onClick={() => {
              setTheme(key);
            }}
            active={theme === key}
          >
            <div className="flex flex-row items-center">
              {value.icon}
              <span className="ml-2">{value.label}</span>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DarkModeButton;
