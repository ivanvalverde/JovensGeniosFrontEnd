import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { labels } from "../../../shared/enums";
import { questionsResponse } from "../../../shared/types";
import Background from "../../atoms/Background";
import SubjectOption from "../../atoms/SubjectOption";
import TitlteH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";
import BottomNavBar from "../../organisms/BottomNavBar";

export const ChooseQuestionStudent = (): JSX.Element => {
  const [questions, setQuestions] = useState<questionsResponse[]>([]);
  const { subject } = useParams();
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
        <TitlteH1 text={labels.SAYING_HI_TO_STUDENT} />
        <TitleH2 text={labels.CHOOSE_QUESTION} />
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
        <BottomNavBar />
      </>
    </Background>
  );
};
