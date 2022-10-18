import GenericWindow from "./GenericWindow";

const TeacherWindow = () => {
  const FormTeacher = () => {
    return (
      <div className="form-control">
        <div className="w-ful flex flex-col">
          <span className="label-text">Nome</span>
          <input
            type="text"
            placeholder="Escreva aqui"
            className="input input-bordered w-full mb-4"
          />
          <span className="label-text">Sobrenome</span>
          <input
            type="text"
            placeholder="Escreva aqui"
            className="input input-bordered w-full mb-4"
          />

          <span className="label-text">E-mail</span>
          <input
            type="email"
            placeholder="Escreva aqui"
            className="input input-bordered w-full mb-4"
          />
          <span className="label-text">Senha</span>
          <input
            type="password"
            placeholder="Escreva aqui"
            className="input input-bordered  w-full mb-4"
          />
        </div>
        <div className="modal-action">
          <label htmlFor="my-modal-teacher" className="btn">
            Yay!
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
