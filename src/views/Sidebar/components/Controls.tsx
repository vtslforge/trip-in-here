const Controls = () => {
  return (
    <section className="mb-2 overflow-hidden rounded-[10px] border border-case-muted/15 bg-case-card">
      <h2 className="m-0 border-b border-case-muted/10 px-4 py-3 text-xs font-bold uppercase tracking-[.07em] text-case-text"><span className="mr-2.5 text-case-accent">⌕</span> Controls</h2>
      <div className="px-4 py-2 font-case-mono text-[10px] text-[#abb4c8]"><p><kbd className="mr-2 bg-transparent text-case-accent">◉</kbd> Click to inspect</p><p><kbd className="mr-2 bg-transparent text-case-accent">⌕</kbd> Zoom / pan</p><p><kbd className="mr-2 bg-transparent text-case-accent">▣</kbd> View case file</p></div>
    </section>
  );
};

export default Controls;
