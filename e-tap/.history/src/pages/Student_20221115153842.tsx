import { useState } from "react";
import StudentWindow from "../components/StudentWindow";
import UserTable from "../components/UserTable";
import { usersRoles } from "../utils/usersEnum";

const Student = () => {
  const [searchText, setSearchText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full m-2">
      <div className="w-full flex justify-between mb-2">
        <input
          type="text"
          placeholder="Pesquisar aluno"
          onInput={searchInputHandler}
          className="input input-bordered w-full max-w-xs"
        />
        <label htmlFor="my-modal-teacher" className="btn modal-button">
          Adicionar
        </label>
        <input type="checkbox" id="my-modal-teacher" className="modal-toggle" />
        <StudentWindow setIsOpen={setIsAddModalOpen} isOpen={isAddModalOpen} />
      </div>
      <UserTable searchText={searchText} role={usersRoles.student} />
    </div>
  );
};

export default Student;
