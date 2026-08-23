const InvestigateRoom = () => {
  return (
    <div className="flex min-w-75 items-center gap-3 justify-self-center rounded-[10px] border border-case-accent/30 bg-case-base px-5 py-2.5 text-case-accent max-md:hidden">
      <span className="rotate-[-18deg] font-serif text-[34px] leading-none">
        ⌕
      </span>
      <span>
        <strong className="block text-sm tracking-[.06em] uppercase">
          Investigate the room
        </strong>
        <small className="mt-0.5 block font-case-mono text-[11px] normal-case tracking-normal text-case-muted">
          Click an object to inspect it
        </small>
      </span>
    </div>
  );
};

export default InvestigateRoom;
