import axios from "axios";
import React, { createContext, useEffect, useMemo, useState } from "react";

interface QuestionContextProps {
  setQuestionListLength: React.Dispatch<React.SetStateAction<number>>;
  selected: { [key: string]: boolean };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  initialSelectedState: { [key: string]: boolean };
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}
interface IQuestionProvider {
  children: JSX.Element;
}
const QuestionContext = createContext<QuestionContextProps>(
  {} as QuestionContextProps
);

const QuestionProvider = ({ children }: IQuestionProvider): JSX.Element => {
  const [questionListLength, setQuestionListLength] = useState<number>(0);
  const [score, setScore] = useState(0);
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

  useEffect(() => {
    const scoreResponse = async () => {
      const response = await axios.get<number>(
        "http://localhost:3000/aluno/experience"
      );
      setScore(response.data);
    };
    scoreResponse();
  }, [score]);

  return (
    <QuestionContext.Provider
      value={{
        selected,
        setQuestionListLength,
        setSelected,
        initialSelectedState: initialState,
        score,
        setScore,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
