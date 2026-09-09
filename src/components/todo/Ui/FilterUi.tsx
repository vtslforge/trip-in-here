export const FilterUi = () => {
  return (
    <div className="flex h-[7vh] w-full items-center justify-between border-b border-gray-200 bg-white px-5">
      {/* Left side */}
      <div>
        <h2 className="text-sm font-semibold text-gray-800">My Tasks</h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <span className="mr-2 text-sm text-gray-500">Filter:</span>

        <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
          All
        </button>

        <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
          High
        </button>

        <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
          Normal
        </button>

        <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
          Low
        </button>
      </div>
    </div>
  );
};
