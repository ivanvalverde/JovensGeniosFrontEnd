import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { labels } from "../../../shared/enums";
import { svgs } from "../../../shared/svgs";
import Background from "../../atoms/Background";
import ContinueButton from "../../atoms/ContinueButton";
import Icon from "../../atoms/Icon";
import QuestionDisplayer from "../../atoms/QuestionDisplayer";
import TitleH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";

export const SomethingWentWrong = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const onContinue = () => {
    navigate("/area/professor");
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
          <TitleH1 text={labels.SOMETHING_WENT_WRONG} />
          <TitleH2 text={labels.TRY_AGAIN} />
          <ContinueButton text={labels.CONTINUE} onClick={onContinue} />
        </div>
      </>
    </Background>
  );
};
