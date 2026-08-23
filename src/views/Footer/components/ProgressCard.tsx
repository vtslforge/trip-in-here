const ProgressCard = () => {
  return (
    <div className="h-full min-h-[60px] rounded-[10px] border border-case-muted/15 bg-case-card px-[18px] py-2">
      <div className="flex justify-between"><strong className="block text-xs uppercase tracking-[.06em] text-case-text">Progress: 0%</strong><span className="mt-0.5 block text-[11px] text-case-muted">0 of 8 clues documented</span></div>
      <div className="mt-2 h-2 overflow-hidden rounded-full border border-case-muted/20 bg-case-base"><i className="block h-full w-0 bg-case-accent" /></div>
    </div>
  );
};

export default ProgressCard;
