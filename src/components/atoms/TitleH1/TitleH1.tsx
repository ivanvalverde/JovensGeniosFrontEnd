import React from "react";

interface ITitleH1Props {
  text: string;
}

export const TitleH1 = ({ text }: ITitleH1Props): JSX.Element => {
  return <h1 className="font-bold text-black font-montserrat text-2xl text-center p-5 z-10">{text}</h1>;
};
