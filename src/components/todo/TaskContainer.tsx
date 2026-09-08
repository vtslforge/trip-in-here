import Form from "./Form";
import { type handleTaskCreationType, type toggleType } from "./taskTypes";

type props = toggleType & handleTaskCreationType;
const TaskContainer = ({
  formStatus,
  handleSave,
  inputData,
  setInputData,
}: props) => {
  return (
    <div className="h-[90vh] overflow-y-scroll border w-full">
      <div>Will be shows on click of button from header</div>
      {formStatus && (
        <Form
          handleSave={handleSave}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}
    </div>
  );
};

export default TaskContainer;
