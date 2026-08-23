const CaseInfo = () => {
  return (
    <section className="mb-2 overflow-hidden rounded-[10px] border border-case-muted/15 bg-case-card">
      <h2 className="m-0 border-b border-case-muted/10 px-4 py-3 text-xs font-bold uppercase tracking-[.07em] text-case-text"><span className="mr-2.5 text-case-accent">▣</span> Case info</h2>
      <div className="px-4 py-2.5 font-case-mono text-[11px] leading-7 text-[#abb4c8]">
        <p>Hotel Royal Palace <em className="not-italic text-case-signal">·</em> Room 302</p>
        <p>Victim: <b className="font-medium text-[#edf0f7]">Daniel Harper</b></p>
        <p>Disappeared: <b className="font-medium text-[#edf0f7]">11:42 PM</b></p>
        <p>Date: <b className="font-medium text-[#edf0f7]">May 12, 2024</b></p>
      </div>
    </section>
  );
};

export default CaseInfo;
