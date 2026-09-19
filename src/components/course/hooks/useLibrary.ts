import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { InputType } from "./useCourse";
import { useNavigate } from "react-router-dom";

export type UseStatType = {
  currentWatch: InputType[] | undefined;
  setCurrentWatch: Dispatch<SetStateAction<InputType[] | undefined>>;
  handleCurrentNavAndValue: (course: InputType) => void;
};

export function useStat(): UseStatType {
  // state to store the current watch library arrays
  const [currentWatch, setCurrentWatch] = useState<InputType[] | undefined>(
    () => {
      const currentWatch = localStorage.getItem("currentWatch");
      if (!currentWatch) {
        return [];
      }
      try {
        return JSON.parse(currentWatch);
      } catch {
        return [];
      }
    },
  );

  useEffect(() => {
    localStorage.setItem("currentWatch", JSON.stringify(currentWatch));
  }, [currentWatch]);

  // button to navigate to recent watching video and also to handle the store the state of current watch component in dashboard
  const navigate = useNavigate();
  function handleCurrentNavAndValue(course: InputType) {
    const selectedCourse = [course];
    setCurrentWatch(selectedCourse);
    navigate(`/player/${encodeURIComponent(course.url)}`);
  }
  
  return {
    currentWatch,
    setCurrentWatch,
    handleCurrentNavAndValue,
  };
}
