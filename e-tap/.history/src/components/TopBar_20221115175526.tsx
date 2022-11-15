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
      {/* <select className="select select-xs" data-choose-theme>
        {theme.map((value) => (
          <option key={value.toLowerCase()} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select> */}
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
          onClick={() => setTheme("dark")}
        >
          ☀️
        </button>
      )}
    </div>
  );
};

export default TopBar;
