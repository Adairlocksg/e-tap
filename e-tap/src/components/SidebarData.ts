import React, { ReactComponentElement } from "react";
import { House, Book, ChalkboardTeacher } from "phosphor-react";

interface SidebarDataType {
  id: number;
  description: string;
  path: string;
  icon: React.ComponentType;
}

const SidebarData: SidebarDataType[] = [
  {
    id: 1,
    description: "Home",
    icon: House,
    path: "/",
  },
  {
    id: 2,
    description: "Disciplinas",
    icon: Book,
    path: "/subjects",
  },
  {
    id: 3,
    description: "Professores",
    icon: ChalkboardTeacher,
    path: "/teachers",
  },
];

export default SidebarData;
