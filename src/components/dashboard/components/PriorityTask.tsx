import { type PriorityTaskProps } from "../dashboardTypes";

const priorityOrder = { High: 0, Normal: 1, Low: 2 } as const;

const PriorityTask = ({ tasks }: PriorityTaskProps) => {
  const priorityTasks = [...tasks]
    .sort((firstTask, secondTask) => {
      return (
        priorityOrder[firstTask.priority] - priorityOrder[secondTask.priority]
      );
    })
    .slice(0, 5);

  return (
    <section className="w-full border px-8 py-8">
      <h2 className="text-lg font-semibold">Priority Tasks</h2>

      <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
        {priorityTasks.length === 0 ? (
          <p className="text-sm text-gray-500">No tasks found.</p>
        ) : (
          priorityTasks.map((task) => (
            <article
              key={task.id}
              className=" aspect-square flex min-w-72 shrink-0 flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4"
            >
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-gray-900">
                  {task.title}
                </h3>

                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {task.description || "No description added."}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-gray-500">
                  {task.dueDate || "No due date"}
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
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
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default PriorityTask;
