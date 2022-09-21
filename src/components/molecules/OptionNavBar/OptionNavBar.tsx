import React from "react";
import { Link } from "react-router-dom";

interface IOptionNavBarProps {
  text: string;
  colorText: string;
  children: JSX.Element;
  linkTo: string;
}

export const OptionNavBar = ({
  text,
  children,
  linkTo,
  colorText
}: IOptionNavBarProps): JSX.Element => {
  return (
    <div>
      <Link to={linkTo}>
        <div className="flex flex-col w-[20px] items-center m-5">
          {children}
          <p className={`mt-1 font-montserrat font-bold ${colorText}`}>{text}</p>
        </div>
      </Link>
    </div>
  );
};
