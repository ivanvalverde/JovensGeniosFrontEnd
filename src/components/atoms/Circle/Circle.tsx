import React from "react";

interface ICircleProps {
    tailwindClasses: string;
  }

export const Circle = ({ tailwindClasses }: ICircleProps): JSX.Element => {
  return <div className={`rounded-full ${tailwindClasses}`} />;
};
