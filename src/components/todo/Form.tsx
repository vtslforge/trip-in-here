import type { handleTaskCreationType } from "./taskTypes";

const Form = ({
  handleSave,
  inputData,
  setInputData,
}: handleTaskCreationType) => {
  return (
    <div className="border p-6 w-100">
      <p>Fill the form</p>
      <form onSubmit={handleSave} className="flex flex-col">
        <input
          onChange={(e) =>
            setInputData((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
          type="text"
          placeholder="Enter task name"
          className="border"
        />
        <button type="submit" className="border">
          save
        </button>
      </form>
    </div>
  );
};

export default Form;
