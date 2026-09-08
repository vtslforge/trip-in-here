import type {
  handleTaskCreationType,
  taskValuesType,
  toggleType,
} from "./taskTypes";
import { useState, type SubmitEvent } from "react";

// Function to handle the form toggle functionality
export function usetoggleForm(): toggleType {
  const [formStatus, setformStatus] = useState(false);

  const toggleForm = () => {
    setformStatus((prev) => !prev);
  };

  return { formStatus, toggleForm };
}

// function to handle form data
export function handleTaskCreation(): handleTaskCreationType {
  const [inputData, setInputData] = useState({
    id: "",
    title: "",
  });
  const [savedData, setsavedData] = useState<taskValuesType[]>([]);
  function handleSave(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`data saved ${inputData} and ${savedData}`);
    console.log("input" + inputData, "saved" + savedData);
    setsavedData((prev) => [inputData, ...prev]);
  }
  return { handleSave, inputData, setInputData };
}
