import React from "react";

interface ISuccessMessageProps {
  text: string;
  tailwindClasses?: string;
}

export const SuccessMessage = ({
  text,
  tailwindClasses,
}: ISuccessMessageProps): JSX.Element => {
  return (
    <h1
      className={`font-bold font-montserrat text-3xl text-center p-5 z-20 ${tailwindClasses}`}
    >
      {text}
    </h1>
  );
};
