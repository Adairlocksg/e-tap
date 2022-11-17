import GenericTable from "../../base/GenericTable";
import Select from "../../base/Select";
import { useEffect, useState } from "react";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const StudentsTab = ({ subject, setSubject }: any) => {
  const [selected, setSelected] = useState(people[0]);
  const [studentsList, setStudentsList] = useState([selected]);

  const handleAddAlunosList = () => {
    if (!selected.id) return alert('Você precisa selecionar um aluno para realizar essa ação');

    if (studentsList.find(student => selected.id === student.id)) return alert('Aluno já adicionado à lista');

    setStudentsList([...studentsList, selected]);
    setSelected({ id: 0, name: '' });
  }

  const handleRemoveAlunosList = () => {
    if (!selected.id) return alert('Você precisa selecionar um aluno para realizar essa ação');

    if (!studentsList.find(student => selected.id === student.id)) return alert('Aluno não adicionado à lista');

    setStudentsList(studentsList.filter(student => selected.id !== student.id));
    setSelected({ id: 0, name: '' });
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex mb-2">
        <div>
          <span className="label-text">Aluno</span>
          <Select
            value={selected}
            setValue={setSelected}
            data={people}
            displayValue="name"
          />
        </div>
        <button type="button" onClick={handleAddAlunosList} className="btn btn-primary mt-6 ml-2">
          Adicionar
        </button>
        <button type="button" onClick={handleRemoveAlunosList} className="btn btn-error mt-6 ml-2">
          Remover
        </button>
      </div>
      <GenericTable values={studentsList} columns={["id", "name"]} />
    </div>
  );
};

export default StudentsTab;
