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
      { name: "Vending Machines", type: "Low Cost", description: "Wake up and get a monster energy and get ready for the day! Pay via Flex for 50% off!" },
    ]
  },
  // Other dorms...
];

export default dorms;
