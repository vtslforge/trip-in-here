import { IntroSence } from "../../../core/chapters/intro/intro";

IntroSence;

const TitleCard = () => {
  return (
    <main className="flex flex-wrap items-baseline gap-x-2">
      <p className="text-[clamp(14px,1.35vw,20px)] font-bold tracking-[.03em] text-case-text">CASE 51</p>
      <p className="text-xs text-case-muted max-[380px]:hidden">{IntroSence.location}</p>
      <p className="hidden">{IntroSence.chapter}</p>
    </main>
  );
};

export default TitleCard;
