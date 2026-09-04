import { useClerk, useUser } from "@clerk/react";
const Home = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  async function handleSignout() {
    await signOut();
  }
  return (
    <div>
      Home
      <div onClick={handleSignout}>Sign out</div>
      <p>hello {user?.firstName}</p>
      <p>hello {user?.username}</p>
      <p>hello {user?.id}</p>
    </div>
  );
};

export default Home;
