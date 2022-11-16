import Select from "../../base/Select";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const GeneralTab = () => {
  return (
    <div className="w-full flex flex-col">
      <span className="label-text">Nome</span>
      <input
        type="text"
        name="name"
        // value={student.name}
        placeholder="Escreva aqui"
        // onChange={handleChangeStudent}
        required
        className="input input-bordered w-full mb-4"
      />
      <Select data={people} />
    </div>
  );
};

export default GeneralTab;
