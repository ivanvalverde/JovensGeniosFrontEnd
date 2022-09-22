import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { labels } from "../../../shared/enums";
import { svgs } from "../../../shared/svgs";
import Background from "../../atoms/Background";
import ContinueButton from "../../atoms/ContinueButton";
import Icon from "../../atoms/Icon";
import QuestionDisplayer from "../../atoms/QuestionDisplayer";
import TitleH1 from "../../atoms/TitleH1";
import TitlteH2 from "../../atoms/TitleH2";

export const WrongAnswer = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/area/aluno");
  };
  const { ex } = svgs;
  return (
    <Background isVisible={false}>
      <>
        <div className="flex flex-col items-center pt-10">
          <QuestionDisplayer text={location.state} />
          <div className="bg-red-500 rounded-full w-[200px] h-[200px] flex items-center justify-center mt-[60px]">
            <Icon
              height={ex.height}
              width={ex.width}
              viewBox={ex.viewBox}
              d={ex.d}
              pathFill={ex.pathFill}
              svgFill={ex.svgFill}
              xmlns={ex.xmlns}
              stroke={ex.stroke}
              strokeLineJoin={ex.strokeLineJoin}
              strokeLinecap={ex.strokeLineCap}
              strokeWidth={ex.strokeWidth}
            />
          </div>
          <div className="mt-[100px] z-20">
            <TitleH1 text={labels.YOU_ARE_WRONG} />
          </div>
          <div className="mb-[30px] z-20">
            <TitlteH2 text={labels.TRY_AGAIN} />
          </div>
          <ContinueButton text={labels.CONTINUE} onClick={onBack} />
        </div>
      </>
    </Background>
  );
};
