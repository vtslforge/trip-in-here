import type {
  useTaskCreationType,
  taskValuesType,
  toggleType,
  FilterValue,
} from "./taskTypes";

import { useEffect, useState, type SubmitEvent } from "react";

/*
 * -----------------------------------------------------------------------------------
 * Function to handle the toggle of the form UI
 * -----------------------------------------------------------------------------------
 */

export function useToggleForm(): toggleType {
  const [formStatus, setFormStatus] = useState(false);

  function toggleForm() {
    setFormStatus((prev) => !prev);
  }

  return {
    formStatus,
    toggleForm,
  };
}

/*
 * -----------------------------------------------------------------------------------
 * Function to handle task data and save it to savedData
 * -----------------------------------------------------------------------------------
 */

export function useTaskCreation(): useTaskCreationType {
  const [inputData, setInputData] = useState<taskValuesType>({
    id: "",
    title: "",
    description: "",
    priority: "Normal",
    dueDate: "-",
  });

  const [savedData, setSavedData] = useState<taskValuesType[]>(() => {
    const savedTasks = localStorage.getItem("savedData");

    if (!savedTasks) {
      return [];
    }

    try {
      return JSON.parse(savedTasks);
    } catch {
      return [];
    }
  });

  // Save tasks to localStorage whenever savedData changes

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(savedData));
  }, [savedData]);

  // Handle task creation

  function handleSave(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask: taskValuesType = {
      ...inputData,
      id: crypto.randomUUID(),
    };

    setSavedData((prev) => [newTask, ...prev]);

    // Reset form after saving

    setInputData({
      id: "",
      title: "",
      description: "",
      priority: "Normal",
      dueDate: "-",
    });
  }

  // Handle task deletion
  function handleDelete(id: string) {
    setSavedData((prev) => prev.filter((task) => task.id !== id));
  }

  return {
    handleSave,
    inputData,
    setInputData,
    savedData,
    handleDelete,
  };
}

/*
 * -----------------------------------------------------------------------------------
 * Function to handle task filtering
 * -----------------------------------------------------------------------------------
 */

export function useTaskFilter(tasks: taskValuesType[]) {
  const filters: FilterValue[] = ["All", "High", "Normal", "Low"];
  const [filter, setFilter] = useState<FilterValue>("All");
  function handleFilter(filterValue: FilterValue) {
    setFilter(filterValue);
  }

  const filteredData = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    }

    return task.priority === filter;
  });

  return {
    filters,
    filter,
    handleFilter,
    filteredData,
  };
}


