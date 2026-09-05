import { useRef } from "react";

const DiscoverCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const DiscoverCards = [
    {
      location: "Kerala",
      image: "/discoverCards/kerala.jpg",
    },
    {
      location: "Goa",
      image: "/discoverCards/Goa.jpg",
    },
    {
      location: "Jaipur",
      image: "/discoverCards/Jaipur.jpg",
    },
    {
      location: "Ladakh",
      image: "/discoverCards/Ladakh.jpg",
    },
    {
      location: "Manali",
      image: "/discoverCards/Manali.jpg",
    },
    {
      location: "Udaipur",
      image: "/discoverCards/Udaipur.jpg",
    },
    {
      location: "Varanasi",
      image: "/discoverCards/Varanasi.jpg",
    },
  ];
  return (
<main className="flex w-full flex-col gap-6 -translate-y-3 rounded-t-lg bg-olive-200 p-4 sm:p-6 md:px-10 lg:flex-row lg:gap-8 lg:px-16 xl:px-20">
  
  {/* Intro */}
  <section className="flex w-full flex-col justify-between py-6 sm:py-8 lg:aspect-square lg:max-w-80 lg:py-10">
    <div>
      <h2 className="text-2xl font-medium leading-tight sm:text-3xl">
        Plan the journey,
        <br />
        live the moment.
      </h2>

      <div className="mt-3 h-px w-12 bg-black" />

      <p className="mt-4 max-w-xs text-xs leading-5 text-neutral-500 sm:text-sm">
        From hidden gems to unforgettable destinations, create a journey
        that feels entirely yours.
      </p>
    </div>

    <div className="mt-6 flex gap-3 lg:mt-0">
      <button
        onClick={scrollLeft}
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-black hover:text-white"
      >
        ←
      </button>

      <button
        onClick={scrollRight}
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-black hover:text-white"
      >
        →
      </button>
    </div>
  </section>

  {/* Cards */}
  <section
    ref={scrollRef}
    className="flex w-full gap-3 overflow-x-auto rounded-2xl scrollbar-hide"
  >
    {DiscoverCards.map((cards) => (
      <div
        key={cards.location}
        style={{ backgroundImage: `url(${cards.image})` }}
        className="relative aspect-square w-[70vw] shrink-0 rounded-2xl bg-cover bg-center bg-no-repeat sm:w-[45vw] md:w-[32vw] lg:w-[25vw] xl:w-[22vw]"
      >
        <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-center text-sm font-medium text-white">
          {cards.location}
        </div>
      </div>
    ))}
  </section>

</main>
  );
};

export default DiscoverCard;
