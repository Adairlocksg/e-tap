import { useEffect, useState } from "react";
import useFilterData from "../hooks/useFilterData";
import useGetUsersByRole from "../hooks/useGetUsersByRole";
import { usersRoles } from "../utils/usersEnum";
import GenericTable from "./GenericTable";

type Props = {
  searchText?: string;
};

const SubjectTable = ({ searchText }: Props) => {
  //   const { data: users, error, isLoading } = useGetUsersByRole(role);
  //   const filteredUsers = useFilterData(users, searchText);

  //   console.log(users);

  return <div>opa</div>;

  // if (isLoading) return <div>CARREGANDO...</div>;
  // if (error) return <div>ERRO</div>;
  // if (!users?.length) return <div>SEM DADOS</div>;

  // return (
  //   <GenericTable
  //     values={filteredUsers ?? users}
  //     columns={Object.keys(users[0])}
  //   />
  // );
};

export default SubjectTable;
