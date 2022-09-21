import React from "react";

interface IQuestionBackgroundProps {
  children: JSX.Element;
}

export const QuestionBackground = ({
  children,
}: IQuestionBackgroundProps): JSX.Element => {
  return (
    <div className="bg-slate-100 bg-no-repeat bg-cover bg-center bg-fixed h-full z-0">
      {children}
    </div>
  );
};
