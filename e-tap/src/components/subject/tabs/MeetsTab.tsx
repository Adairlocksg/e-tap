import DatePicker from "react-multi-date-picker";

import TimePicker from "react-multi-date-picker/plugins/time_picker";

<DatePicker disableDayPicker format="HH:mm:ss" plugins={[<TimePicker />]} />;

function MeetsTab({ subject, setSubject }: any) {
  return (
    <div className="w-full flex flex-col">
      <span className="label-text">Encontros</span>
      <DatePicker
        multiple
        inputClass=" w-full bg-[color:var(--w-base-100)] p-2 rounded-md mb-2"
      />
      <span className="label-text">Hora inicial</span>
      <DatePicker
        disableDayPicker
        format="HH:mm"
        inputClass=" w-full bg-[color:var(--w-base-100)] p-2 rounded-md mb-2"
        plugins={[<TimePicker hideSeconds />]}
      />
      <span className="label-text">Hora final</span>

      <DatePicker
        disableDayPicker
        format="HH:mm"
        inputClass=" w-full bg-[color:var(--w-base-100)] p-2 rounded-md mb-2"
        plugins={[<TimePicker hideSeconds />]}
      />
    </div>
  );
}

export default MeetsTab;
