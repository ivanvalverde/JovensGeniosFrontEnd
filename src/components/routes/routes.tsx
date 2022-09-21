import React from "react";
import ChooseProfileTemplate from "../templates/ChooseProfileTemplate";
import ChooseQuestionStudent from "../templates/ChooseQuestionStudent";
import ChooseSubjectStudent from "../templates/ChooseSubjectStudent";
import CorrectAnswer from "../templates/CorrectAnswer";
import Question from "../templates/Question";
import WrongAnswer from "../templates/WrongAnswer";

export const routes = [
  {
    path: "/",
    element: <ChooseProfileTemplate />,
  },
  {
    path: "/area/aluno",
    element: <ChooseSubjectStudent />,
  },
  {
    path: "/questao/:subject/aluno",
    element: <ChooseQuestionStudent />,
  },
  {
    path: "/questao/:subject/:id/aluno",
    element: <Question />,
  },
  {
    path: "/questao/correta",
    element: <CorrectAnswer />,
  },
  {
    path: "/questao/errada",
    element: <WrongAnswer />,
  },
];
