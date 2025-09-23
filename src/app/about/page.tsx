import OnMountFlag from "../components/OnMountFlag";
import BackgroundDecor from "../components/background-decor";
import NavBar from "../components/nav-bar";
import Card from "../components/card";

const cardData = [
  { imglink: "/about/venezuela2.png", cardtitle: "VZLA", cardtext: "hello" },
  {
    imglink: "/about/proshot-hc.png",
    cardtitle: "BASKETBALL",
    cardtext: "hello",
  },
  {
    imglink: "/about/proshot-hc.png",
    cardtitle: "TRACK & FIELD",
    cardtext: "hello",
  },
  { imglink: "/about/proshot-hc.png", cardtitle: "UCF", cardtext: "hello" },
  { imglink: "/about/proshot-hc.png", cardtitle: "NOW", cardtext: "hello" },
];

export default function ProjectsPage() {
  return (
    <main className="p-12">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />

      <div className="items-end text-3xl p-10 md:text-5xl font-semibold">
        A little bit about <b className="text-[#5B3A29]">Hector</b>...
      </div>

      <div className="flex flex-col gap-8">
        {cardData.map((card, idx) => (
          <div
            key={card.cardtitle}
            className={`flex ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <Card
              imglink={card.imglink}
              cardtitle={card.cardtitle}
              cardtext={card.cardtext}
            />
          </div>
        ))}
      </div>

      <p className="mt-6 text-lg leading-relaxed">
        I was born in Venezuela. I love sports. Some of my favorites are track &
        field, basketball, and soccer. I'm a person who think about others
        first. I put my family, my girlfriend, and my friends first. I love love
        love trying new dishes. Last but not least I absolute LOVE THE HUSTLE.
        No, literally, that's what I was known for in basketball.{" "}
      </p>
    </main>
  );
}
