const TipCard = () => {
  return (
    <div className="flex h-full min-h-[60px] items-center rounded-[10px] border border-case-muted/15 bg-case-card px-3.5 py-2">
      <div className="mr-3 grid size-[34px] place-items-center rounded-full border border-case-signal/50 text-case-signal">◆</div>
      <p><strong className="block text-xs uppercase tracking-[.06em] text-case-text">Tip</strong><span className="mt-0.5 block text-[11px] text-case-muted">Some clues are hidden. Look closely.</span></p>
    </div>
  );
};

export default TipCard;
