import React, { createContext, useMemo, useState } from "react";

interface QuestionContextProps {
  setQuestionListLength: React.Dispatch<React.SetStateAction<number>>;
  selected: { [key: string]: boolean };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  initialSelectedState: { [key: string]: boolean };
}
interface IQuestionProvider {
  children: JSX.Element;
}
const QuestionContext = createContext<QuestionContextProps>(
  {} as QuestionContextProps
);

const QuestionProvider = ({ children }: IQuestionProvider): JSX.Element => {
  const [questionListLength, setQuestionListLength] = useState<number>(0);
  const initialState = useMemo(() => {
    const alternativesList: { [key: string]: boolean } = {};
    for (let i = 0; i < questionListLength; i++) {
      alternativesList[i] = false;
    }
    return alternativesList;
  }, [questionListLength]);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>(
    initialState
  );
  return (
    <QuestionContext.Provider
      value={{
        selected,
        setQuestionListLength,
        setSelected,
        initialSelectedState: initialState,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
