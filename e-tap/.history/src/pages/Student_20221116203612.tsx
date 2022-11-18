import { useEffect, useState } from "react";
import StudentWindow from "../components/student/StudentWindow";
import UserTable from "../components/user/UserTable";
import { usersRoles } from "../utils/usersEnum";

const Student = () => {
  const [searchText, setSearchText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    if (!isAddModalOpen) setSearchText("");
  }, [isAddModalOpen]);

  return (
    <div className="w-full p-2">
      <div className="w-full flex justify-between mb-2">
        <input
          type="text"
          placeholder="Pesquisar aluno"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(e.target.value);
          }}
          className="input input-bordered w-full max-w-xs"
        />
        <label
          htmlFor="my-modal-student"
          className="btn modal-button btn-secondary"
          onClick={() => setIsAddModalOpen(true)}
        >
          Adicionar
        </label>
        <input type="checkbox" id="my-modal-student" className="modal-toggle" />
        <StudentWindow setIsOpen={setIsAddModalOpen} isOpen={isAddModalOpen} />
      </div>
      <UserTable searchText={searchText} role={usersRoles.student} />
    </div>
  );
};

export default Student;
