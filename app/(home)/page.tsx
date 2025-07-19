import ContentNev from "./components/ContentNav";
import Hero from "./components/Hero";
import End from "./components/End";

import Journey from "./components/Journey";

export default function HomePage() {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4 z-2 lg:py-8">
      <div
        style={{
          background:
            "repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)",
        }}
      >
        <Hero />
        {/* <UwuHero /> */}
        {/* <Feedback />
        <Introduction /> */}

        <ContentNev />

        <div
          className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, var(--color-primary), var(--color-fd-secondary), var(--color-fd-secondary), var(--color-fd-secondary), var(--color-fd-secondary), var(--color-fd-background) 30%)",
          }}
        >
          <h2
            lang="th"
            className="text-center leading-snug text-2xl font-semibold sm:text-3xl"
          >
            อตฺตานํ ทมยนฺติ ปณฺฑิตา.
            <br />
            บัณฑิตย่อมฝึกตน ฯ
          </h2>
        </div>
        {/* 
        <Features />
        <Highlights />
        <Why />
        <Contributing />
        */}
        <Journey />
        <End />
      </div>
    </main>
  );
}


