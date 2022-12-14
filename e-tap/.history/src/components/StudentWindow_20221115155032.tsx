import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { queryClient } from "../App";
import enviroment from "../environments/enviroment";
import GenericWindow from "./GenericWindow";

type student = {
  name: string;
  lastname: string;
  email: string;
  permission: number;
  password: string;
};

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
};

const StudentWindow = ({ isOpen, setIsOpen }: Props) => {
  const [student, setStudent] = useState<student>({
    name: "",
    lastname: "",
    email: "",
    permission: 1,
    password: "",
  });

  const [isTeacher, setIsTeacher] = useState<boolean>(false);

  const mutation = useMutation(
    (s: student) => axios.post(`${enviroment.railway}adm/new_user/`, s),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["getStudents"]);
        setIsOpen(false);
      },
    }
  );

  const handleChangeStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;

    setStudent({
      ...student,
      [name]: e.target.value,
    });
  };

  const handleSaveStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ ...student, permission: isTeacher ? 4 : 3 });
  };

  return (
    <GenericWindow title="Aluno" isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSaveStudent}>
        <div className="form-control">
          <div className="w-full flex flex-col">
            <span className="label-text">Nome</span>
            <input
              type="text"
              name="name"
              value={student.name}
              placeholder="Escreva aqui"
              onChange={handleChangeStudent}
              required
              className="input input-bordered w-full mb-4"
            />
            <span className="label-text">Sobrenome</span>
            <input
              type="text"
              name="lastname"
              value={student.lastname}
              placeholder="Escreva aqui"
              onChange={handleChangeStudent}
              required
              className="input input-bordered w-full mb-4"
            />

            <span className="label-text">E-mail</span>
            <input
              type="email"
              name="email"
              value={student.email}
              placeholder="Escreva aqui"
              onChange={handleChangeStudent}
              required
              className="input input-bordered w-full mb-4"
            />
            <span className="label-text">Senha</span>
            <input
              type="text"
              name="password"
              value={student.password}
              placeholder="Escreva aqui"
              onChange={handleChangeStudent}
              required
              className="input input-bordered  w-full mb-4"
            />
            <span className="label-text">Tamb??m ?? professor?</span>
            <input
              type="checkbox"
              checked={isTeacher}
              onChange={(e) => setIsTeacher(!isTeacher)}
              className="checkbox"
            />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-teacher" className="btn btn-error">
              Cancelar
            </label>
            <button type="submit" className="btn btn-success">
              Salvar
            </button>
          </div>
        </div>
      </form>
    </GenericWindow>
  );
};

export default StudentWindow;
