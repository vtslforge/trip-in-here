import ProgressCard from "./ProgressCard";
import TipCard from "./TipCard";

const FooterContent = () => {
  return (
    <footer className="grid h-[12vh] min-h-18 grid-cols-[minmax(250px,1fr)_minmax(280px,2.2fr)_minmax(220px,1fr)] items-center gap-3.5 border-t border-case-muted/15 bg-case-panel p-[9px_20px] font-ui max-md:grid-cols-[1fr_1.3fr] max-[700px]:h-auto max-[700px]:min-h-0 max-[700px]:grid-cols-1 max-[700px]:gap-2 max-[700px]:p-3">
      <TipCard />
      <ProgressCard />
      <button
        className="w-full cursor-pointer rounded-lg border border-case-muted/20 bg-case-card px-2 py-3.5 text-xs uppercase tracking-[.06em] text-case-text transition hover:-translate-y-px hover:border-case-accent/70 hover:bg-[#222b3e] max-md:hidden max-[700px]:block"
        type="button"
      >
        <span className="mr-2 text-case-accent">⌘</span> Investigation board
      </button>
    </footer>
  );
};

export default FooterContent;
