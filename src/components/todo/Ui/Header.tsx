import type { toggleType } from "../taskTypes";


const Header = ({ toggleForm }: toggleType) => {
  return (
    <header className="flex w-full h-[10vh] items-center justify-between px-6 py-6">
      <h1 className="text-[38px] font-medium tracking-[-2px] text-black">
        Task Space
      </h1>
      <button
        onClick={toggleForm}
        type="button"
        className="flex items-center gap-3 rounded-full bg-black px-4 py-2.5 text-sm text-white transition-opacity hover:opacity-85"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-xl font-light leading-none">
          +
        </span>
        <span>New Task</span>
      </button>
    </header>
  );
};

export default Header;
