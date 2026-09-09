import Form from "./Form";
import { type useTaskCreationType, type toggleType } from "../taskTypes";

type props = toggleType & useTaskCreationType;
const TaskContainer = ({
  formStatus,
  handleSave,
  savedData,
  inputData,
  setInputData,
}: props) => {
  return (
    <div className="flex h-[83vh] w-full gap-6 bg-gray-50 p-5">
      {/* Cards section */}

      <div className="min-h-0 flex-1 overflow-y-auto pr-2">
        <div className="grid grid-cols-1 content-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {savedData.map((savedItems) => (
            <div
              key={savedItems.id}
              className="group flex min-h-72 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                  {savedItems.title}
                </h2>

                {/* Priority */}
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                    savedItems.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : savedItems.priority === "Normal"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {savedItems.priority}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 line-clamp-4 text-sm leading-6 text-gray-500">
                {savedItems.description || "No description added."}
              </p>

              {/* Due date */}
              <div className="mt-auto flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                <span className="text-xs font-medium text-gray-400">
                  Due date
                </span>

                <span className="text-sm font-medium text-gray-700">
                  {savedItems.dueDate || "No due date"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Task */}
      {formStatus && (
        <Form
          savedData={savedData}
          handleSave={handleSave}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}
    </div>
  );
};

export default TaskContainer;
