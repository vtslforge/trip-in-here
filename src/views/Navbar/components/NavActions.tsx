const NavActions = () => {
  return (
    <div className="flex justify-self-end gap-2.5 max-[700px]:gap-1.5">
      <button
        className="cursor-pointer rounded-lg border border-case-muted/20 bg-case-card px-4.5 py-3 text-xs uppercase tracking-[.06em] text-case-text transition hover:-translate-y-px hover:border-case-accent/70 hover:bg-[#222b3e] max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:text-[10px] max-[380px]:text-[0px]"
        type="button"
      >
        <span className="mr-2 text-case-accent max-[700px]:mr-1 max-[380px]:m-0 max-[380px]:text-sm">
          ▣
        </span>
        Case file
      </button>
      <button
        className="cursor-pointer rounded-lg border border-case-muted/20 bg-case-card px-4.5 py-3 text-xs uppercase tracking-[.06em] text-case-text transition hover:-translate-y-px hover:border-case-accent/70 hover:bg-[#222b3e] max-[700px]:px-2.5 max-[700px]:py-2 max-[700px]:text-[10px]"
        type="button"
      >
        <span className="mr-2 text-case-accent max-[700px]:mr-1">☰</span> Menu
      </button>
    </div>
  );
};

export default NavActions;
