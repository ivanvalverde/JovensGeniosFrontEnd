import React from "react";
import Circle from "../Circle";

interface IBackgroundProps {
  children: JSX.Element;
  isVisible: boolean;
}

export const Background = ({
  children,
  isVisible,
}: IBackgroundProps): JSX.Element => {
  return (
    <div className="bg-slate-100 bg-no-repeat bg-cover bg-center bg-fixed h-full">
      {children}
      <div className="absolute top-[40%] w-full">
        {isVisible && (
          <div className="relative w-[210px] h-[200px] mx-auto">
            <Circle tailwindClasses="bg-blue-500 h-[186px] w-[186px] absolute" />

            <Circle tailwindClasses="bg-orange-500 w-[116px] h-[116px] right-[0] bottom-[0] absolute" />
          </div>
        )}
      </div>
    </div>
  );
};
