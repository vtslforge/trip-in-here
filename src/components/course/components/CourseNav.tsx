import type { InputType } from "../hooks/useCourse";

type NavProp = {
  savedCourse: InputType[];
  toggle: boolean;
  toggleUi: () => void;
};

const CourseNav = ({ toggle, toggleUi, savedCourse }: NavProp) => {
  return (
    <main className="w-full h-40 border flex justify-center items-center">
      CourseNav
      <button onClick={toggleUi} className="border p-3" type="button">
        {toggle ? "hide course" : "show course"}
      </button>
      <p>Total courses : {savedCourse.length}</p>
    </main>
  );
};

export default CourseNav;
