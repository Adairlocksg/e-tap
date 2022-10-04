import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
function Sidebar() {
  return (
    <aside className="min-h-screen text-[#303030] text-center bg-gradient-to-r from-[#54f5cf] to-[#477bff] w-[20%] m-2 rounded-md p-5">
      <ul className="text-lg">
        {SidebarData.map((item) => {
          return (
            <li
              className="p-5 rounded-md hover:bg-white/30 backdrop-blur-sm  transition ease-in-out duration-300"
              key={item.id}
            >
              <Link className="flex text-center" to={item.path}>
                <span className="sm:justify-around">{<item.icon size={32} />}</span>
                <section className="ml-5 hidden lg:block"> {item.description}</section>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
