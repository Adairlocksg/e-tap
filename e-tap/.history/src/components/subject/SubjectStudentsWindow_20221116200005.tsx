import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircleNotch } from "phosphor-react";
import { useEffect, useState } from "react";
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
  const [studentsInSubject, setSudentsInSubject] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSudentsInSubject([]);
      getStudentInSubject(subject.id)?.then(({ students }) =>
        setSudentsInSubject(students)
      );
    }
  }, [isOpen, subject]);

  return (
    <>
      <GenericWindow
        title={`${subject?.subject_name} - Alunos `}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {/* {studentsInSubject?.length ? (
          <GenericTable
            values={studentsInSubject}
            columns={Object.keys(studentsInSubject[0])}
          />
        ) : ( */}
        <div className=" h-5 w-5 m-0">
          <CircleNotch size={32} />
        </div>
        {/* )} */}
      </GenericWindow>
    </>
  );
};

export default SubjectStudentsWindow;
