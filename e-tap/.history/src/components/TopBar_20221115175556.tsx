import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const theme = ["light", "dark"];

const TopBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

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
    </div>
  );
};

export default TopBar;
