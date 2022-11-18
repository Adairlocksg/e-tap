import { CircleNotch } from "phosphor-react";
import { FC } from "react";

interface GenericLoadingProps {
  size?: number;
}

const GenericLoading: FC<GenericLoadingProps> = ({ size = 32 }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className={`animate-spin h-[${size}px] w-[${size}px] m-0`}>
        <CircleNotch size={size} />
      </div>
    </div>
  );
};

export default GenericLoading;
