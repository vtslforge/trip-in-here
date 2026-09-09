import type { Dispatch, SetStateAction } from "react";
import { type SubmitEvent } from "react";
export type toggleType = {
  formStatus?: boolean;
  toggleForm?: () => void;
};

export type useTaskCreationType = {
  inputData: taskValuesType;
  setInputData: Dispatch<SetStateAction<taskValuesType>>;
  handleSave: (e: SubmitEvent<HTMLFormElement>) => void;
  savedData: taskValuesType[];
};

export type taskValuesType = {
  id: string;
  title: string;
  description: string;
  priority: "Normal" | "High" | "Low";
  dueDate: string;
};
