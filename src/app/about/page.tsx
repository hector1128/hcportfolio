import OnMountFlag from "../components/OnMountFlag";
import BackgroundDecor from "../components/background-decor";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
import Typewriter from "../components/type-writer";

// Data for the cards

const cardData = [
  {
    imglink: "/about/venezuela2.png",
    cardtitle: "VENEZUELA",
    cardtext: "Where my journey begun...",
  },
  {
    imglink: "/about/basketball.jpg",
    cardtitle: "BASKETBALL",
    cardtext: "My love and hate relationship...",
  },
  {
    imglink: "/about/track.jpg",
    cardtitle: "TRACK & FIELD",
    cardtext: "I must be faster, I must be better...",
  },
  {
    imglink: "/about/ucf.jpg",
    cardtitle: "UCF",
    cardtext: "Wait, what do I want to do with my life...",
  },
  {
    imglink: "/about/hectorimg.jpg",
    cardtitle: "NOW",
    cardtext: 'Clicking "Start" in the game of life...',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-0 md:p-12 bg-[#e7dfd8] relative overflow-x-hidden">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />

      <section className="max-w-4xl mx-auto pt-16 pb-8 px-4">
        <div className="flex justify-end">
          <Typewriter
            text={"A little bit about Hector..."}
            design={
              "text-[#5B3A29] text-3xl md:text-5xl font-semibold leading-tight text-left w-full"
            }
          />
          {/*
          <h1 className="text-[#5B3A29] text-3xl md:text-5xl font-semibold text-right leading-tight">
            A little bit about&nbsp;
            <span className="italic font-serif text-[#934530] font-bold">
              Hector
            </span>
            ...
          </h1>
          */}
        </div>
      </section>

      <section className="max-w-4xl mx-auto flex flex-col gap-12 px-2 pb-16">
        {cardData.map((card, idx) => (
          <div
            key={card.cardtitle}
            className={`flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <Card
                imglink={card.imglink}
                cardtitle={card.cardtitle}
                cardtext={card.cardtext}
              />
            </div>
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
