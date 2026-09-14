import { useState } from "react";

export type ToggleType = {
  toggleUi: () => void;
  toggle: boolean;
};

export function useToggle(): ToggleType {
  const [toggle, setToggle] = useState(false);

  const toggleUi = () => {
    setToggle((prev) => !prev);
  };

  return { toggleUi, toggle };
}
