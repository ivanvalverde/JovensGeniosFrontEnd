import React from "react";
import Circle from "../Circle";

interface IQuestionDisplayerProps {
  text: string;
}

export const QuestionDisplayer = ({
  text,
}: IQuestionDisplayerProps): JSX.Element => {
  return (
    <div
      className="bg-white p-3 rounded-lg w-4/5 z-10 m-auto mb-5"
    >
      <div className="flex">
        <Circle tailwindClasses="bg-blue-500 h-[25px] w-[25px] block" />
        <p className="ml-5 font-bold font-montserrat text-lg">{text}</p>
      </div>
    </div>
  );
};
