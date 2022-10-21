import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { queryClient } from "../App";
import enviroment from "../environments/enviroment";
import GenericWindow from "./GenericWindow";

type teacher = {
  name: string;
  lastname: string;
  email: string;
  permission: number;
  password: string;
};

const TeacherWindow = () => {
  const [teacher, setTeacher] = useState<teacher>({
    name: "",
    lastname: "",
    email: "",
    permission: 2,
    password: "",
  });

  const [isAluno, setIsAluno] = useState<boolean>(false);

  const mutation = useMutation(
    (t: teacher) => axios.post(`${enviroment.railway}adm/new_user/`, t),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getTeachers"]);
        (document.querySelector(".btn") as any)?.click();
      },
    }
  );

  const handleChangeTeacher = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;

    setTeacher({
      ...teacher,
      [name]: e.target.value,
    });
  };

  const handleSaveTeacher = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(teacher);
  };

  return (
    <GenericWindow title="Professor">
      <form onSubmit={handleSaveTeacher}>
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
              type="text"
              name="password"
              value={teacher.password}
              placeholder="Escreva aqui"
              onChange={handleChangeTeacher}
              className="input input-bordered  w-full mb-4"
            />
            <span className="label-text">Também é aluno?</span>
            <input
              type="checkbox"
              checked={isAluno}
              onChange={(e) => setIsAluno(!isAluno)}
              className="checkbox"
            />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-teacher" className="btn btn-error">
              Cancelar
            </label>
            <button>
              <label htmlFor="my-modal-teacher" className="btn btn-success">
                Salvar
              </label>
            </button>
          </div>
        </div>
      </form>
    </GenericWindow>
  );
};

export default TeacherWindow;
