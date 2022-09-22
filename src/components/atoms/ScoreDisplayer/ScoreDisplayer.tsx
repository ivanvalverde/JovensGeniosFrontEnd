import React from "react";
import { svgs } from "../../../shared/svgs";
import Icon from "../Icon";

interface IScoreDisplayerProps {
  value: string;
}

export const ScoreDisplayer = ({
  value,
}: IScoreDisplayerProps): JSX.Element => {
  const { trophyIcon } = svgs;
  return (
    <div className="p-1 flex bg-yellow-400 border-2 border-black rounded-lg">
      <Icon
        height={trophyIcon.height}
        width={trophyIcon.width}
        viewBox={trophyIcon.viewBox}
        d={trophyIcon.d}
        pathFill={trophyIcon.pathFill}
        svgFill={trophyIcon.svgFill}
        xmlns={trophyIcon.xmlns}
        stroke={trophyIcon.stroke}
        strokeLineJoin={trophyIcon.strokeLineJoin}
        strokeLinecap={trophyIcon.strokeLineCap}
        strokeWidth={trophyIcon.strokeWidth}
      />
      <p className="font-montserrat font-bold text-xl ml-2">{value}</p>
    </div>
  );
};
