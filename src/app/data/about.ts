export type AboutCard = {
  imglink: string;
  cardtitle: string;
  cardtext: string;
  cardparagraph: string;
  highlight: string[]; 
};

export const cardData: AboutCard[] = [
  {
    imglink: "/about/venezuela2.png",
    cardtitle: "VENEZUELA",
    cardtext: "Where my journey begun...",
    cardparagraph:
      "I was born in Venezuela, a beautiful country in South America. I lived there until I was 8 years old. My family and I moved to the United States in search of better opportunities and a brighter future. Leaving my home country was a difficult decision, but it was one that has shaped who I am today.",
    highlight: ["South America", "New beginnings", "Family-first", "Resilience", "First Gen"],
  },
  {
    imglink: "/about/basketball.jpg",
    cardtitle: "BASKETBALL",
    cardtext: "My love and hate relationship...",
    cardparagraph:
      "Basketball has been a significant part of my life since I was a child. I started playing when I was 10 years old and quickly fell in love with the sport. Over the years, I've played for various teams and have had the opportunity to compete at different levels. Basketball has taught me valuable lessons about teamwork, discipline, and perseverance.",
    highlight: ["Teamwork", "Discipline", "Perseverance", "Competitive play"],
  },
  {
    imglink: "/about/track.jpg",
    cardtitle: "TRACK & FIELD",
    cardtext: "I must be faster, I must be better...",
    cardparagraph:
      "In addition to basketball, I also participated in track and field during my high school years. I specialized in sprinting events, which required a different set of skills and training compared to basketball. Track and field helped me improve my speed, agility, and overall fitness. It also provided a great way to stay active and healthy.",
    highlight: ["Sprinting", "Speed & agility", "Overall fitness", "Athlete", "Balanced training"],
  },
  {
    imglink: "/about/ucf.jpg",
    cardtitle: "UCF",
    cardtext: "Wait, what do I want to do with my life...",
    cardparagraph:
      "I attended the University of Central Florida (UCF) for my undergraduate studies. UCF is a large public university located in Orlando, Florida. During my time at UCF, I pursued a degree in Computer Science. The coursework was challenging, but it provided me with a solid foundation in programming, algorithms, and software development. I also had the opportunity to work on various projects and internships that helped me gain practical experience in the field.",
    highlight: ["Computer Science", "Algorithms & DS", "Projects & internships", "Software fundamentals"],
  },
  {
    imglink: "/about/hectorimg.jpg",
    cardtitle: "NOW",
    cardtext: 'Clicking "Start" in the game of life...',
    cardparagraph:
      "Currently, I am working as a software developer. I enjoy the challenges and opportunities that come with this profession. I am constantly learning new technologies and improving my skills. In my free time, I like to explore new hobbies, spend time with friends and family, and continue playing basketball and staying active.",
    highlight: ["Software developer", "Continuous learning", "New technologies", "Active lifestyle", "Family & friends"],
  },
];
