import React, { useState } from "react";
import QuestionOption from "../../atoms/QuestionOption";
import TitleH1 from "../../atoms/TitleH1";

interface IQuestionsContainerProps {
  question: string;
  alternatives: string[];
  correctAnswer: string;
}

export const QuestionsContainer = ({
  alternatives,
  question,
}: IQuestionsContainerProps): JSX.Element => {
  const alternativesList: { [key: string]: boolean } = {};
  for (let i = 0; i < alternatives.length; i++) {
    alternativesList[i] = false;
  }
  const [selected, setSelected] = useState<{ [key: string]: boolean }>(
    alternativesList
  );
  return (
    <div className="bg-white py-5 px-2 w-4/5 m-auto rounded-xl z-10 my-10">
      <div className="mb-10 z-10">
        <TitleH1 text={question} />
      </div>
      {alternatives.map((alternative, index) => (
        <QuestionOption
          text={alternative}
          key={index}
          onClick={() => {
            setSelected({ ...alternativesList, [index]: true });
          }}
          selectedClasses={selected[index] === true ? "bg-orange-500 text-white" : ""}
        />
      ))}
    </div>
  );
};
