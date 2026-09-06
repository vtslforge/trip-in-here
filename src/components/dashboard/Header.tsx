import userData from "./hooks/useCurrentUser";

const Header = () => {
  const username = userData();
  return (
    <header className="flex items-start justify-between px-8 py-8 border w-full">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Course Dashboard</h1>

        <p className="mt-2 text-base text-gray-500">Welcome, {username}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 shadow-sm hover:bg-gray-50">
          ⚙
        </button>

        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 shadow-sm hover:bg-gray-50">
          ⌕
        </button>

        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 shadow-sm hover:bg-gray-50">
          ♧
        </button>

        <button className="h-8 rounded-md bg-black px-5 text-xs font-medium text-white hover:bg-gray-800">
          +Add New
        </button>
      </div>
    </header>
  );
};

export default Header;
