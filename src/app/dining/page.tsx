import Link from "next/link";

export default function DiningIndex() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Dining Options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/dining/restaurants">
          <a className="block p-4 border rounded-lg shadow-lg bg-white hover:bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Restaurants</h2>
            <p className="text-gray-600">Discover all the campus restaurants and dining spots.</p>
          </a>
        </Link>
        <Link href="/dining/mealPlans">
          <a className="block p-4 border rounded-lg shadow-lg bg-white hover:bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Meal Plans</h2>
            <p className="text-gray-600">Explore the different meal plan options available to students.</p>
          </a>
        </Link>
        <Link href="/dining/todaysMenu">
          <a className="block p-4 border rounded-lg shadow-lg bg-white hover:bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Today's Menu</h2>
            <p className="text-gray-600">Check out what's on the menu at our dining halls today.</p>
          </a>
        </Link>
        <Link href="/dining/specialEvents">
          <a className="block p-4 border rounded-lg shadow-lg bg-white hover:bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Special Events</h2>
            <p className="text-gray-600">Stay updated on upcoming dining events and special occasions.</p>
          </a>
        </Link>
        <Link href="/dining/nutrition">
          <a className="block p-4 border rounded-lg shadow-lg bg-white hover:bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Nutrition Information</h2>
            <p className="text-gray-600">Learn about the nutritional information of our meals.</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
