// data/dorms.js or data/dorms.ts
const dorms = [
  {
    name: "Blahaj Hall",
    description: "Directly attached to the CS building, our Blahaj Hall allows easy access to classes and acts as a living-learning community for our computer science students.",
    location: "Computer Science Building",
    capacity: 100,
    price: 750,
    image: "/dorms/blahaj-hall.jpg",
    amenities: [
      { name: "Wi-Fi", type: "1GBPS", description: "Fast wifi avalible for students in the dorms - with a direct 1GBPS connection to our central hub!" },
      { name: "Common Area", type: "24/7", description: "A large study room filled with bean bags, charging outlets, and Blahaj toys to help you learn." },
      { name: "Vending Machines", type: "Low Cost", description: "Wake up and get a Monster Energy or a Gamer Supps and get ready for the day! Pay via Flex for 50% off!" },
    ]
  },
  {
    name: "Doom Towers",
    description: "Doom about getting into Aeteau while at Aeteau! Right next to the admissions building, doom towers has the fastest connection of any building to the servers, so you will know when you got into the university you already got into!",
    location: "Admissions Building",
    capacity: 100,
    price: 750,
    image: "/dorms/doom-towers.jpg",
    amenities: [
      { name: "Wi-Fi", type: "Direct", description: "Directly connected to the admissions building! Average responce times between you and the admissions buildings are 3 milliseconds!" },
      { name: "Wake Up Alarm", type: "Doom", description: "Every 15 to 30 minutes at random, a large speaker yells \"DOOM\" at 175 decibles. This keeps you up all day so you can get the admissions decision you already have!" },
      { name: "Caffine", type: "Unlimited", description: "Unlimited coffee avalible for you to stay up all day and night waiting for the admissions decision you already have!" },
    ]
  },
  // Other dorms...
];

export default dorms;
