import React from "react";
import { useLocation } from "react-router-dom";
import { labels } from "../../../shared/enums";
import { question } from "../../../shared/types";
import ContinueButton from "../../atoms/ContinueButton";
import QuestionBackground from "../../atoms/QuestionBackground";
import QuestionDisplayer from "../../atoms/QuestionDisplayer";
import QuestionsContainer from "../../organisms/QuestionsContainer";

export const Question = (): JSX.Element => {
  const location = useLocation();
  const { alternatives, correctAnswer, question, title } =
    location.state as question;
  return (
    <QuestionBackground>
      <div className="py-10 z-10 relative">
        <QuestionDisplayer text={title} />
        <QuestionsContainer question={question} alternatives={alternatives} correctAnswer={correctAnswer}/>
        <ContinueButton text={labels.CONTINUE} onClick={() => {}} />
      </div>
    </QuestionBackground>
  );
};
