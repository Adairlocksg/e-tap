import { UserList } from "phosphor-react";
import { useState } from "react";
import useFilterData from "../../hooks/useFilterData";
import useGetSubjects from "../../hooks/useGetSubjects";
import GenericLoading from "../base/GenericLoading";
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

  if (isLoading) return <GenericLoading size={60} />;
  if (error) return <div>ERRO</div>;
  if (!subjects?.length) return <div>SEM DADOS</div>;

  const tableValuesWithIcons = (filteredSubjects ?? subjects).map(
    (subject) => ({
      ...subject,
      "": <UserList size={24} />,
    })
  );

  return (
    <>
      <GenericTable
        values={tableValuesWithIcons}
        columns={Object.keys(tableValuesWithIcons[0])}
        onClickRow={(s) => {
          setSelectedSubject(s);
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
