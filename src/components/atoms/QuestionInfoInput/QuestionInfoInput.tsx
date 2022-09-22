import React from "react";
import { questionInput } from "../../../shared/types";

interface IQuestionInfoInputProps {
  text: string;
  setQuestionInfo: React.Dispatch<React.SetStateAction<questionInput>>;
  type: string;
}

export const QuestionInfoInput = ({
  text,
  setQuestionInfo,
  type,
}: IQuestionInfoInputProps): JSX.Element => {
  return (
    <div className="w-4/5 flex  flex-col justify-center my-3">
      <label
        className={`font-montserrat ${
          type === "question" ? "bg-blue-500" : "bg-orange-500"
        } w-[80px] text-center font-bold`}
      >
        {text}
      </label>
      <input
        type="input"
        className="p-3 w-full font-montserrat"
        onChange={(e) => {
          type === "question"
            ? setQuestionInfo((prevState) => ({
                ...prevState,
                question: e.target.value,
              }))
            : setQuestionInfo((prevState) => ({
                ...prevState,
                title: e.target.value,
              }));
        }}
        maxLength={50}
      />
    </div>
  );
};
