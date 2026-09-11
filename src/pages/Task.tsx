import { FilterUi } from "../components/todo/components/FilterUi";
import Header from "../components/todo/components/Header";
import TaskContainer from "../components/todo/components/TaskContainer";
import { useOutletContext } from "react-router-dom";
import type { TodoOutletContext } from "../components/todo/taskTypes";

const Todo = () => {
  const {
    toggleForm,
    formStatus,
    handleSave,
    inputData,
    setInputData,
    savedData,
    handleDelete,
    filter,
    handleFilter,
    filteredData,
    filters,
  } = useOutletContext<TodoOutletContext>();

  return (
    <div className="h-full w-full">
      <Header toggleForm={toggleForm} />
      <FilterUi filter={filter} handleFilter={handleFilter} filters={filters} />
      <TaskContainer
        handleDelete={handleDelete}
        formStatus={formStatus}
        handleSave={handleSave}
        inputData={inputData}
        setInputData={setInputData}
        savedData={savedData}
        filteredData={filteredData}
        filter={filter}
        handleFilter={handleFilter}
      />
    </div>
  );
};

export default Todo;
