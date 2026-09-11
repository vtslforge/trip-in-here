import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import {
  useTaskCreation,
  useTaskFilter,
  useToggleForm,
} from "../components/todo/handleTask";

const Layout = () => {
  const toggleFormState = useToggleForm();
  const taskCreationState = useTaskCreation();
  const taskFilterState = useTaskFilter(taskCreationState.savedData);

  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <Outlet
          context={{
            ...toggleFormState,
            ...taskCreationState,
            ...taskFilterState,
          }}
        />
      </main>
    </div>
  );
};

export default Layout;
