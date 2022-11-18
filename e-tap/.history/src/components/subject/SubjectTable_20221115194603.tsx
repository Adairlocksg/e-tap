import useFilterData from "../../hooks/useFilterData";
import useGetSubjects from "../../hooks/useGetSubjects";
import GenericTable from "../base/GenericTable";

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
      onClickRow={console.log}
    />
  );
};

export default SubjectTable;
