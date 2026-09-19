import { useOutletContext } from "react-router-dom";
import Header from "../components/dashboard/components/Header";
import PriorityTask from "../components/dashboard/components/PriorityTask";
import type { TodoOutletContext } from "../components/todo/taskTypes";
import CourseStat from "../components/course/components/CourseStat";
import type { UseStatType } from "../components/course/hooks/useLibrary";

const Dashboard = () => {
  const { savedData } = useOutletContext<TodoOutletContext>();
  const { currentWatch, handleCurrentNavAndValue } = useOutletContext<UseStatType>();
  return (
    <div className="flex flex-col w-full">
      <Header />
      <PriorityTask tasks={savedData} />
      <CourseStat  handleCurrentNavAndValue={handleCurrentNavAndValue}  currentWatch={currentWatch} />
    </div>
  );
};

export default Dashboard;
