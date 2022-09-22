import React from "react";
import ChooseActionTeacher from "../templates/ChooseActionTeacher";
import ChooseProfileTemplate from "../templates/ChooseProfileTemplate";
import ChooseQuestionStudent from "../templates/ChooseQuestionStudent";
import ChooseSubjectStudent from "../templates/ChooseSubjectStudent";
import CorrectAnswer from "../templates/CorrectAnswer";
import CreateQuestion from "../templates/CreateQuestion";
import Question from "../templates/Question";
import SomethingWentWrong from "../templates/SomethingWentWrong";
import SuccessfullyCreated from "../templates/SuccessfullyCreated";
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
    path: "/area/professor",
    element: <ChooseActionTeacher />,
  },

  {
    path: "/questao/criar",
    element: <CreateQuestion />,
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
  {
    path: "/questao/criada/sucesso",
    element: <SuccessfullyCreated />,
  },
  {
    path: "/erro",
    element: <SomethingWentWrong />,
  },
];
