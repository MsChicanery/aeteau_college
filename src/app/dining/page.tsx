import Link from "next/link";
import meals from "@/data/meals";

export default function DiningIndex() {
  // Function to get a random item from an array
  const getRandomItem = (items) => {
    const index = new Date().getDate() % items.length;
    return items[index];
  };

  // Generate today's menu
  const todaysMenu = {
    breakfast: getRandomItem(meals.breakfast),
    lunch: getRandomItem(meals.lunch),
    dinner: getRandomItem(meals.dinner),
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-600">Dining Options</h1>
      <p className="text-lg mb-8 text-center text-gray-700">Explore the variety of dining options available on campus. From meal plans to restaurants and today’s menu, we have something for everyone. Check out special events and learn about the nutritional information of our meals.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/restaurants" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Restaurants</a>
          </Link>
          <p className="text-gray-700">Discover all the campus restaurants and dining spots, offering a wide range of cuisines to satisfy your cravings.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/mealPlans" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Meal Plans</a>
          </Link>
          <p className="text-gray-700">Explore the different meal plan options available to students. Choose the plan that best fits your lifestyle and dining needs.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/todaysMenu" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Today's Menu</a>
          </Link>
          <p className="text-gray-700">Check out what's on the menu at our dining halls today. We offer a diverse selection of dishes to enjoy.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/specialEvents" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Special Events</a>
          </Link>
          <p className="text-gray-700">Stay updated on upcoming dining events and special occasions. Don’t miss out on themed dinners and culinary celebrations.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/nutrition" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Nutrition Information</a>
          </Link>
          <p className="text-gray-700">Learn about the nutritional information of our meals. We provide detailed insights to help you make healthier choices.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/contact" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Contact Us</a>
          </Link>
          <p className="text-gray-700">Have questions or feedback? Get in touch with our dining services team for assistance and support.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Today's Menu</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg shadow bg-white">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Breakfast</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>{todaysMenu.breakfast}</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg shadow bg-white">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Lunch</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>{todaysMenu.lunch}</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg shadow bg-white">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Dinner</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>{todaysMenu.dinner}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Why Choose Our Dining Options?</h2>
        <p className="text-lg text-gray-700 mb-4">Our dining services are designed to provide delicious and nutritious meals for our students. With a variety of dining locations and meal plans, you'll always find something to enjoy. Our commitment to quality and sustainability ensures that you get the best dining experience on campus.</p>
        <p className="text-lg text-gray-700 mb-4">Join us for special events, explore diverse cuisines, and stay informed about nutritional benefits. We’re here to make your dining experience enjoyable and satisfying.</p>
      </div>
    </div>
  );
}
