import GenericTable from "../../base/GenericTable";
import Select from "../../base/Select";
import { useState } from "react";

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
        <button type="button" className="btn btn-primary mt-6 ml-2">
          Adicionar
        </button>
      </div>
      <GenericTable values={people} columns={["id", "name"]} />
    </div>
  );
};

export default StudentsTab;
