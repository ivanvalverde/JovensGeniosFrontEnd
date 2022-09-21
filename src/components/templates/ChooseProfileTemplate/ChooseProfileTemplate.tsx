import React from "react";
import { labels } from "../../../shared/enums";
import Background from "../../atoms/Background";
import ProfileOption from "../../atoms/ProfileOption";
import TitleH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";

export const ChooseProfileTemplate = (): JSX.Element => {
  return (
    <Background isVisible>
      <>
        <TitleH1 text={labels.WELCOMING_MESSAGE} />
        <TitleH2 text={labels.DEFINING_ACCESS} />
        <div className="flex flex-col items-center">
          <ProfileOption text={labels.TEACHER} linkTo="/area/professor" />
          <ProfileOption text={labels.STUDENT} linkTo="/area/aluno" />
        </div>
      </>
    </Background>
  );
};
