import { useUser } from "@clerk/react";

function userData() {
  const { user } = useUser();
  const username = user?.firstName;
  return username;
}

export default userData