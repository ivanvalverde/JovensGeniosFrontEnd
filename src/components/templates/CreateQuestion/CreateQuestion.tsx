/* eslint-disable no-loop-func */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { labels } from "../../../shared/enums";
import {
  optionQuestion,
  optionSelected,
  questionInput,
} from "../../../shared/types";
import Background from "../../atoms/Background";
import ContinueButton from "../../atoms/ContinueButton";
import QuestionInfoInput from "../../atoms/QuestionInfoInput";
import SubjectSelector from "../../atoms/SubjectSelector";
import TitleH1 from "../../atoms/TitleH1";
import InputAlternative from "../../molecules/InputAlternative";
import BottomNavBar from "../../organisms/BottomNavBar";

export const CreateQuestion = (): JSX.Element => {
  const navigate = useNavigate();
  const [questionInfo, setQuestionInfo] = useState<questionInput>({
    alternatives: [],
    correctAnswer: "",
    question: "",
    title: "",
    subject: "math",
  });
  const [selected, setSelected] = useState<optionSelected>({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  const [options, setOptions] = useState<optionQuestion>({
    a: "",
    b: "",
    c: "",
    d: "",
  });
  const isSubmitBtnDisabled = (): boolean => {
    const { question, subject, title } = questionInfo;
    const { a, b, c, d } = options;
    if (!selected.a && !selected.b && !selected.c && !selected.d) return true;
    if (
      !question.length ||
      !subject.length ||
      !title.length ||
      !a.length ||
      !b.length ||
      !c.length ||
      !d.length
    )
      return true;
    return false;
  };

  const onSubmit = async () => {
    let key: keyof optionSelected;
    let correctAnswer = "";
    let alternatives = [
      `A) ${options.a}`,
      `B) ${options.b}`,
      `C) ${options.c}`,
      `D) ${options.d}`,
    ];
    for (key in selected) {
      if (selected[key]) {
        correctAnswer = `${key.toUpperCase()}) ${options[key]}`;
      }
    }
    setQuestionInfo({
      ...questionInfo,
      alternatives,
      correctAnswer,
    });

    try {
      await axios.post(
        `http://localhost:3000/ead/${questionInfo.subject}/questions/add`,
        {
          title: questionInfo.title,
          question: questionInfo.question,
          correctAnswer,
          alternatives,
        }
      );
      navigate("/questao/criada/sucesso", { state: questionInfo.title });
    } catch (err) {
      navigate("/questao/criada/falha", { state: questionInfo.title });
    }
  };

  return (
    <Background isVisible={false}>
      <>
        <div className="flex flex-col items-center pt-10">
          <TitleH1 text={labels.SAYING_HI_TO_TEACHER} />
          <SubjectSelector setQuestionInfo={setQuestionInfo} />
          <div className="w-full flex mobile:flex-col desktop:flex-row items-center desktop:justify-center">
            <QuestionInfoInput
              setQuestionInfo={setQuestionInfo}
              text={labels.QUESTION}
              type="question"
            />
            <QuestionInfoInput
              setQuestionInfo={setQuestionInfo}
              text={labels.TITLE}
              type="title"
            />
          </div>
          <InputAlternative
            colorOption="bg-blue-500"
            text="A)"
            setOptions={setOptions}
            setSelected={setSelected}
            whichOption="a"
            selected={selected}
          />
          <InputAlternative
            colorOption="bg-orange-500"
            text="B)"
            setOptions={setOptions}
            setSelected={setSelected}
            whichOption="b"
            selected={selected}
          />
          <InputAlternative
            colorOption="bg-blue-500"
            text="C)"
            setOptions={setOptions}
            setSelected={setSelected}
            whichOption="c"
            selected={selected}
          />
          <InputAlternative
            colorOption="bg-orange-500"
            text="D)"
            setOptions={setOptions}
            setSelected={setSelected}
            whichOption="d"
            selected={selected}
          />

          <ContinueButton
            text={labels.SEND_QUESTION}
            onClick={onSubmit}
            disabled={isSubmitBtnDisabled()}
          />
        </div>
        <BottomNavBar />
      </>
    </Background>
  );
};
