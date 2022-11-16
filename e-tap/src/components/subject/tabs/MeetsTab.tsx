import DatePicker from "react-multi-date-picker";
import GenericTable from "../../base/GenericTable";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Tom Cook" },
  { id: 8, name: "Tanya Fox" },
  { id: 9, name: "Hellen Schmidt" },
  { id: 10, name: "Tom Cook" },
  { id: 11, name: "Tanya Fox" },
  { id: 12, name: "Hellen Schmidt" },
];

function MeetsTab() {
  return (
    <div className="w-full flex flex-col">
      <DatePicker multiple inputClass="bg-[color:var(--w-base-100)] p-2 rounded-md mb-2" />
      <GenericTable values={people} columns={["id", "name"]} />
    </div>
  );

  return;
}

export default MeetsTab;
