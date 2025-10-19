export type AboutCard = {
  imglink: string;
  cardtitle: string;
  cardtext: string;
  cardparagraph: string;
  highlight: string[]; 
};

export const cardData: AboutCard[] = [
  {
    imglink: "/about/venezuela2.PNG",
    cardtitle: "VENEZUELA",
    cardtext: "Where my journey begun...",
    cardparagraph:
      "Oh man... Despite the situation, I love Venezuela. I think part of it was me being young and the nostalgia. I spent 10 years here, until my family and I were forced to move to the United States due to personal death threats (I KNOW RIGHT?). Anyways, I'm a firm believer that everything happens for a reason, so I think it was a chance to find better opportunities and a brighter future. Leaving my home country was a difficult decision, but it was one that has shaped who I am today.",
    highlight: ["South America", "New beginnings", "Family-first", "Resilience", "First Gen"],
  },
  {
    imglink: "/about/basketball.jpg",
    cardtitle: "BASKETBALL",
    cardtext: "My love and hate relationship...",
    cardparagraph:
      "I've played basketball for majority of my life, and it's safe to say it plays a part on who I am and most of my connections growing up. Not gonna lie, after moving to the US, I HATED basketball. It felt different from Venezuela, and I would feel pressure from my father and the coaches. On the bright side, it taught me to deal with pressure, work out, and how to deal with different kinds of people. I decided to quit sophomore year and decided to stick only to track. However, I found a love for it again and still play it to this day :) ",
    highlight: ["Teamwork", "Discipline", "Perseverance", "Competitive play"],
  },
  {
    imglink: "/about/track.jpg",
    cardtitle: "TRACK & FIELD",
    cardtext: "I must be faster, I must be better...",
    cardparagraph:
      `I would always take home the hustle award in basketball tournaments and I found running fun. As a kid (and still), I found Sonic SUUUUUUPER cool. So, middle school comes around and my dad asks me, "Hey son, have you considered trying cross country? You might like it...". The rest was history. I managed to run 17:12 5K and 4:34 mile. It also taught me the importance of consistency and time management. I was running 40-50 miles a week while handling a social life and several AP classes. Fun...`,
    highlight: ["Sprinting", "Speed & agility", "Overall fitness", "Athlete", "Balanced training"],
  },
  {
    imglink: "/about/ucf.jpg",
    cardtitle: "UCF",
    cardtext: "Wait, what do I want to do with my life...",
    cardparagraph:
      "Wow. Coming to UCF feels like yesterday. I remember being scared and wondering how I was going to do laundry all by myself. Stepping into UCF felt like going from a fish bowl to an ocean. I had the freedom to literally do anything I wanted. Plus, I had a million resources and I was gonna live with my best friend. I've developed every aspect of me in ways I couldn't have imagined thanks to UCF and I hope to keep doing so for the rest of my time here.",
    highlight: ["Computer Science", "Algorithms & DS", "Projects & internships", "Software fundamentals"],
  },
  {
    imglink: "/about/hectorimg.jpg",
    cardtitle: "NOW",
    cardtext: 'Clicking "Start" in the game of life...',
    cardparagraph:
      "Now, I am on the path to finding my purpose in life. Currently, I am working as a software developer for KnightHacks, the most goated club ever. I am developing my skills and learning what it takes to be a software engineer. I hope to take these skills and apply them to the real world for an actual company and get to travel with my wife and eventually kids. I hope to also gain enough money to give back to my beautiful family and give the rest back to society, in hope of making the world a better place :)",
    highlight: ["Software developer", "Continuous learning", "New technologies", "Active lifestyle", "Family & friends"],
  },
];
