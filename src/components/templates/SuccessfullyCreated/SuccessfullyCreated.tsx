import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { labels } from "../../../shared/enums";
import { svgs } from "../../../shared/svgs";
import Background from "../../atoms/Background";
import ContinueButton from "../../atoms/ContinueButton";
import Icon from "../../atoms/Icon";
import QuestionDisplayer from "../../atoms/QuestionDisplayer";
import TitlteH1 from "../../atoms/TitleH1";
import TitlteH2 from "../../atoms/TitleH2";

export const SuccessfullyCreated = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { thumbsUpIcon } = svgs;

  const onContinue = (): void => {
    navigate("/area/professor");
  };

  return (
    <Background isVisible={false}>
      <>
        <div className="flex flex-col items-center pt-10">
          <QuestionDisplayer text={location.state} />
          <div className="bg-orange-500 rounded-full w-[200px] h-[200px] my-20 flex items-center justify-center animate-bounce">
            <Icon
              height={thumbsUpIcon.height}
              width={thumbsUpIcon.width}
              viewBox={thumbsUpIcon.viewBox}
              d={thumbsUpIcon.d}
              pathFill={thumbsUpIcon.pathFill}
              svgFill={thumbsUpIcon.svgFill}
              xmlns={thumbsUpIcon.xmlns}
              stroke={thumbsUpIcon.stroke}
              strokeLineJoin={thumbsUpIcon.strokeLineJoin}
              strokeLinecap={thumbsUpIcon.strokeLineCap}
              strokeWidth={thumbsUpIcon.strokeWidth}
            />
          </div>
          <TitlteH1 text={labels.SUCCESSFULY_CREATED_QUESTION} />
          <TitlteH2 text={labels.AVAILABLE_ON_STUDENT_CLASSES} />
          <ContinueButton text={labels.CONTINUE} onClick={onContinue} />
        </div>
      </>
    </Background>
  );
};
