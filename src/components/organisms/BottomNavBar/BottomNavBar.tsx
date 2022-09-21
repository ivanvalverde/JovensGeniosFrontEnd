import React from "react";
import OptionNavBar from "../../molecules/OptionNavBar";
import { labels } from "../../../shared/enums";
import Icon from "../../atoms/Icon";
import { svgs } from "../../../shared/svgs";

export const BottomNavBar = (): JSX.Element => {
  const { classIcon, backIcon, leaveIcon } = svgs;
  return (
    <div className="bg-white fixed bottom-0 h-[80px] w-full flex items-center justify-around rounded-lg z-20">
      <OptionNavBar
        children={
          <Icon
            height={classIcon.height}
            width={classIcon.width}
            viewBox={classIcon.viewBox}
            d={classIcon.d}
            pathFill={classIcon.selected}
            svgFill={classIcon.svgFill}
            xmlns={classIcon.xmlns}
          />
        }
        text={labels.CLASS}
        colorText={"text-blue-500"}
        linkTo="/area/aluno"
      />
      <OptionNavBar
        children={
          <Icon
            height={backIcon.height}
            width={backIcon.width}
            viewBox={backIcon.viewBox}
            d={backIcon.d}
            pathFill={backIcon.pathFill}
            svgFill={backIcon.svgFill}
            xmlns={backIcon.xmlns}
            stroke={backIcon.stroke}
            strokeLineJoin={backIcon.strokeLineJoin}
            strokeLinecap={backIcon.strokeLineCap}
            strokeWidth={backIcon.strokeWidth}
          />
        }
        text={labels.BACK}
        linkTo="/area/aluno"
      />
      <OptionNavBar
        children={
          <Icon
            height={leaveIcon.height}
            width={leaveIcon.width}
            viewBox={leaveIcon.viewBox}
            d={leaveIcon.d}
            pathFill={leaveIcon.pathFill}
            svgFill={leaveIcon.svgFill}
            xmlns={leaveIcon.xmlns}
            stroke={leaveIcon.stroke}
            strokeLineJoin={leaveIcon.strokeLineJoin}
            strokeLinecap={leaveIcon.strokeLineCap}
            strokeWidth={leaveIcon.strokeWidth}
          />
        }
        text={labels.EXIT}
        linkTo="/"
      />
    </div>
  );
};
