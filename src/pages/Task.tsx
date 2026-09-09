import { useTaskCreation } from "../components/todo/handleTask";
import { usetoggleForm } from "../components/todo/handleTask";
import { FilterUi } from "../components/todo/Ui/FilterUi";
import Header from "../components/todo/Ui/Header";
import TaskContainer from "../components/todo/Ui/TaskContainer";

const Todo = () => {
  const { toggleForm, formStatus } = usetoggleForm();
  const { handleSave, inputData, setInputData, savedData } =
    useTaskCreation();
  return (
    <div className="w-full h-full">
      <Header toggleForm={toggleForm} />
      <FilterUi/>
      <TaskContainer
        formStatus={formStatus}
        handleSave={handleSave}
        inputData={inputData}
        setInputData={setInputData}
        savedData={savedData}
      />
    </div>
  );
};

export default Todo;
