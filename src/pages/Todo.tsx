import { handleTaskCreation } from "../components/todo/handleTask";
import { usetoggleForm } from "../components/todo/handleTask";
import Header from "../components/todo/Header";
import TaskContainer from "../components/todo/TaskContainer";

const Todo = () => {
  const { toggleForm, formStatus } = usetoggleForm();
  const { handleSave, inputData, setInputData } = handleTaskCreation();
  return (
    <div className="w-full h-full">
      <Header toggleForm={toggleForm} />
      <TaskContainer
        formStatus={formStatus}
        handleSave={handleSave}
        inputData={inputData}
        setInputData={setInputData}
      />
    </div>
  );
};

export default Todo;
