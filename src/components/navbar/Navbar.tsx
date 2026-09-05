import { useUser } from "@clerk/react";

const Navbar = () => {
  const { user } = useUser();

  const firstName = user?.firstName
    ? user.firstName[0].toUpperCase() + user.firstName.slice(1)
    : "Traveler";

  return (
    <div className="absolute z-10 flex h-[5vh] w-screen items-center justify-between px-5 text-white">
      <section className="flex-1">
        <span className="text-lg font-semibold tracking-wide">
          TripInHere
        </span>
      </section>

      <section className="flex flex-1 justify-center gap-8 text-sm font-medium">
        <button className="transition-opacity hover:opacity-70">
          Dashboard
        </button>
        <button className="transition-opacity hover:opacity-70">
          My Trips
        </button>
        <button className="transition-opacity hover:opacity-70">
          Explore
        </button>
      </section>

      <section className="flex flex-1 justify-end">
        <div className="rounded-full border border-white/40 px-4 py-1.5 text-sm backdrop-blur-sm">
          Hello, {firstName}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
