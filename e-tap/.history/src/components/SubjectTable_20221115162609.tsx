import { useEffect, useState } from "react";
import useFilterData from "../hooks/useFilterData";
import useGetSubjects from "../hooks/useGetSubjects";
import useGetUsersByRole from "../hooks/useGetUsersByRole";
import { usersRoles } from "../utils/usersEnum";
import GenericTable from "./GenericTable";

type Props = {
  searchText?: string;
};

const SubjectTable = ({ searchText }: Props) => {
  const { data: subjects, error, isLoading } = useGetSubjects();
  const filteredSubjects = useFilterData(subjects, searchText);

  console.log(subjects);

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
