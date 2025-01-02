import Link from "next/link";

export default function DiningIndex() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-600">Dining Options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/restaurants" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Restaurants</a>
          </Link>
          <p className="text-gray-700">Discover all the campus restaurants and dining spots.</p>
        </div>
        <div className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/mealPlans" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Meal Plans</a>
          </Link>
          <p className="text-gray-700">Explore the different meal plan options available to students.</p>
        </div>
        <div className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/todaysMenu" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Today's Menu</a>
          </Link>
          <p className="text-gray-700">Check out what's on the menu at our dining halls today.</p>
        </div>
        <div className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/specialEvents" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Special Events</a>
          </Link>
          <p className="text-gray-700">Stay updated on upcoming dining events and special occasions.</p>
        </div>
        <div className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
          <Link href="/dining/nutrition" legacyBehavior>
            <a className="text-2xl font-semibold text-blue-700 hover:text-blue-900 mb-2">Nutrition Information</a>
          </Link>
          <p className="text-gray-700">Learn about the nutritional information of our meals.</p>
        </div>
      </div>
    </div>
  );
}
