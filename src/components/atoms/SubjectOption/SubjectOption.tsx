import React from "react";
import Circle from "../Circle";

interface IProfileOptionProps {
  text: string;
  onClick: () => void;
}

export const SubjectOption = ({
  text,
  onClick,
}: IProfileOptionProps): JSX.Element => {
  return (
    <button
      className="bg-white p-3 m-3 rounded-lg w-4/5 z-10"
      onClick={onClick}
    >
      <div className="flex">
        <Circle tailwindClasses="bg-blue-500 h-[25px] w-[25px] block" />
        <p className="ml-5 font-bold font-montserrat text-lg">{text}</p>
      </div>
    </button>
  );
};
