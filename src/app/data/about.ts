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
      "Oh man... Despite its current situation, I love Venezuela. Part of what makes it so beautiful to me is the nostalgia of being young there. I spent ten years in my home country until my family sought new opportunities in the U.S. I’m a firm believer that everything happens for a reason, so I have nothing but gratitude to my parents for taking that step. Leaving home was hard, but it shaped who I am today.",
    highlight: ["South America", "New beginnings", "Family-first", "Resilience", "First Gen"],
    carddate: "2006–2016",
  },
  {
    imglink: "/about/usa.jpg", // replace with your image: e.g. flag, skyline, or airport photo
    cardtitle: "UNITED STATES",
    cardtext: "Adapting, learning, and finding my voice",
    cardparagraph:
      "Landing in the U.S. felt like switching languages mid-game—new culture, new rules, same me. I battled culture shock, accents, and a sense of starting from zero. But day by day, I learned, listened, and adapted. Teachers, teammates, and my family kept me grounded. That early transition taught me how to handle pressure, communicate across differences, and keep moving forward—even when everything felt unfamiliar.",
    highlight: ["Adaptation", "ESL & culture shock", "Grit", "Community", "Growth mindset"],
    carddate: "2016–2018",
  },
  {
    imglink: "/about/track.jpg",
    cardtitle: "SPORTS",
    cardtext: "Pressure, pace, perform...",
    cardparagraph:
      "Basketball raised me. Most of my friends and early memories are on the court. After moving to the U.S., I grew nervous, and the pressure from coaches and my dad led me to fall out of love with sports. However, it taught me how to work, lift, and compete. I kept earning “hustle” awards and realized I loved the grind. That energy carried me into distance running. Middle school cross country hooked me, and the rest was history: a 17:12 5K and a 4:34 mile. Running taught me ruthless consistency and time management. Logging 40–50 miles a week while balancing AP classes and a social life was no easy task. These lessons shaped the Hector of today.",
    highlight: ["Teamwork", "Discipline", "Perseverance", "Consistency", "Competitive drive"],
    carddate: "2012–2024",
  },
  {
    imglink: "/about/ucf.jpg",
    cardtitle: "FINDING PURPOSE",
    cardtext: "From a fishbowl to an ocean",
    cardparagraph:
      "Senior year of high school was a turning point for me. College was right around the corner, and I had no idea what to do or even where to apply. I’ve always had a curious mind and a love for technology. After some research, I found computer science. It felt like a perfect fit: problem-solving, creativity, and endless possibilities. I applied to UCF, got in, and dove headfirst into coding. The more I learned, the more I realized how much there was to explore. Computer science opened up a whole new world for me, going from a fishbowl to an ocean.",
    highlight: ["Computer Science", "Algorithms & DS", "Projects & internships", "Software fundamentals"],
    carddate: "2024–2025",
  },
  {
    imglink: "/about/hectorimg.jpg",
    cardtitle: "NOW",
    cardtext: 'Clicking "Start" in the game of life...',
    cardparagraph:
      "Here I am, a software engineer in the making—fueled by curiosity and a drive to build cool stuff. Every line of code is a new challenge, a puzzle to solve, and an opportunity to grow. I want to use AI to create tools that make life easier and more meaningful for others. Outside of coding, I’m big on staying active, spending time with friends and family, and just enjoying life. The journey’s just starting, and I’m excited for what’s next.",
    highlight: ["Software developer", "Continuous learning", "New technologies", "Active lifestyle", "Family & friends"],
    carddate: "2025...",
  },
];
