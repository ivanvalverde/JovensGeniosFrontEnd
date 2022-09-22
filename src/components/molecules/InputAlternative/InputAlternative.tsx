import React from "react";
import {
  optionQuestion,
  optionSelected,
  questionInput,
} from "../../../shared/types";

interface IInputAlternativeProps {
  text: string;
  colorOption: string;
  setOptions: React.Dispatch<React.SetStateAction<optionQuestion>>;
  setSelected: React.Dispatch<React.SetStateAction<optionSelected>>;
  whichOption: "a" | "b" | "c" | "d";
  selected: optionSelected;
}

export const InputAlternative = ({
  text,
  colorOption,
  setOptions,
  setSelected,
  whichOption,
  selected,
}: IInputAlternativeProps): JSX.Element => {
  const initialState: optionSelected = {
    a: false,
    b: false,
    c: false,
    d: false,
  };
  return (
    <div className="w-4/5 flex items-center justify-center my-3">
      <button
        className={`p-2 ${colorOption} ${
          selected[whichOption] ? "bg-green-500 border-2 border-black" : ""
        }`}
        onClick={() => {
          setSelected({ ...initialState, [whichOption]: true });
        }}
      >
        <p className="font-bold font-montserrat text-2xl">{text}</p>
      </button>
      <input
        type="input"
        className="p-3 w-full font-montserrat"
        onChange={(e) => {
          setOptions((prevState) => ({
            ...prevState,
            [whichOption]: e.target.value,
          }));
        }}
        maxLength={30}
      />
    </div>
  );
};
