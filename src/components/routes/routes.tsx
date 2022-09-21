import React from "react";
import ChooseProfileTemplate from "../templates/ChooseProfileTemplate";
import ChooseQuestionStudent from "../templates/ChooseQuestionStudent";
import ChooseSubjectStudent from "../templates/ChooseSubjectStudent";
import Question from "../templates/Question";

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
];
