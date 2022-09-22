import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { labels } from "../../../shared/enums";
import { subjectsResponse } from "../../../shared/types";
import Background from "../../atoms/Background";
import ProfileOption from "../../atoms/ProfileOption";
import ScoreDisplayer from "../../atoms/ScoreDisplayer";
import TitleH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";
import { QuestionContext } from "../../context/QuestionContext";
import BottomNavBar from "../../organisms/BottomNavBar";

export const ChooseSubjectStudent = (): JSX.Element => {
  const [subjects, setSubjects] = useState<subjectsResponse[]>([]);
  const { score } = useContext(QuestionContext);
  useEffect(() => {
    const apiData = async () => {
      const response = await axios.get<subjectsResponse[]>(
        "http://localhost:3000/ead/subjects"
      );
      setSubjects(response.data);
    };
    apiData();
  }, []);
  return (
    <Background isVisible={!subjects.length}>
      <>
        <div className="flex w-full justify-center items-center">
          <ScoreDisplayer value={score.toString()} />
          <TitleH1 text={labels.SAYING_HI_TO_STUDENT} />
        </div>
        <TitleH2
          text={
            subjects.length > 0 ? labels.CHOOSE_SUBJECT : labels.NO_SUBJECTS_YET
          }
        />
        {subjects.length > 0 && (
          <div className="flex flex-col items-center overflow-y-scroll">
            {subjects.map((subject) => (
              <ProfileOption
                text={subject.name}
                linkTo={`/questao/${subject.path}/aluno`}
                key={subject.path}
              />
            ))}
          </div>
        )}
        <BottomNavBar />
      </>
    </Background>
  );
};
