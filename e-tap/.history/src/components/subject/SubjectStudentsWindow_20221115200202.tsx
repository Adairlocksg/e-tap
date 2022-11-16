import GenericWindow from "../base/GenericWindow";

const SubjectStudentsWindow = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <GenericWindow title="Alunos" isOpen={isOpen} setIsOpen={setIsOpen}>
        <pre>{JSON.stringify(selectedSubject)}</pre>
      </GenericWindow>
    </>
  );
};

export default SubjectStudentsWindow;
