import React, { useContext } from "react";
import QuestionOption from "../../atoms/QuestionOption";
import TitleH1 from "../../atoms/TitleH1";
import { QuestionContext } from "../../context/QuestionContext";

interface IQuestionsContainerProps {
  question: string;
  alternatives: string[];
  correctAnswer: string;
}

export const QuestionsContainer = ({
  alternatives,
  question,
}: IQuestionsContainerProps): JSX.Element => {
  const {selected, setSelected, initialSelectedState} = useContext(QuestionContext);
  return (
    <div className="bg-white py-5 px-2 w-4/5 m-auto rounded-xl z-10 my-10">
      <div className="mb-5 z-10">
        <TitleH1 text={question} />
      </div>
      {alternatives.map((alternative, index) => (
        <QuestionOption
          text={alternative}
          key={index}
          onClick={() => {
            setSelected({ ...initialSelectedState, [index]: true });
          }}
          selectedClasses={selected[index] === true ? "bg-orange-500 text-white" : ""}
        />
      ))}
    </div>
  );
};
