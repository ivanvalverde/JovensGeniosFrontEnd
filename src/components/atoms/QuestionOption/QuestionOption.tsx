import React from "react";

interface IQuestionOptionProps {
  text: string;
  onClick: () => void;
  selectedClasses?: string;
}

export const QuestionOption = ({
  text,
  onClick,
  selectedClasses,
}: IQuestionOptionProps): JSX.Element => {
  return (
    <button
      className={`p-3 m-3 rounded-lg w-11/12 border-neutral-500 border z-10 ${selectedClasses}`}
      onClick={onClick}
    >
      <div className="flex items-center z-10">
        <p className="ml-3 font-medium font-montserrat z-10">{text}</p>
      </div>
    </button>
  );
};
