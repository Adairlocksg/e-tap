import { useEffect } from "react";
import useGetTeachers from "../hooks/useGetTeachers";
import GenericTable from "./GenericTable";

type Props = {
  searchText?: string;
};

const TeacherTable = (props: Props) => {
  const { searchText } = props;
  const { data, error, isLoading } = useGetTeachers();

  if (isLoading) return <div>CARREGANDO...</div>;
  if (error) return <div>ERRO</div>;
  if (!data?.length) return <div>SEM DADOS</div>;

  // useEffect(() => {
  //   console.log(searchText);

  // }, [searchText]);

  return (
    <div className="w-full">
      <GenericTable values={data} columns={Object.keys(data[0])} />
    </div>
  );
};

export default TeacherTable;
