export type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: "Normal" | "High" | "Low";
  dueDate: string;
};