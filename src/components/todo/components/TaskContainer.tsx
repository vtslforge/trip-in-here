import Form from "./Form";
import {
  type useTaskCreationType,
  type toggleType,
  type FilterValue,
} from "../taskTypes";

type Props = toggleType &
  useTaskCreationType & {
    filteredData: useTaskCreationType["savedData"];
    filter: FilterValue;
    handleFilter: (filterValue: FilterValue) => void;
  };

const TaskContainer = ({
  formStatus,
  handleSave,
  savedData,
  inputData,
  handleDelete,
  setInputData,
  filteredData,
}: Props) => {
  return (
    <div className="flex h-[83vh] w-full flex-col gap-5 bg-gray-50 p-5 lg:flex-row">
      {/* Tasks */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {filteredData.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-gray-400">No tasks found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredData.map((task) => (
              <div
                key={task.id}
                className="flex min-h-72 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                    {task.title}
                  </h2>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : task.priority === "Normal"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 line-clamp-4 text-sm leading-6 text-gray-500">
                  {task.description || "No description added."}
                </p>

                {/* Bottom section */}
                <div className="mt-auto space-y-3">
                  {/* Due date */}
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                    <span className="text-xs font-medium text-gray-400">
                      Due date
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {task.dueDate || "No due date"}
                    </span>
                  </div>

                  {/* Delete */}
                  <button
                    type="button"
                    onClick={() => handleDelete(task.id)}
                    className="w-full rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form */}
      {formStatus && (
        <aside className="w-full shrink-0 lg:w-80 xl:w-96">
          <div className="h-full overflow-y-auto">
            <Form
              handleDelete={handleDelete}
              savedData={savedData}
              handleSave={handleSave}
              inputData={inputData}
              setInputData={setInputData}
            />
          </div>
        </aside>
      )}
    </div>
  );
};

export default TaskContainer;
