const GeneralTab = () => {

  const teste = [1, 2, 3, 4, 5]

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
    </div>
  );
};

export default GeneralTab;
