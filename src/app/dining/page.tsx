import mealPlans from "@/data/mealPlans"; // Assuming you have meal plans data in this file
import Image from "next/image";

export default function CollegeMealPlansShowcase() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">College Meal Plan Options Showcase</h1>
      <ul className="space-y-8">
        {mealPlans.map((plan) => (
          <li key={plan.name} className="border rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-4">
              <Image
                src={plan.image} // Assuming each meal plan has an image
                alt={plan.name}
                width={100}
                height={80}
                className="rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <p className="text-gray-600">{plan.description}</p>
                <p className="text-gray-800 font-semibold">Price: ${plan.price}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {plan.options.map((option, index) => (
                <li key={index} className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-lg font-semibold">{option.name} <span className="text-blue-500">{option.type}</span></h3>
                  <p className="text-gray-600">{option.description}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
