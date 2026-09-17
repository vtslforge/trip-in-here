// import ReactPlayer from 'react-player'
import AddCourse from "../components/course/components/AddCourse";
import CourseLibrary from "../components/course/components/CourseLibrary";
import CourseNav from "../components/course/components/CourseNav";
import CourseStat from "../components/course/components/CourseStat";
import { useCourse } from "../components/course/hooks/useCourse";
import { useToggle } from "../shared/hooks/useToggle";
const Course = () => {
  const { toggle, toggleUi } = useToggle();
  const { handleSave, inputValue, setInputValue, savedCourse } = useCourse();
  return (
    <div className="relative overflow-hidden">
      <CourseNav toggle={toggle} toggleUi={toggleUi} />
      <div className="border flex">
        <div className="bg-gray-800 w-full">
          <CourseStat />
          <CourseLibrary savedCourse={savedCourse} />
        </div>
        {toggle && (
          <div className="h-200 w-1/5 flex justify-center items-center bg-amber-600">
            <AddCourse
              handleSave={handleSave}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        )}
      </div>


    </div>
  );
};

export default Course;
