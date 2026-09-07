import HandleTaskUi from "../components/task/HandleTaskUi";
import useToggleCreate from "../components/task/useToggleCreate";
const Task = () => {
  const { handleToggle, toggleCreate } = useToggleCreate();
  return (
    <div className="w-full px-6 py-8 h-full">
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

        <button
          onClick={handleToggle}
          className="flex items-center gap-3 rounded-full border cursor-pointer p-3"
        >
          <span>New Task</span>
        </button>
      </div>

      <HandleTaskUi toggleCreate={toggleCreate} />
    </div>
  );
};

export default Task;
