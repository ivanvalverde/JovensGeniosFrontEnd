import React from "react";
import { svgs } from "../../../shared/svgs";
import Icon from "../Icon";

interface IContinueButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const ContinueButton = ({
  text,
  onClick,
  disabled,
}: IContinueButtonProps): JSX.Element => {
  const { arrowRight } = svgs;
  return (
    <button
      className={`${
        disabled ? "bg-slate-300" : "bg-blue-500"
      } text-white p-3 mb-3 mt-10 rounded-lg w-4/5 z-10 flex items-center justify-center relative mx-auto`}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="font-medium font-montserrat text-lg">{text}</p>
      <div className="absolute right-4">
        <Icon
          height={arrowRight.height}
          width={arrowRight.width}
          viewBox={arrowRight.viewBox}
          d={arrowRight.d}
          pathFill={disabled ? arrowRight.disabledColor! : arrowRight.pathFill}
          svgFill={arrowRight.svgFill}
          xmlns={arrowRight.xmlns}
          stroke={arrowRight.stroke}
          strokeLineJoin={arrowRight.strokeLineJoin}
          strokeLinecap={arrowRight.strokeLineCap}
          strokeWidth={arrowRight.strokeWidth}
        />
      </div>
    </button>
  );
};
