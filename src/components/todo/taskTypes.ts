import type { Dispatch, SetStateAction } from "react";
import type { useTaskCreation, useTaskFilter, useToggleForm } from "./handleTask";

export type Priority = "High" | "Normal" | "Low";

export type FilterValue = "All" | Priority;

export type taskValuesType = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
};

export type toggleType = {
  formStatus?: boolean;
  toggleForm?: () => void;
};

export type useTaskCreationType = {
  inputData: taskValuesType;
  setInputData: Dispatch<SetStateAction<taskValuesType>>;
  savedData: taskValuesType[];
  handleSave: (e: React.SubmitEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
};

export type TodoOutletContext = ReturnType<typeof useToggleForm> &
  ReturnType<typeof useTaskCreation> &
  ReturnType<typeof useTaskFilter>;