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

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

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
            <GeneralTab />
          </Tab.Panel>
          <Tab.Panel>
            <StudentsTab />
          </Tab.Panel>
          <Tab.Panel>
            <MeetsTab />
          </Tab.Panel>
          {/* {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))} */}
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
