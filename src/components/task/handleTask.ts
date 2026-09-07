import { useEffect, useState, type SubmitEvent } from "react";
import type { TaskType } from "./taskTypes";

export function taskCreater() {
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    priority: "Normal" as TaskType["priority"],
    dueDate: "",
  });

  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleSave(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask: TaskType = {
      id: crypto.randomUUID(),
      ...taskForm,
    };

    setTasks((prev) => [newTask, ...prev]);

    setTaskForm({
      title: "",
      description: "",
      priority: "Normal",
      dueDate: "",
    });
  }

  return {
    taskForm,
    setTaskForm,
    tasks,
    setTasks,
    handleSave,
  };
}