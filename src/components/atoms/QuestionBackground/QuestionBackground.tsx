import React from "react";
import Circle from "../Circle";

interface IQuestionBackgroundProps {
  children: JSX.Element;
}

export const QuestionBackground = ({
  children,
}: IQuestionBackgroundProps): JSX.Element => {
  return (
    <div className="bg-slate-100 bg-no-repeat bg-cover bg-center bg-fixed h-full z-0">
      {children}
      <div className="absolute top-[55%] left-[20%] w-full z-0">
        <div className="relative w-[210px] h-[200px] mx-auto z-0">
          <Circle tailwindClasses="bg-orange-500 h-[320px] w-[320px] absolute z-0" />
        </div>
      </div>
    </div>
  );
};
