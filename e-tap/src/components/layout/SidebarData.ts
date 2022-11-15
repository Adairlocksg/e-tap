import React, { ReactComponentElement } from "react";
import { House, Book, ChalkboardTeacher, Student } from "phosphor-react";

type SidebarDataType = {
  id: number;
  description: string;
  path: string;
  icon: any;
};

const SidebarData: SidebarDataType[] = [
  {
    id: 1,
    description: "Início",
    icon: House,
    path: "/home",
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
  {
    id: 4,
    description: "Alunos",
    icon: Student,
    path: "/students",
  },
];

export default SidebarData;
