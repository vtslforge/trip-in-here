import { useClerk, useUser } from "@clerk/react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import DiscoverCard from "../../components/discover-card/DiscoverCard";
const Home = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  async function handleSignout() {
    await signOut();
  }
  return (
    <main>
      <Navbar/>
      <Header/>
      <DiscoverCard/>
      Home
      <div onClick={handleSignout}>Sign out</div>
      <p>hello {user?.firstName}</p>
      <p>hello {user?.username}</p>
      <p>hello {user?.id}</p>
    </main>
  );
};

export default Home;
