import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themesStructure: { [key: string]: any } = {
  light: {
    label: "light",
    emoji: "☀️",
  },
  dark: {
    label: "dark",
    emoji: "🌙",
  },
};

const TopBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {
    themeChange(false);
  }, []);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <div className="m-2 flex justify-end">
      <button
        className="btn btn-circle"
        data-set-theme={nextTheme}
        onClick={() => setTheme(nextTheme)}
      >
        {themesStructure[nextTheme].emoji}
      </button>
    </div>
  );
};

export default TopBar;
