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
      <span className="label-text">Sobrenome</span>
      <input
        type="text"
        name="lastname"
        // value={student.lastname}
        placeholder="Escreva aqui"
        // onChange={handleChangeStudent}
        required
        className="input input-bordered w-full mb-4"
      />

      <span className="label-text">E-mail</span>
      <input
        type="email"
        name="email"
        // value={student.email}
        placeholder="Escreva aqui"
        // onChange={handleChangeStudent}
        required
        className="input input-bordered w-full mb-4"
      />
      <span className="label-text">Senha</span>
      <input
        type="text"
        name="password"
        // value={student.password}
        placeholder="Escreva aqui"
        // onChange={handleChangeStudent}
        required
        className="input input-bordered  w-full mb-4"
      />
      <span className="label-text">Também é professor?</span>
      <input
        type="checkbox"
        // checked={isTeacher}
        // onChange={(e) => setIsTeacher(!isTeacher)}
        className="checkbox"
      />
    </div>
  );
};

export default GeneralTab;
