import axios from "axios";
import React, { useEffect, useState } from "react";
import { labels } from "../../../shared/enums";
import { subjectsResponse } from "../../../shared/types";
import Background from "../../atoms/Background";
import ProfileOption from "../../atoms/ProfileOption";
import TitlteH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";
import BottomNavBar from "../../organisms/BottomNavBar";

export const ChooseSubjectStudent = (): JSX.Element => {
  const [subjects, setSubjects] = useState<subjectsResponse[]>([]);
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
        <TitlteH1 text={labels.SAYING_HI_TO_STUDENT} />
        <TitleH2 text={labels.CHOOSE_SUBJECT} />
        <div className="flex flex-col items-center overflow-y-scroll">
          {subjects.map((subject) => (
            <ProfileOption
              text={subject.name}
              linkTo={`/questao/${subject.path}/aluno`}
              key={subject.path}
            />
          ))}
        </div>
        <BottomNavBar />
      </>
    </Background>
  );
};
