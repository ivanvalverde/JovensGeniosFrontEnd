import React from "react";
import { labels } from "../../../shared/enums";
import Background from "../../atoms/Background";
import ProfileOption from "../../atoms/ProfileOption";
import TitleH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";
import BottomNavBar from "../../organisms/BottomNavBar";

export const ChooseActionTeacher = (): JSX.Element => {
  return (
    <Background isVisible={false}>
      <>
        <div className="flex flex-col items-center pt-10">
          <TitleH1 text={labels.SAYING_HI_TO_TEACHER} />
          <TitleH2 text={labels.CHOOSE_ACTION} />
          <ProfileOption text={labels.CREATE_QUESTION} linkTo="/questao/criar" />
        </div>
        <BottomNavBar />
      </>
    </Background>
  );
};
