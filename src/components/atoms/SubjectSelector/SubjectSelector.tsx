import React from "react";
import { labels } from "../../../shared/enums";
import { questionInput } from "../../../shared/types";

interface ISubjectSelectorProps {
  setQuestionInfo: React.Dispatch<React.SetStateAction<questionInput>>;
}

export const SubjectSelector = ({
  setQuestionInfo,
}: ISubjectSelectorProps): JSX.Element => {
  return (
    <div className="w-4/5 my-3">
      <select
        className="font-montserrat p-3 w-full text-xl font-medium"
        onChange={(e) => {
            setQuestionInfo((prevState) => ({...prevState, subject: e.target.value }))
        }}
      >
        <option value="math">{labels.MATH}</option>
        <option value="science">{labels.SCIENCE}</option>
        <option value="portuguese">{labels.PORTUGUESE}</option>
        <option value="history">{labels.HISTORY}</option>
        <option value="geography">{labels.GEOGRAPHY}</option>
        <option value="arts">{labels.ARTS}</option>
      </select>
    </div>
  );
};
