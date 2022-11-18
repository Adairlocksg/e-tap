import { useEffect } from "react";
import { themeChange } from "theme-change";

useEffect(() => {
  themeChange(false);
}, []);

const theme = ["cupcake", "theme", "dark"];

const TopBar = () => {
  return (
    <div>
      <select className="text-primary" data-choose-theme>
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
