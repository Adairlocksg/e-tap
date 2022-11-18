import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import TeacherWindow from "../components/TeacherWindow";

import UserTable from "../components/UserTable";
import { usersRoles } from "../utils/usersEnum";
const Teacher = () => {
  const [searchText, setSearchText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="h-[calc(100vh-2.7rem)] w-full p-2 flex flex-col">
      <div className="w-full flex justify-between mb-2">
        <input
          type="text"
          placeholder="Pesquisar professor"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(e.target.value);
          }}
          className="input input-bordered w-full max-w-xs"
        />
        <label
          htmlFor="my-modal-teacher"
          className="btn modal-button"
          onClick={() => setIsAddModalOpen(true)}
        >
          Adicionar
        </label>
        <input type="checkbox" id="my-modal-teacher" className="modal-toggle" />
        <TeacherWindow setIsOpen={setIsAddModalOpen} isOpen={isAddModalOpen} />
      </div>
      <UserTable searchText={searchText} role={usersRoles.teacher} />
    </div>
  );
};

export default Teacher;
