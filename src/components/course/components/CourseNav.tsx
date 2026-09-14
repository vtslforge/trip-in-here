import { type ToggleType } from "../../../shared/hooks/useToggle";

const CourseNav = ({ toggle, toggleUi }: ToggleType) => {
  return (
    <main className="w-full h-40 border flex justify-center items-center">
      CourseNav
      <button onClick={toggleUi} className="border p-3" type="button">
        {toggle ? "hide course" : "show course"}
      </button>
    </main>
  );
};

export default CourseNav;
