import React from "react";
import Link from "next/link";
import { meals } from "@/data/meals";

interface Meal {
  meal: string;
  items: string[];
}

interface Meals {
  [key: string]: Meal[];
}

export default function DiningIndex() {
  const getTodaysMenu = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString("en-US", { weekday: "long" });
    return (meals as Meals)[dayOfWeek];
  };

  const todaysMenu = getTodaysMenu();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-600">Dining Options</h1>
      <p className="text-lg mb-8 text-center text-gray-700">
        Explore the variety of dining options available on campus. From meal plans to restaurants and today’s menu, we have something for everyone. Check out special events and learn about the nutritional information of our meals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/restaurants" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Restaurants</a>
          </Link>
          <p className="text-gray-700">
            Discover all the campus restaurants and dining spots, offering a wide range of cuisines to satisfy your cravings.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/mealPlans" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Meal Plans</a>
          </Link>
          <p className="text-gray-700">
            Explore the different meal plan options available to students. Choose the plan that best fits your lifestyle and dining needs.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/todaysMenu" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Today's Menu</a>
          </Link>
          <p className="text-gray-700">
            Check out what's on the menu at our dining halls today. We offer a diverse selection of dishes to enjoy.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/specialEvents" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Special Events</a>
          </Link>
          <p className="text-gray-700">
            Stay up-to-date with special dining events and themed meals happening on campus.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Today's Menu</h2>
        {todaysMenu ? (
          <ul className="list-disc pl-5">
            {todaysMenu.map((meal, index) => (
              <li key={index} className="mb-4">
                <div className="font-bold text-lg text-gray-700">{meal.meal}</div>
                <ul className="list-disc pl-5">
                  {meal.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-700">No menu available for today.</p>
        )}
      </div>
    </div>
  );
}
