import type { Dispatch, SetStateAction } from "react";
import {type SubmitEvent } from "react";
export type toggleType = {
  formStatus?: boolean;
  toggleForm?: () => void;
};

 export type handleTaskCreationType = {
//   handleSave?: () => void;
  inputData: taskValuesType;
  setInputData: Dispatch<SetStateAction<taskValuesType>>;
  handleSave: (e: SubmitEvent<HTMLFormElement>) => void;
  
};

export type taskValuesType = {
  id: string;
  title: string;
  //   description: string;
  //   priority: "Normal" | "High" | "Low";
  //   dueDate: string;
};