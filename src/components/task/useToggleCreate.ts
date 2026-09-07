import { useState } from "react";

type ToggleType = {
  toggleCreate: boolean;
  handleToggle: () => void;
};

const useToggleCreate = (): ToggleType => {
  const [toggleCreate, setToggleCreate] = useState<boolean>(false);

  function handleToggle() {
    setToggleCreate((prev) => !prev);
  }

  return {
    handleToggle,
    toggleCreate,
  };
};

export default useToggleCreate;