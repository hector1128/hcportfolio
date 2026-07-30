export type AboutCard = {
  imglink: string;
  cardtitle: string;
  cardtext: string;
  cardparagraph: string;
  highlight: string[];
  carddate: string;
};

export const cardData: AboutCard[] = [
  {
    imglink: "/about/venezuela2.PNG",
    cardtitle: "VENEZUELA",
    cardtext: "Where my journey began...",
    cardparagraph:
      "Oh man... Despite its current situation, I love Venezuela. The nostalgia comes from the vivid, beautiful memories of my childhood. We moved to the U.S. when I was ten. My family saught new opportunities for my sister and I in the US, deciding it was best for our future. I’m a firm believer that everything happens for a reason, so I have nothing but gratitude to my parents for taking that step. Leaving home was hard, but it shaped who I am today.",
    highlight: ["South America", "New beginnings", "Family-first", "Resilience", "First Gen"],
    carddate: "2006–2016",
  },
  {
    imglink: "/about/usa.jpg", // replace with your image: e.g. flag, skyline, or airport photo
    cardtitle: "UNITED STATES",
    cardtext: "Adapting, learning, and finding my voice",
    cardparagraph:
      "The culture change was strange to a young Hector. I battled culture shock, accents, and a sense of starting from zero. But day by day, I learned, listened, and adapted. Adapting taught me a lot of valuable lessons and is part of my identity as a latino. That early transition taught me how to handle pressure, communicate across differences, and keep moving forward, even when everything felt unfamiliar.",
    highlight: ["Adaptation", "ESL & culture shock", "Grit", "Community", "Growth mindset"],
    carddate: "2016–2018",
  },
  {
    imglink: "/about/track.jpg",
    cardtitle: "SPORTS",
    cardtext: "Pressure, pace, perform...",
    cardparagraph:
      "What didn't change was my love for sports. I grew up playing lots, but most of my friends and early memories come from basketball. However, basketball here was on another level. I went from being one of the best in my area to starting on the bench. This taught me how to work, lift, and compete to win. I was always giving it my all in practice, especially on conditioning days. This energy carried me into distance running. I began in middle school as conditioning for basketball, but made the full transition from basketball my sophomore year. Running taught me how to be consistent and manage my time effectively. Logging 40–50 miles a week while balancing AP classes and a social life was no easy task. I would not be where I am today if it wasn't for the experience of playing sports.",
    highlight: ["Teamwork", "Discipline", "Perseverance", "Consistency", "Competitive drive"],
    carddate: "2012–2024",
  },
  {
    imglink: "/about/ucf.jpg",
    cardtitle: "FINDING PURPOSE",
    cardtext: "From a fishbowl to an ocean",
    cardparagraph:
      "Senior year of high school was a turning point for me. College was right around the corner, and I had no idea what to do or even where to apply. I’ve always had a curious mind and a love for technology. After some research, I found computer science. It felt like a perfect fit: problem-solving, creativity, and endless possibilities. I applied to UCF, got in, and was introduced to the world of coding. The more I learned, the more I realized how much there was to explore and fell in love with it. The field of programming opened up a whole new world for me, like a fishgoing from a fishbowl to an ocean.",
    highlight: ["Computer Science", "Algorithms & DS", "Projects & internships", "Software fundamentals"],
    carddate: "2024–2025",
  },
  {
    imglink: "/about/hectorimg.jpg",
    cardtitle: "NOW",
    cardtext: 'Clicking "Start" in the game of life...',
    cardparagraph:
      "Here I am, a software engineer in the making—fueled by curiosity and a drive to build cool stuff. Now it feels like everything is a new challenge, a puzzle to solve, and an opportunity to grow. I want to use new technololgies and AI to create tools that make life easier and more meaningful for others. Outside of coding, I’m big on staying active, spending time with friends and family, and just enjoying life. The journey’s just starting, and I’m excited for what’s next.",
    highlight: ["Software developer", "Continuous learning", "New technologies", "Active lifestyle", "Family & friends"],
    carddate: "2025...",
  },
];
