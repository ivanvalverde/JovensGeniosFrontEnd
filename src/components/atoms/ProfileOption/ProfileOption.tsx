import React from "react";
import { Link } from "react-router-dom";
import Circle from "../Circle";

interface IProfileOptionProps {
  text: string;
  linkTo: string;
}

export const ProfileOption = ({
  text,
  linkTo,
}: IProfileOptionProps): JSX.Element => {
  return (
    <button className="bg-white p-3 m-3 rounded-lg w-4/5 z-10">
      <Link to={linkTo} className="font-bold text-lg">
        <div className="flex">
          <Circle tailwindClasses="bg-blue-500 h-[25px] w-[25px] block" />
          <p className="ml-5 font-bold font-montserrat">{text}</p>
        </div>
      </Link>
    </button>
  );
};
