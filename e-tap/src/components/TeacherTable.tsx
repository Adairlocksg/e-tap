import useFilterData from "../hooks/useFilterData";
import useGetTeachers from "../hooks/useGetTeachers";
import GenericTable from "./GenericTable";

type Props = {
  searchText?: string;
};

const TeacherTable = (props: Props) => {
  const { searchText } = props;
  const { data, error, isLoading } = useGetTeachers();
  const filteredTeachers = useFilterData(data, searchText);

  if (isLoading) return <div>CARREGANDO...</div>;
  if (error) return <div>ERRO</div>;
  if (!data?.length) return <div>SEM DADOS</div>;

  return (
    <div className="w-full">
      <GenericTable
        values={filteredTeachers ?? data}
        columns={Object.keys(data[0])}
      />
    </div>
  );
};

export default TeacherTable;
