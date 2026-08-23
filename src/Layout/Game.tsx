import Footer from "./Footer";
import GameScreen from "./GameScreen";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

const Game = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-case-base font-ui text-case-text">
      <Navbar />
      <div className="flex max-[700px]:flex-col">
        <GameScreen />
        <SideBar />
      </div>
      <Footer />
    </main>
  );
};

export default Game;
