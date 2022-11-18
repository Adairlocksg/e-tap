import React, { useState } from "react";
import SubjectTable from "../components/SubjectTable";
import UserTable from "../components/UserTable";
import { usersRoles } from "../utils/usersEnum";

function Subject() {
  const [searchText, setSearchText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full p-2">
      <div className="w-full flex justify-between mb-2">
        <input
          type="text"
          placeholder="Pesquisar Disciplina"
          onInput={searchInputHandler}
          className="input input-bordered w-full max-w-xs"
        />
        <label
          htmlFor="my-modal-teacher"
          className="btn btn-secondary modal-button"
        >
          Adicionar
        </label>
        <input type="checkbox" id="my-modal-teacher" className="modal-toggle" />
      </div>
      <SubjectTable searchText={searchText} />
    </div>
  );
}

export default Subject;
