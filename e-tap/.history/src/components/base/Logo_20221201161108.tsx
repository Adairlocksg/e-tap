import logoUrl from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="h-full w-full">
      <img id="logo-img" src={logoUrl} alt="e-tap" />
    </div>
  );
};

export default Logo;
