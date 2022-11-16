import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { queryClient } from "../../App";
import enviroment from "../../environments/enviroment";
import { subject } from "../../hooks/useGetSubjects";
import GenericTable from "../base/GenericTable";
import GenericWindow from "../base/GenericWindow";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
  subject: subject;
};

const getStudentInSubject = (id: number) => {
  if (!id) return;
  return axios
    .get(`${enviroment.railway}educator/list/students/${id}/`)
    .then(({ data }) => data);
};

const SubjectStudentsWindow = ({ isOpen, setIsOpen, subject }: Props) => {
  const { data, isLoading, error } = useQuery(["getStudentsInSubject"], () =>
    getStudentInSubject(subject.id)
  );

  useEffect(() => {
    if (isOpen) {
      queryClient.invalidateQueries(["getStudentsInSubject"]);
    }
  }, [subject]);

  return (
    <>
      <GenericWindow title="Alunos" isOpen={isOpen} setIsOpen={setIsOpen}>
        {data?.students?.length && (
          <GenericTable
            values={data.students}
            columns={Object.keys(data.students[0])}
          />
        )}
      </GenericWindow>
    </>
  );
};

export default SubjectStudentsWindow;
