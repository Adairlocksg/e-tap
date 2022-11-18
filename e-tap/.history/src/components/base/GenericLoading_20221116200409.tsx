import { CircleNotch } from "phosphor-react";
import { FC } from "react";

interface GenericLoadingProps {
  size?: number;
}

const GenericLoading: FC<GenericLoadingProps> = ({ size = 32 }) => {
  return (
    <div className="animate-spin h-[32px] w-[32px] m-0">
      <CircleNotch size={size} />
    </div>
  );
};

export default GenericLoading;
