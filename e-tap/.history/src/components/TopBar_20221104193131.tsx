import { useEffect } from "react";
import { themeChange } from "theme-change";

const theme = ["cupcake", "mytheme", "dark"];

const TopBar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="w-full">
      <select className="text-primary select-xs	" data-choose-theme>
        {theme.map((value) => (
          <option key={value.toLowerCase()} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TopBar;
