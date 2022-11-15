import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themesStructure = {
  ["light"]: {
    label: "light",
    emoji: "☀️",
  },
  ["dark"]: {
    label: "dark",
    emoji: "🌙",
  },
};

const TopBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="m-2 flex justify-end">
      {theme === "light" ? (
        <button
          className="btn btn-circle"
          data-set-theme="dark"
          onClick={() => setTheme("dark")}
        >
          🌙
        </button>
      ) : (
        <button
          className="btn btn-circle"
          data-set-theme="light"
          onClick={() => setTheme("light")}
        >
          ☀️
        </button>
      )}

      <button
        className="btn btn-circle"
        data-set-theme="light"
        onClick={() => setTheme("light")}
      >
        {themesStructure[theme].emoji}
      </button>
    </div>
  );
};

export default TopBar;
