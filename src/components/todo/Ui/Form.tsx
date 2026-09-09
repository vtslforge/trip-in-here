import type { useTaskCreationType, taskValuesType } from "../taskTypes";

const Form = ({
  handleSave,
  inputData,
  setInputData,
}: useTaskCreationType) => {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <p className="mb-5 text-xl font-semibold text-gray-800">New Task</p>

      <form onSubmit={handleSave} className="flex flex-col gap-4">
        {/* User input for task title */}
        <input
          required
          onChange={(e) =>
            setInputData((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
          type="text"
          placeholder="Task title"
          className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
        />
        {/* user input for task description */}
        <input
          required
          onChange={(e) =>
            setInputData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          type="text"
          placeholder="Enter description"
          className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
        />
        {/* input for task priority */}
        <select
          value={inputData.priority}
          onChange={(e) =>
            setInputData((prev) => ({
              ...prev,
              priority: e.target.value as taskValuesType["priority"],
            }))
          }
          className="rounded-lg border p-2"
        >
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        {/* user date selection */}
        <input
          type="date"
          value={inputData.dueDate}
          onChange={(e) =>
            setInputData((prev) => ({
              ...prev,
              dueDate: e.target.value,
            }))
          }
          className="rounded-lg border p-2"
        />
        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-[0.98]"
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

export default Form;
