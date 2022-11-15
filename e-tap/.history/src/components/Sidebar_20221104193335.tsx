import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";
import classNames from "classnames";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapseSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={classNames(
        "min-h-[calc(100vh-1.25rem)] text-[#303030] min-w-min text-center transition-[width] duration-300 ease-in bg-gradient-to-b from-[#54f5cf] to-[#477bff] w-[20%] rounded-md",
        {
          "w-[5%]": isCollapsed,
        }
      )}
    >
      {!isCollapsed ? (
        <section className="flex justify-center">
          <span className="text-3xl m-auto text-center">e-tap</span>
          <ArrowLeft
            className="cursor-pointer rounded-md hover:bg-white/30 backdrop-blur-sm p-2"
            onClick={collapseSidebar}
            size={40}
          />
        </section>
      ) : (
        <ArrowRight
          className="m-auto cursor-pointer rounded-md hover:bg-white/30 backdrop-blur-sm p-2"
          onClick={collapseSidebar}
          size={40}
        />
      )}
      <ul className="text-lg">
        {SidebarData.map((item) => {
          return (
            <li
              className="p-5 rounded-md hover:bg-white/30 backdrop-blur-sm transition ease-in-out duration-300"
              key={item.id}
            >
              <Link
                data-tip={isCollapsed ? item.description : ""}
                className={classNames("flex text-center", {
                  "tooltip tooltip-right": isCollapsed,
                })}
                to={item.path}
              >
                <span className="sm:justify-around">
                  {<item.icon size={32} />}
                </span>
                <section
                  className={classNames("ml-5", {
                    hidden: isCollapsed,
                  })}
                >
                  {item.description}
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
