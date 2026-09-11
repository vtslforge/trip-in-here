import { useOutletContext } from "react-router-dom";
import Header from "../components/dashboard/components/Header";
import PriorityTask from "../components/dashboard/components/PriorityTask";
import type { TodoOutletContext } from "../components/todo/taskTypes";

const Dashboard = () => {
  const { savedData } = useOutletContext<TodoOutletContext>();

  return (
    <div className="flex flex-col w-full">
      <Header />
      <PriorityTask tasks={savedData} />
    </div>
  );
};

export default Dashboard;
