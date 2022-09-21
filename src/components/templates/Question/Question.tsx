import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { labels } from "../../../shared/enums";
import { question } from "../../../shared/types";
import ContinueButton from "../../atoms/ContinueButton";
import QuestionBackground from "../../atoms/QuestionBackground";
import QuestionDisplayer from "../../atoms/QuestionDisplayer";
import { QuestionContext } from "../../context/QuestionContext";
import QuestionsContainer from "../../organisms/QuestionsContainer";

export const Question = (): JSX.Element => {
  const location = useLocation();
  const { setQuestionListLength, selected } = useContext(QuestionContext);
  const navigate = useNavigate();
  const { alternatives, correctAnswer, question, title } =
    location.state as question;

  useEffect(() => {
    setQuestionListLength(alternatives.length);
  }, [alternatives, setQuestionListLength]);

  const onSubmit = () => {
    for (let key in selected) {
      if (selected[key]) {
        if (alternatives[Number(key)] === correctAnswer) {
          navigate("/questao/correta", { state: title });
        } else {
          navigate("/questao/errada", { state: title });
        }
      }
    }
  };
  return (
    <QuestionBackground>
      <div className="pt-10 z-10 relative">
        <QuestionDisplayer text={title} />
        <QuestionsContainer
          question={question}
          alternatives={alternatives}
          correctAnswer={correctAnswer}
        />
        <ContinueButton text={labels.CONTINUE} onClick={onSubmit} />
      </div>
    </QuestionBackground>
  );
};
