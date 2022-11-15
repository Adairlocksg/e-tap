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

  if (isLoading) return <div>CARREGANDO...</div>;
  if (error) return <div>ERRO</div>;
  if (!subjects?.length) return <div>SEM DADOS</div>;

  return (
    <GenericTable
      values={filteredSubjects ?? subjects}
      columns={Object.keys(subjects[0])}
    />
  );
};

export default SubjectTable;
