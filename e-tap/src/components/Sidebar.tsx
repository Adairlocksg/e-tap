import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
function Sidebar() {
  return (
    <aside className="min-h-screen text-center bg-slate-600 w-[20%]  m-2 rounded-md p-5">
      <ul className="text-lg">
        {SidebarData.map((item) => {
          return (
            <li className="pt-5" key={item.id}>
              <span>{<item.icon />}</span>
              <Link to={item.path}>{item.description}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
