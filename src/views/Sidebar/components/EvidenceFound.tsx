const EvidenceFound = () => {
  return (
    <section className="mb-2 overflow-hidden rounded-[10px] border border-case-muted/15 bg-case-card">
      <h2 className="m-0 border-b border-case-muted/10 px-4 py-3 text-xs font-bold uppercase tracking-[.07em] text-case-text"><span className="mr-2.5 text-case-accent">◇</span> Evidence found <small className="text-[11px] text-case-muted">(0/8)</small></h2>
      <div className="grid grid-cols-4 gap-2 p-3.5" aria-label="Eight evidence slots">
        {Array.from({ length: 8 }, (_, index) => <div className="grid h-11 place-items-center rounded-md border border-dashed border-case-muted/25 text-lg font-bold text-case-muted/35" key={index}>?</div>)}
      </div>
    </section>
  );
};

export default EvidenceFound;
