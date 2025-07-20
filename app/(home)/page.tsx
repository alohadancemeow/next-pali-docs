import ContentNev from "./components/ContentNav";
import Hero from "./components/Hero";
import End from "./components/End";
import Journey from "./components/Journey";
import Highlights from "./components/Hightlights";
import Break from "./components/Break";

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

        <Break word="อตฺตานํ ทมยนฺติ ปณฺฑิตา." meaning="บัณฑิตย่อมฝึกตน ฯ" />
        {/* 
        <Features />
        <Why />
        <Contributing />
        */}
        <Journey />
        <Break
          word="โยคา เว ชายเต ภูริ."
          meaning="ปัญญา ย่อมเกิดขึ้น เพราะการฝึกฝน ฯ"
        />
        <Highlights />
        <End />
      </div>
    </main>
  );
}
