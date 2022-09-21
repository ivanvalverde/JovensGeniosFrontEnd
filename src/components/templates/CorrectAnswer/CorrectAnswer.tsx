import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Background from "../../atoms/Background";
import QuestionDisplayer from "../../atoms/QuestionDisplayer";
import Confetti from "react-confetti";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SuccessShapes from "../../molecules/SuccessShapes";
import TitlteH1 from "../../atoms/TitleH1";
import TitlteH2 from "../../atoms/TitleH2";
import { labels } from "../../../shared/enums";
import ContinueButton from "../../atoms/ContinueButton";

export const CorrectAnswer = (): JSX.Element => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/area/aluno");
  };

  return (
    <Background isVisible={false}>
      <>
        <div className="flex flex-col items-center pt-10">
          <Confetti width={Number(width)} height={Number(height) - 20} />
          <QuestionDisplayer text={location.state} />
          <SuccessShapes />
          <div className="mt-[100px] z-20">
            <TitlteH1 text={labels.YOU_ARE_INCREDIBLE} />
          </div>
          <div className="mb-[30px] z-20">
            <TitlteH2 text={labels.CONGRATZ} />
          </div>

          <ContinueButton text={labels.CONTINUE} onClick={onBack} />
        </div>
      </>
    </Background>
  );
};
