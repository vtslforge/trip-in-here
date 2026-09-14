import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react";

export type Category =
  | "None"
  | "Programming"
  | "Life Skill"
  | "Design"
  | "Business"
  | "Custom";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type InputType = {
  id?: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
};

export type UseCourseType = {
  inputValue: InputType;
  handleSave: (e: SubmitEvent<HTMLFormElement>) => void;
  setInputValue: Dispatch<SetStateAction<InputType>>;
};

export function useCourse() {
  const [inputValue, setInputValue] = useState<InputType>({
    title: "",
    description: "",
    category: "None",
    difficulty: "Beginner",
  });

  function handleSave(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputValue);
  }

  return {
    inputValue,
    setInputValue,
    handleSave,
  };
}
