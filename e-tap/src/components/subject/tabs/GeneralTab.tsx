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

const GeneralTab = ({ subject, setSubject }: any) => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-full flex flex-col">
      <span className="label-text">Nome da disciplina</span>
      <input
        type="text"
        name="subject_name"
        // value={student.name}
        placeholder="Escreva aqui"
        // onChange={handleChangeStudent}
        required
        className="input input-bordered w-full mb-4"
      />
      <div className="flex">
        <div>
          <span className="label-text">Professor</span>
          <Select
            data={people}
            displayValue="name"
            value={selected}
            setValue={setSelected}
            className="flex-1"
          />
        </div>
        <div className="flex flex-col flex-1 ml-2">
          <span className="label-text mb-1">Id da tag</span>
          <input
            type="text"
            name="tag_id"
            // value={student.name}
            placeholder="Escreva aqui"
            // onChange={handleChangeStudent}
            required
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralTab;
