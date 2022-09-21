import React from "react";
import OptionNavBar from "../../molecules/OptionNavBar";
import { labels } from "../../../shared/enums";
import Icon from "../../atoms/Icon";
import { svgs } from "../../../shared/svgs";
import { useLocation } from "react-router-dom";

export const BottomNavBar = (): JSX.Element => {
  const { classIcon, configIcon, friendsIcon } = svgs;
  const location = useLocation();
  const isClass = location.pathname === "/area/aluno";
  return (
    <div className="bg-white fixed bottom-0 h-[80px] w-full flex items-center justify-around rounded-lg z-20">
      <OptionNavBar
        children={
          <Icon
            height={classIcon.height}
            width={classIcon.width}
            viewBox={classIcon.viewBox}
            d={classIcon.d}
            pathFill={isClass ? classIcon.selected : classIcon.pathFill}
            svgFill={classIcon.svgFill}
            xmlns={classIcon.xmlns}
          />
        }
        text={labels.CLASS}
        colorText={isClass ? "text-blue-500": ""}
        linkTo="/area/aluno"
      />
      <OptionNavBar
        children={
          <Icon
            height={friendsIcon.height}
            width={friendsIcon.width}
            viewBox={friendsIcon.viewBox}
            d={friendsIcon.d}
            pathFill={friendsIcon.pathFill}
            svgFill={friendsIcon.svgFill}
            xmlns={friendsIcon.xmlns}
          />
        }
        text={labels.FRIENDS}
        colorText={isClass ? "": ""}
        linkTo="/area/aluno"
      />
      <OptionNavBar
        children={
          <Icon
            height={configIcon.height}
            width={configIcon.width}
            viewBox={configIcon.viewBox}
            d={configIcon.d}
            pathFill={configIcon.pathFill}
            svgFill={configIcon.svgFill}
            xmlns={configIcon.xmlns}
          />
        }
        text={labels.CONFIG}
        colorText={isClass ? "": ""}
        linkTo="/area/aluno"
      />
    </div>
  );
};
