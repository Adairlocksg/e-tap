import { useState } from "react";
import GenericWindow from "./GenericWindow";

type teacher = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

const TeacherWindow = () => {
  const [teacher, setTeacher] = useState<teacher>({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChangeTeacher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setTeacher({
      ...teacher,
      [name]: e.target.value,
    });
    console.log(teacher);
  };

  const FormTeacher = () => {
    return (
      <div className="form-control">
        <div className="w-ful flex flex-col">
          <span className="label-text">Nome</span>
          <input
            type="text"
            name="name"
            value={teacher.name}
            placeholder="Escreva aqui"
            onChange={handleChangeTeacher}
            className="input input-bordered w-full mb-4"
          />
          <span className="label-text">Sobrenome</span>
          <input
            type="text"
            name="lastname"
            value={teacher.lastname}
            placeholder="Escreva aqui"
            onChange={handleChangeTeacher}
            className="input input-bordered w-full mb-4"
          />

          <span className="label-text">E-mail</span>
          <input
            type="email"
            name="email"
            value={teacher.email}
            placeholder="Escreva aqui"
            onChange={handleChangeTeacher}
            className="input input-bordered w-full mb-4"
          />
          <span className="label-text">Senha</span>
          <input
            type="password"
            name="password"
            value={teacher.password}
            placeholder="Escreva aqui"
            onChange={handleChangeTeacher}
            className="input input-bordered  w-full mb-4"
          />
        </div>
        <div className="modal-action">
          <label htmlFor="my-modal-teacher" className="btn">
            Salvar
          </label>
        </div>
      </div>
    );
  };

  return (
    <GenericWindow title="Professor">
      <FormTeacher />
    </GenericWindow>
  );
};

export default TeacherWindow;
