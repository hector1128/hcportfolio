import OnMountFlag from "../components/OnMountFlag";
import BackgroundDecor from "../components/background-decor";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
import Typewriter from "../components/type-writer";

// Data for the cards (keep titles unique; they're used as keys/ids in this page)
const cardData = [
  {
    imglink: "/about/venezuela2.png",
    cardtitle: "VENEZUELA",
    cardtext: "Where my journey begun...",
    cardparagraph:
      "I was born in Venezuela, a beautiful country in South America. I lived there until I was 8 years old. My family and I moved to the United States in search of better opportunities and a brighter future. Leaving my home country was a difficult decision, but it was one that has shaped who I am today.",
  },
  {
    imglink: "/about/basketball.jpg",
    cardtitle: "BASKETBALL",
    cardtext: "My love and hate relationship...",
    cardparagraph:
      "Basketball has been a significant part of my life since I was a child. I started playing when I was 10 years old and quickly fell in love with the sport. Over the years, I've played for various teams and have had the opportunity to compete at different levels. Basketball has taught me valuable lessons about teamwork, discipline, and perseverance.",
  },
  {
    imglink: "/about/track.jpg",
    cardtitle: "TRACK & FIELD",
    cardtext: "I must be faster, I must be better...",
    cardparagraph:
      "In addition to basketball, I also participated in track and field during my high school years. I specialized in sprinting events, which required a different set of skills and training compared to basketball. Track and field helped me improve my speed, agility, and overall fitness. It also provided a great way to stay active and healthy.",
  },
  {
    imglink: "/about/ucf.jpg",
    cardtitle: "UCF",
    cardtext: "Wait, what do I want to do with my life...",
    cardparagraph:
      "I attended the University of Central Florida (UCF) for my undergraduate studies. UCF is a large public university located in Orlando, Florida. During my time at UCF, I pursued a degree in Computer Science. The coursework was challenging, but it provided me with a solid foundation in programming, algorithms, and software development. I also had the opportunity to work on various projects and internships that helped me gain practical experience in the field.",
  },
  {
    imglink: "/about/hectorimg.jpg",
    cardtitle: "NOW",
    cardtext: 'Clicking "Start" in the game of life...',
    cardparagraph:
      "Currently, I am working as a software developer. I enjoy the challenges and opportunities that come with this profession. I am constantly learning new technologies and improving my skills. In my free time, I like to explore new hobbies, spend time with friends and family, and continue playing basketball and staying active.",
  },
];

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
