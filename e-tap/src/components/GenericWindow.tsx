type Props = {
  title: string;
  children: JSX.Element;
};

const GenericWindow: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="modal ">
      <div className="modal-box w-1/2 max-w-5xl">
        <h1 className="font-bold text-2xl text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default GenericWindow;
