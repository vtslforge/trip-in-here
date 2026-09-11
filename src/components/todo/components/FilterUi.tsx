import type { FilterValue } from "../taskTypes";

type FilterUiProps = {
  filter: FilterValue;
  filters: FilterValue[];
  handleFilter: (filterValue: FilterValue) => void;
};

export const FilterUi = ({ filter, handleFilter, filters }: FilterUiProps) => {
  return (
    <div className="flex h-[7vh] w-full items-center justify-between border-b border-gray-200 bg-white px-5">
      {/* Left side */}
      <div>
        <h2 className="text-sm font-semibold text-gray-800">My Tasks</h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <span className="mr-2 text-sm text-gray-500">Filter:</span>

        {filters.map((filterValue) => (
          <button
            key={filterValue}
            type="button"
            onClick={() => handleFilter(filterValue)}
            className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
              filter === filterValue
                ? "border-gray-800 bg-gray-800 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {filterValue}
          </button>
        ))}
      </div>
    </div>
  );
};
