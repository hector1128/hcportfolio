import Card from "../components/card";
import Typewriter from "../components/type-writer";
import { cardData } from "../data/about";

export const metadata = {
  title: "About",
  description: "A timeline of my life and experiences. Enjoy...",
};

function DateBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-surface/90 px-2 py-1 text-sm font-medium text-brand">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="page-shell relative min-h-screen overflow-x-hidden">
      {/* ---------- Intro ---------- */}
      <section className="fade-onload mx-auto mb-8 max-w-4xl pt-8">
        <Typewriter
          text={`This is a little timeline that showcases my life up until now. Enjoy :)...`}
          design="text-ink/80 text-body leading-relaxed min-h-[5rem] sm:min-h-[3.5rem]
                  bg-brand/[0.06] border border-brand/20 rounded-xl px-4 py-3 shadow-sm"
        />
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      </section>

      {/* ---------- Timeline ---------- */}
      <section
        id="about-wrap"
        className="relative mx-auto flex max-w-5xl flex-col gap-8 pb-8 md:gap-16"
      >
        {/* Rail: hugs the left edge on mobile, centred at md+ */}
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[5px] z-0 w-px bg-brand/30 md:left-1/2 md:-translate-x-1/2"
        />

        {cardData.map((card, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={card.cardtitle}
              id={`about-card-${idx}`}
              className={[
                "relative z-10 flex flex-col pl-8 md:flex-row md:items-center md:pl-0",
                isEven ? "md:flex-row" : "md:flex-row-reverse",
              ].join(" ")}
            >
              {/* Dot — left rail on mobile, centre rail at md+ */}
              <div
                aria-hidden
                className="absolute top-1 left-0 z-20 h-[11px] w-[11px] rounded-full bg-brand ring-4 ring-surface
                           md:top-1/2 md:left-1/2 md:h-4 md:w-4 md:-translate-x-1/2 md:-translate-y-1/2"
              />

              {/* Date — in flow above the card on mobile (this was missing
                  entirely before), floated beside the rail at md+ */}
              <div className="mb-3 md:hidden">
                <DateBadge>{card.carddate ?? "YYYY"}</DateBadge>
              </div>
              <div
                aria-hidden
                className={[
                  "absolute top-1/2 z-20 hidden -translate-y-1/2 md:flex",
                  isEven ? "left-1/2 ml-6" : "left-1/2 -ml-6 -translate-x-full",
                ].join(" ")}
              >
                <DateBadge>{card.carddate ?? "YYYY"}</DateBadge>
              </div>

              {/* Card */}
              <div className="flex w-full justify-center md:w-1/2">
                <Card
                  imglink={card.imglink}
                  cardtitle={card.cardtitle}
                  cardtext={card.cardtext}
                  cardparagraph={card.cardparagraph}
                  highlight={card.highlight}
                />
              </div>

              {/* Spacer for the md+ stagger */}
              <div className="hidden w-1/2 md:block" />
            </div>
          );
        })}
      </section>
    </main>
  );
}
