// data/mealPlans.js or data/mealPlans.ts
const mealPlans = [
  {
    name: "Unlimited Meal Plan",
    description: "Unlimited meal swipes for 7 days a week, perfect for students who love to dine on campus frequently.",
    price: 2500,
    options: [
      { name: "Meal Swipes", type: "Unlimited", description: "Unlimited meal swipes for dining halls and select locations." },
      { name: "Flex Dollars", type: "400", description: "Flex dollars for use at any dining location on campus." }
    ]
  },
  {
    name: "14 Meal Plan",
    description: "14 meal swipes per week, ideal for students who prefer a mix of dining hall meals and other dining options.",
    price: 2250,
    options: [
      { name: "Meal Swipes", type: "14 per week", description: "14 meal swipes for dining halls and select locations." },
      { name: "Flex Dollars", type: "600", description: "Flex dollars for use at any dining location on campus." }
    ]
  },
  {
    name: "10 Meal Plan",
    description: "10 meal swipes per week, great for students who dine on campus less frequently but still want some flexibility.",
    price: 200,
    options: [
      { name: "Meal Swipes", type: "10 per week", description: "10 meal swipes for dining halls and select locations." },
      { name: "Flex Dollars", type: "600", description: "Flex dollars for use at any dining location on campus." }
    ]
  },
  {
    name: "Flex Only Plan",
    description: "No meal swipes, just flex dollars for maximum dining flexibility.",
    price: 1000,
    options: [
      { name: "Flex Dollars", type: "1250", description: "Flex dollars for use at any dining location on campus." }
    ]
  },
  {
    name: "Greek Life Plan 1",
    description: "With meal swipes, flex dollars, and access to your fraternities/sororities kitchen, this is the lowest cost plan avalible for those in greek life.",
    price: 1200,
    options: [
      { name: "Meal Swipes", type: "60 per semester", description: "30 meal swipes for dining halls and select locations." },
      { name: "Flex Dollars", type: "500", description: "Flex dollars for use at any dining location on campus." }
    ]
  },
    {
    name: "Greek Life Plan 2",
    description: "With meal swipes, flex dollars, and access to your fraternities/sororities kitchen, this is the lowest cost plan avalible for those in greek life.",
    price: 2000,
    options: [
      { name: "Meal Swipes", type: "120 per semester", description: "30 meal swipes for dining halls and select locations." },
      { name: "Flex Dollars", type: "700", description: "Flex dollars for use at any dining location on campus." }
    ]
  },
  // Other meal plans...
];

export default mealPlans;
