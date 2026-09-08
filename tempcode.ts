import { useState } from "react";

export function useNewTask() {
  const [formStatus, setformStatus] = useState(false);

  const toggleForm = () => {
    setformStatus((prev) => !prev);
    console.log(formStatus)
  };

  return { formStatus, toggleForm };
}
import { useNewTask } from "./handleTask";

const Header = () => {
  const { toggleForm } = useNewTask();
  return (
    <header className="flex w-full items-center justify-between px-6 py-6">
      <h1 className="text-[38px] font-medium tracking-[-2px] text-black">
        Task Space
      </h1>
      <button
        onClick={toggleForm}
        type="button"
        className="flex items-center gap-3 rounded-full bg-black px-4 py-2.5 text-sm text-white transition-opacity hover:opacity-85"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-xl font-light leading-none">
          +
        </span>
        <span>New Task</span>
      </button>
    </header>
  );
};

export default Header;
i want to use {.... && ... } here to show the form const ShowTask = () => {
  return (
    <div className="mt-10 border-t-4 w-full">
        
      <div>Will be shows on click of button from header</div>
    </div>
  );
};

export default ShowTask;
