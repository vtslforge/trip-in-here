import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import {
  useTaskCreation,
  useTaskFilter,
  useToggleForm,
} from "../components/todo/handleTask";
import { useStat } from "../components/course/hooks/useLibrary";

const Layout = () => {
  const toggleFormState = useToggleForm();
  const taskCreationState = useTaskCreation();
  const taskFilterState = useTaskFilter(taskCreationState.savedData);
  const currentWatch = useStat();

  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <Outlet
          context={{
            ...toggleFormState,
            ...taskCreationState,
            ...taskFilterState,
            ...currentWatch,
          }}
        />
      </main>
    </div>
  );
};

export default Layout;
