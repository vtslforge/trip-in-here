import type {
  useTaskCreationType,
  taskValuesType,
  toggleType,
} from "./taskTypes";
import { useEffect, useState, type SubmitEvent } from "react";

/* 
-----------------------------------------------------------------------------------
function to handle the toggle of the form UI
-----------------------------------------------------------------------------------
*/
export function usetoggleForm(): toggleType {
  const [formStatus, setformStatus] = useState(false);

  const toggleForm = () => {
    setformStatus((prev) => !prev);
  };

  return { formStatus, toggleForm };
}
/* 
-----------------------------------------------------------------------------------
function to handle form data data and save it to the savedData state
-----------------------------------------------------------------------------------
*/
export function useTaskCreation(): useTaskCreationType {
  const [inputData, setInputData] = useState<taskValuesType>({
    id: "",
    title: "",
    description: "",
    priority: "Normal",
    dueDate: "-",
  });

  const [savedData, setsavedData] = useState<taskValuesType[]>(() => {
    const savedTasks = localStorage.getItem("savedData");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(savedData));
  }, [savedData]);

  // handle save function to save the input data to the savedData state
  function handleSave(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const handleUUId = crypto.randomUUID();
    const newTaskWithID = {
      ...inputData,
      id: handleUUId,
    };
    setsavedData((prev) => [newTaskWithID, ...prev]);
  }
  return { handleSave, inputData, setInputData, savedData };
}

