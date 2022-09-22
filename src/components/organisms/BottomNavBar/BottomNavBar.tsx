import React from "react";
import OptionNavBar from "../../molecules/OptionNavBar";
import { labels } from "../../../shared/enums";
import Icon from "../../atoms/Icon";
import { svgs } from "../../../shared/svgs";
import { useLocation } from "react-router-dom";

export const BottomNavBar = (): JSX.Element => {
  const { classIcon, backIcon, leaveIcon, capIcon } = svgs;
  const location = useLocation();
  const isStudent = location.pathname.includes("aluno");
  return (
    <div className="bg-white fixed bottom-0 h-[80px] w-full flex items-center justify-around rounded-lg z-20">
      <OptionNavBar
        children={
          <Icon
            height={isStudent ? classIcon.height : capIcon.height}
            width={isStudent ? classIcon.width : capIcon.width}
            viewBox={isStudent ? classIcon.viewBox : capIcon.viewBox}
            d={isStudent ? classIcon.d : capIcon.d}
            pathFill={isStudent ? classIcon.selected : capIcon.selected}
            svgFill={isStudent ? classIcon.svgFill : capIcon.svgFill}
            xmlns={isStudent ? classIcon.xmlns : capIcon.xmlns}
          />
        }
        text={isStudent ? labels.CLASS : labels.TEACH}
        colorText={"text-blue-500"}
        linkTo={isStudent ? "/area/aluno" : "/area/professor"}
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
        linkTo={isStudent ? "/area/aluno" : "/area/professor"}
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
