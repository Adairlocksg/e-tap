import { useEffect } from "react";
import { themeChange } from "theme-change";

const theme = ["light", "dark"];

const TopBar = () => {
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
      <button className="btn btn-circle btn-neutral" data-set-theme="light">
        ☀️
      </button>
      <button className="btn btn-circle" data-set-theme="dark">
        🌙
      </button>
    </div>
  );
};

export default TopBar;
