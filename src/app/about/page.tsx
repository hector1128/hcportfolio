import OnMountFlag from "../components/OnMountFlag";
import BackgroundDecor from "../components/background-decor";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
import Typewriter from "../components/type-writer";
import { cardData } from "../data/about";

export default function AboutPage() {
  return (
    // Keep background + overflow, but constrain content width inside
    <main className="min-h-screen p-12 md:p-12 bg-[#e7dfd8] relative overflow-x-hidden">
      <OnMountFlag />

      {/* Subtle background visuals + navigation */}
      <BackgroundDecor />
      <NavBar />

      {/* ---------- Page Heading ---------- */}

      {/* --- Timeline intro (under the typewriter, above cards) --- */}
      <section className="max-w-4xl mx-auto -mt-1 mb-8 pt-15 px-4 fade-onload">
        <Typewriter
          text={`This is a little timeline that showcases my life up until now. Enjoy
          :)...`}
          design="text-[#5B3A29]/80 text-base md:text-lg leading-relaxed
      bg-[#6f4e37]/[0.06] border border-[#6f4e37]/20
      rounded-xl px-4 py-3 shadow-sm"
        />
        {/* Intro paragraph */}

        {/* subtle divider to separate intro from cards */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#6f4e37]/20 to-transparent mt-4" />
      </section>

      {/* ---------- Cards + Connectors ---------- */}
      {/* Make the wrapper relative so Connector can absolutely position its SVG */}
      <section
        id="about-wrap"
        className="relative max-w-5xl mx-auto flex flex-col gap-16 px-2 pb-24"
      >
        {cardData.map((card, idx) => {
          const rowId = `about-card-${idx}`; // unique id per row used by Connector
          const isEven = idx % 2 === 0;

          return (
            <div
              key={card.cardtitle}
              id={rowId}
              // Stagger left/right on md+ screens; stack on mobile
              className={`flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card column (half width on md+) */}
              <div className="w-full md:w-1/2 flex justify-center">
                {/* Card component handles its own hover flip + “Read more” styles */}
                <Card
                  imglink={card.imglink}
                  cardtitle={card.cardtitle}
                  cardtext={card.cardtext}
                  cardparagraph={card.cardparagraph}
                  highlight={card.highlight}
                />
              </div>

              {/* Spacer column to create the left/right stagger; helps Connector routing */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
