import { useEffect } from "react";
import { themeChange } from "theme-change";

useEffect(() => {
  themeChange(false);
}, []);

const theme = ["cupcake", "theme", "dark"];

const TopBar = () => {
  return <></>;
};

export default TopBar;
