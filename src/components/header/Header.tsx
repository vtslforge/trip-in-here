const Header = () => {
  return (
    <main className="pt-[5vh] bg-[url('/header/headerBackground-01.jpg')] bg-no-repeat bg-center bg-cover aspect-square sm:aspect-4/3 md:aspect-3/2 lg:aspect-video xl:aspect-16/7 2xl:aspect-16/6">
      <div className="h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 text-white">
        <p className="text-sm sm:text-base mb-3 tracking-wide">
          Plan. Explore. Experience.
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-2xl">
          Your journey,
          <br />
          planned your way.
        </h1>

        <p className="mt-5 text-sm sm:text-base md:text-lg max-w-xl text-white/80">
          Discover destinations, build personalized itineraries, and plan
          unforgettable trips all in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 rounded-full bg-white text-black font-medium">
            Plan a Trip
          </button>

          <button className="px-6 py-3 rounded-full border border-white/60 text-white font-medium">
            Explore Destinations
          </button>
        </div>
      </div>
    </main>
  );
};

export default Header;
