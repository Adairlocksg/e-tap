import { useEffect, useState } from "react";
import useFilterData from "../hooks/useFilterData";
import useGetUsersByRole from "../hooks/useGetUsersByRole";
import { usersRoles } from "../utils/usersEnum";
import GenericTable from "./GenericTable";

type Props = {
  searchText?: string;
  role: usersRoles;
};

const UserTable = (props: Props) => {
  const { searchText, role } = props;
  const { data: users, error, isLoading } = useGetUsersByRole(role);
  const filteredUsers = useFilterData(users, searchText);

  if (isLoading) return <div>CARREGANDO...</div>;
  if (error) return <div>ERRO</div>;
  if (!users?.length) return <div>SEM DADOS</div>;

  return (
    <div className="w-full">
      <GenericTable
        values={filteredUsers ?? users}
        columns={Object.keys(users[0])}
      />
    </div>
  );
};

export default UserTable;
