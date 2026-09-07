const TaskFilter = () => {
  return (
    <div className="mt-10 flex items-center gap-3">
      {/* Search */}
      <button
        className="flex h-11 w-11 items-center justify-center
                     rounded-full border border-gray-200 bg-white
                     transition hover:bg-gray-50"
      />

      {/* Filter */}
      <button
        className="flex h-11 w-11 items-center justify-center
                     rounded-full border border-gray-200 bg-white
                     transition hover:bg-gray-50"
      />

      {/* All */}
      <button className="rounded-full bg-black px-5 py-2.5 text-sm text-white">
        All
      </button>
    </div>
  );
};

export default TaskFilter;
