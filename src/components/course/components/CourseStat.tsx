import type { InputType } from "../hooks/useCourse";

type StatProp = {
  currentWatch: InputType[] | undefined;
  handleCurrentNavAndValue: (course: InputType) => void;
};

const CourseStat = ({ currentWatch, handleCurrentNavAndValue }: StatProp) => {
  return (
    <main className="w-full border border-gray-700 bg-gray-950 p-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-5 text-2xl font-semibold text-white">
          Current Watch
        </h2>

        {currentWatch?.length ? (
          <div className="grid gap-4">
            {currentWatch.map((watch) => (
              <div
                key={watch.id ?? watch.url}
                className="rounded-xl border border-gray-700 bg-gray-900 p-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase text-gray-500">Title</p>
                    <p className="mt-1 text-white">{watch.title}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-500">Category</p>
                    <p className="mt-1 text-white">{watch.category}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-500">
                      Difficulty
                    </p>
                    <p className="mt-1 text-white">{watch.difficulty}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-500">ID</p>
                    <p className="mt-1 truncate text-white">
                      {watch.id ?? "No ID"}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-xs uppercase text-gray-500">
                      Description
                    </p>
                    <p className="mt-1 text-gray-300">
                      {watch.description || "No description"}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-xs uppercase text-gray-500">URL</p>
                    <p className="mt-1 break-all text-gray-300">{watch.url}</p>
                  </div>
                  <button
                    onClick={() => handleCurrentNavAndValue(watch)}
                    className="text-white"
                  >
                    Continue watching
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900 p-8 text-center text-gray-500">
            No course is currently being watched.
          </div>
        )}
      </div>
    </main>
  );
};

export default CourseStat;
