import axios from "axios";
import enviroment from "../../environments/enviroment";
import { subject } from "../../hooks/useGetSubjects";
import GenericWindow from "../base/GenericWindow";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
  subject: subject;
};

const getStudentInSubject = (id: number) => {
  return axios
    .get(`${enviroment.railway}adm/getall/subject/`)
    .then(({ data }) => data);
};

const SubjectStudentsWindow = ({ isOpen, setIsOpen, subject }: Props) => {
  return (
    <>
      <GenericWindow title="Alunos" isOpen={isOpen} setIsOpen={setIsOpen}>
        <pre>{JSON.stringify(subject)}</pre>
      </GenericWindow>
    </>
  );
};

export default SubjectStudentsWindow;
