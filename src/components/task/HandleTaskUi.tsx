import { taskCreater } from "./handleTask";
import { type TaskType } from "./taskTypes";

type HandleTaskUiProps = {
  toggleCreate: boolean;
};

const HandleTaskUi = ({ toggleCreate }: HandleTaskUiProps) => {
  const { handleSave, setTaskForm, taskForm, tasks } = taskCreater();

  return (
    <section className="mt-12 h-[calc(100vh-180px)] overflow-hidden">
      <div className="flex h-full gap-4">

        {/* Notes */}
        <div className="min-w-0 flex-1 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="aspect-square rounded-2xl border p-3"
              >
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>{task.priority}</p>
                <p>{task.dueDate}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Task Window */}
        {toggleCreate && (
          <div className="sticky top-0 h-fit w-80 shrink-0 rounded-2xl border p-4">
            <p className="mb-4 text-lg font-semibold">New Task</p>

            <form onSubmit={handleSave} className="flex flex-col gap-3">
              {/* Title */}
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
                className="rounded-lg border p-2"
              />

              {/* Description */}
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
                className="rounded-lg border p-2"
              />

              {/* Priority */}
              <select
                value={taskForm.priority}
                onChange={(e) =>
                  setTaskForm((prev) => ({
                    ...prev,
                    priority: e.target.value as TaskType["priority"],
                  }))
                }
                className="rounded-lg border p-2"
              >
                <option value="High">High</option>
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
              </select>

              {/* Due Date */}
              <input
                type="date"
                value={taskForm.dueDate}
                onChange={(e) =>
                  setTaskForm((prev) => ({
                    ...prev,
                    dueDate: e.target.value,
                  }))
                }
                className="rounded-lg border p-2"
              />

              {/* Save */}
              <button
                type="submit"
                className="rounded-lg border p-3"
              >
                Save Card
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
};

export default HandleTaskUi;