import InvestigateRoom from "./InvestigateRoom";
import NavActions from "./NavActions";
import TitleCard from "./TitleCard";

const NavbarContent = () => {
  return (
    <nav className="grid h-[12vh] min-h-18.5 grid-cols-[1fr_auto_1fr] items-center gap-6 border-b border-case-accent/20 bg-case-panel px-[clamp(18px,2.6vw,38px)] font-ui max-md:grid-cols-[1fr_auto] max-md:gap-4 max-md:px-5 max-[700px]:h-auto max-[700px]:min-h-17 max-[700px]:px-4 max-[380px]:px-3">
      <div>
        <TitleCard />
        <span className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[.12em] text-case-muted max-[700px]:hidden">
          <i className="size-1.5 rounded-full bg-case-accent shadow-[0_0_9px_rgba(118,227,211,.55)]" />{" "}
          Investigation active
        </span>
      </div>
      <InvestigateRoom />
      <NavActions />
    </nav>
  );
};

export default NavbarContent;
