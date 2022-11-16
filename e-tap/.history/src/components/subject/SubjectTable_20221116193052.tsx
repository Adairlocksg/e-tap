import { UserList } from "phosphor-react";
import { useState } from "react";
import useFilterData from "../../hooks/useFilterData";
import useGetSubjects from "../../hooks/useGetSubjects";
import GenericTable from "../base/GenericTable";
import GenericWindow from "../base/GenericWindow";
import SubjectStudentsWindow from "./SubjectStudentsWindow";

type Props = {
  searchText?: string;
};

const SubjectTable = ({ searchText }: Props) => {
  const { data: subjects, error, isLoading } = useGetSubjects();
  const filteredSubjects = useFilterData(subjects, searchText);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<any>();

  if (isLoading) return <div>CARREGANDO...</div>;
  if (error) return <div>ERRO</div>;
  if (!subjects?.length) return <div>SEM DADOS</div>;

  const teste = [...(filteredSubjects ?? subjects)].map((subject) => ({
    ...subject,
    sla: UserList,
  }));

  return (
    <>
      <GenericTable
        values={teste}
        columns={Object.keys(teste[0])}
        onClickRow={(subject) => {
          setSelectedSubject(subject);
          setIsOpen(true);
        }}
      />
      <SubjectStudentsWindow
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        subject={selectedSubject}
      />
    </>
  );
};

export default SubjectTable;
