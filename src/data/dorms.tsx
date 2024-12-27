const dorms = [
  {
    name: "East Hall",
    description: "A cozy dorm with a mix of singles and doubles, perfect for students who want a close-knit community.",
    location: "East Campus",
    capacity: 100,
    price: 600,
    image: "/images/east-hall.jpg", // Example image path
    amenities: [
      { name: "Wi-Fi", type: "Basic", description: "High-speed internet throughout the building." },
      { name: "Laundry", type: "Free", description: "On-site laundry facilities available." },
      { name: "Study Rooms", type: "Shared", description: "Multiple quiet study rooms for group and solo work." },
    ]
  },
  {
    name: "West Tower",
    description: "A high-rise dorm offering amazing views of the city and spacious rooms for upperclassmen.",
    location: "West Campus",
    capacity: 200,
    price: 800,
    image: "/images/west-tower.jpg",
    amenities: [
      { name: "Gym", type: "Shared", description: "State-of-the-art gym with 24/7 access." },
      { name: "Common Room", type: "Shared", description: "A large common area with games, TVs, and lounge seating." },
      { name: "Private Bathrooms", type: "Exclusive", description: "Private bathrooms in each room." },
    ]
  },
  // More dorms can be added here
];
