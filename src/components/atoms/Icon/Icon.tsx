import React from "react";

interface IIconProps {
  width: string;
  height: string;
  viewBox: string;
  svgFill: string;
  pathFill: string;
  xmlns: string;
  d: string;
  strokeWidth?: string;
  stroke?: string;
  strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
  strokeLineJoin?: "round" | "inherit" | "miter" | "bevel" | undefined;
}

export const Icon = ({
  width,
  height,
  viewBox,
  svgFill,
  pathFill,
  xmlns,
  d,
  stroke,
  strokeLineJoin,
  strokeLinecap,
  strokeWidth,
}: IIconProps): JSX.Element => {
  return (
    <div>
      <svg
        height={height}
        width={width}
        viewBox={viewBox}
        fill={svgFill}
        xmlns={xmlns}
        strokeWidth={strokeWidth}
        stroke={stroke}
      >
        <path
          d={d}
          fill={pathFill}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLineJoin}
        />
      </svg>
    </div>
  );
};
