export type subjectsResponse = {
  name: string;
  path: string;
};

export type questionsResponse = {
  id: number;
  question: string;
  title: string;
  alternatives: string[];
  correctAnswer: string;
};

export type svg = {
  width: string;
  height: string;
  viewBox: string;
  svgFill: string;
  xmlns: string;
  d: string;
  pathFill: string;
  selected: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLineCap?: "round" | "inherit" | "butt" | "square" | undefined;
  strokeLineJoin?: "round" | "inherit" | "miter" | "bevel" | undefined;
};

export type question = {
    id: number;
    title: string;
    question: string;
    alternatives: string[];
    correctAnswer: string;
  }
  
