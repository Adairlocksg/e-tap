import GenericTable from "../../base/GenericTable";
import Select from "../../base/Select";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const StudentsTab = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex mb-2">
        <div>
          <span className="label-text">Aluno</span>
          <Select data={people} displayValue="name" />
        </div>
        <button className="btn btn-primary mt-6 ml-2">Adicionar</button>
      </div>
      <GenericTable values={people} columns={["id", "name"]} />
    </div>
  );
};

export default StudentsTab;
