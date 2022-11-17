import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { queryClient } from "../../App";
import enviroment from "../../environments/enviroment";
import GenericWindow from "../base/GenericWindow";
import { Tab } from "@headlessui/react";
import GeneralTab from "./tabs/GeneralTab";
import StudentsTab from "./tabs/StudentsTab";
import MeetsTab from "./tabs/MeetsTab";

type tabsTitle = {
  id: number;
  title: string;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Example() {
  const [subject, setSubject] = useState();

  const tabs: tabsTitle[] = [
    {
      id: 1,
      title: "Geral",
    },
    {
      id: 2,
      title: "Alunos",
    },
    {
      id: 3,
      title: "Encontros",
    },
  ];
  return (
    <div className="w-full max-w-3xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <GeneralTab subject={subject} setSubject={setSubject} />
          </Tab.Panel>
          <Tab.Panel>
            <StudentsTab subject={subject} setSubject={setSubject} />
          </Tab.Panel>
          <Tab.Panel>
            <MeetsTab subject={subject} setSubject={setSubject} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

type student = {
  name: string;
  lastname: string;
  email: string;
  permission: number;
  password: string;
};

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
};

const SubjectWindow = ({ isOpen, setIsOpen }: Props) => {
  const [student, setStudent] = useState<student>({
    name: "",
    lastname: "",
    email: "",
    permission: 1,
    password: "",
  });

  const [isTeacher, setIsTeacher] = useState<boolean>(false);

  const mutation = useMutation(
    (s: student) => axios.post(`${enviroment.railway}adm/new_user/`, s),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["getStudents"]);
        setIsOpen(false);
      },
    }
  );

  const handleChangeStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;

    setStudent({
      ...student,
      [name]: e.target.value,
    });
  };

  const handleSaveStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ ...student, permission: isTeacher ? 4 : 3 });
  };

  return (
    <GenericWindow title="Disciplina" isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSaveStudent}>
        <div className="form-control">
          <div className="w-full flex flex-col">
            <Example />
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-error"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-success">
              Salvar
            </button>
          </div>
        </div>
      </form>
    </GenericWindow>
  );
};

export default SubjectWindow;
