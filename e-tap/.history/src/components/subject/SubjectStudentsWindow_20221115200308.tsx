import { subject } from "../../hooks/useGetSubjects";
import GenericWindow from "../base/GenericWindow";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
  subject: subject;
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
