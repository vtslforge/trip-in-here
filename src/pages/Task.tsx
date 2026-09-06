import { useState, type SubmitEvent } from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  priority: "Normal" | "High" | "Low";
  dueDate: string;
};

const Task = () => {
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    priority: "Normal" as Task["priority"],
    dueDate: "",
  });

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleSave(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...taskForm,
    };

    setTasks((prev) => [...prev, newTask]);

    setTaskForm({
      title: "",
      description: "",
      priority: "Normal",
      dueDate: "",
    });
    console.log(tasks);
  }

  return (
    <div className="w-full px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-6">
        {/* Title */}
        <div className="flex items-center gap-4">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full
                       border border-gray-200 bg-white text-xl
                       shadow-sm transition hover:bg-gray-50"
          >
            ←
          </button>

          <h1 className="text-5xl font-medium tracking-tight text-black">
            TaskDesk
          </h1>
        </div>

        {/* New Task */}
        <button
          className="flex items-center gap-3 rounded-full
                     bg-black px-5 py-3 text-sm font-medium text-white
                     transition hover:scale-[1.02] hover:bg-gray-800"
        >
          <span className="text-xl font-light">+</span>
          <span>New Task</span>
        </button>
      </div>

      {/* Filters */}
      <div className="mt-10 flex items-center gap-3">
        {/* Search */}
        <button
          className="flex h-11 w-11 items-center justify-center
                     rounded-full border border-gray-200 bg-white
                     transition hover:bg-gray-50"
        />

        {/* Filter */}
        <button
          className="flex h-11 w-11 items-center justify-center
                     rounded-full border border-gray-200 bg-white
                     transition hover:bg-gray-50"
        />

        {/* All */}
        <button className="rounded-full bg-black px-5 py-2.5 text-sm text-white">
          All
        </button>
      </div>

      {/* Task Deck */}
      <section className="mt-10 flex gap-4">
        {/* Existing Tasks */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="aspect-square h-60 rounded-2xl border p-3"
          >
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.priority}</p>
            <p>{task.dueDate}</p>
          </div>
        ))}

        {/* New Task Form */}
        <div className="flex flex-col rounded-2xl border p-3">
          <p>New Card</p>
          <form onSubmit={handleSave} className="flex flex-col">
            <input
              required
              value={taskForm.title}
              onChange={(e) =>
                setTaskForm((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              type="text"
              placeholder="Enter title"
              className="border"
            />

            <input
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              type="text"
              placeholder="Provide description"
              className="border"
            />

            <select
              value={taskForm.priority}
              onChange={(e) =>
                setTaskForm((prev) => ({
                  ...prev,
                  priority: e.target.value as Task["priority"],
                }))
              }
            >
              <option value="High">High</option>
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
            </select>

            <input
              type="date"
              value={taskForm.dueDate}
              onChange={(e) =>
                setTaskForm((prev) => ({
                  ...prev,
                  dueDate: e.target.value,
                }))
              }
            />

            <button type="submit" className="border p-3">
              Save Card
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Task;
