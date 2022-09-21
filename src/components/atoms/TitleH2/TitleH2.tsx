import React from "react";

interface ITitleH2Props {
  text: string;
}

export const TitleH2 = ({ text }: ITitleH2Props): JSX.Element => {
  return (
    <div className="font-bold text-neutral-500 font-montserrat text-xl text-center p-5 z-10">
      {text}
    </div>
  );
};
