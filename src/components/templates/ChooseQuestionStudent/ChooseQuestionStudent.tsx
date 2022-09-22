import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { labels } from "../../../shared/enums";
import { questionsResponse } from "../../../shared/types";
import Background from "../../atoms/Background";
import ScoreDisplayer from "../../atoms/ScoreDisplayer";
import SubjectOption from "../../atoms/SubjectOption";
import TitleH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";
import { QuestionContext } from "../../context/QuestionContext";
import BottomNavBar from "../../organisms/BottomNavBar";

export const ChooseQuestionStudent = (): JSX.Element => {
  const [questions, setQuestions] = useState<questionsResponse[]>([]);
  const { subject } = useParams();
  const { score } = useContext(QuestionContext);
  const navigate = useNavigate();
  useEffect(() => {
    const apiData = async () => {
      const response = await axios.get<questionsResponse[]>(
        `http://localhost:3000/ead/${subject}/questions`
      );
      setQuestions(response.data);
    };
    apiData();
  }, [subject]);
  return (
    <Background isVisible={false}>
      <>
      <div className="flex w-full justify-center items-center">
          <ScoreDisplayer value={score.toString()} />
          <TitleH1 text={labels.SAYING_HI_TO_STUDENT} />
        </div>
        <TitleH2
          text={
            questions.length > 0
              ? labels.CHOOSE_QUESTION
              : labels.NO_CLASSES_YET
          }
        />
        {questions.length > 0 && (
          <div className="flex flex-col items-center overflow-y-scroll">
            {questions.map((question) => (
              <SubjectOption
                text={question.title}
                onClick={() => {
                  navigate(`/questao/${subject}/${question.id}/aluno`, {
                    state: question,
                  });
                }}
                key={question.id}
              />
            ))}
          </div>
        )}
        <BottomNavBar />
      </>
    </Background>
  );
};
