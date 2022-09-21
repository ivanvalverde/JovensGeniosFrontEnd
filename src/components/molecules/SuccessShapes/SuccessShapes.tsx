import React from "react";
import { labels } from "../../../shared/enums";
import { svgs } from "../../../shared/svgs";
import Circle from "../../atoms/Circle";
import Icon from "../../atoms/Icon";
import SuccessMessage from "../../atoms/SuccessMessage";

export const SuccessShapes = (): JSX.Element => {
  const { check } = svgs;
  return (
    <div className="relative flex justify-center items-center top-[30px] w-full h-[250px] z-20">
      <div className="absolute h-full w-full flex justify-center">
        <div className="z-20 top-[22px] absolute">
          <Icon
            height={check.height}
            width={check.width}
            viewBox={check.viewBox}
            d={check.d}
            pathFill={check.pathFill}
            svgFill={check.svgFill}
            xmlns={check.xmlns}
            stroke={check.stroke}
            strokeLineJoin={check.strokeLineJoin}
            strokeLinecap={check.strokeLineCap}
            strokeWidth={check.strokeWidth}
          />
        </div>
        <Circle tailwindClasses="bg-orange-500 w-[60px] h-[60px] absolute z-10 top-[10px]" />
      </div>
      <Circle tailwindClasses="bg-orange-500 w-[200px] h-[200px] absolute" />
      <Circle tailwindClasses="bg-white w-[150px] h-[150px] absolute" />
      <div className="z-20">
        <SuccessMessage text={labels.EXP_GAINED} tailwindClasses="text-blue-500"/>
      </div>
    </div>
  );
};
