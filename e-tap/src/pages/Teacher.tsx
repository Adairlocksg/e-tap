import { useState } from "react";
import UserTable from "../components/UserTable";
import { usersRoles } from "../utils/usersEnum";

const Teacher = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full m-2">
      <div className="w-full flex justify-between mb-2">
        <input
          type="text"
          placeholder="Pesquisar professor"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(e.target.value);
          }}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-active">Adicionar</button>
      </div>
      <UserTable searchText={searchText} role={usersRoles.teacher} />
    </div>
  );
};

export default Teacher;
