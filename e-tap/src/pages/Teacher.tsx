import { useState } from "react";
import TeacherTable from "../components/TeacherTable";
import TeacherWindow from "../components/TeacherWindow";

const Teacher = () => {
  const [searchText, setSearchText] = useState("");

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full m-2">
      <div className="w-full flex justify-between mb-2">
        <input
          type="text"
          placeholder="Pesquisar professor"
          onInput={searchInputHandler}
          className="input input-bordered w-full max-w-xs"
        />
        <label htmlFor="my-modal-teacher" className="btn modal-button">
          Adicionar
        </label>
        <input type="checkbox" id="my-modal-teacher" className="modal-toggle" />
        <TeacherWindow />
      </div>
      <TeacherTable searchText={searchText} />
    </div>
  );
};

export default Teacher;
