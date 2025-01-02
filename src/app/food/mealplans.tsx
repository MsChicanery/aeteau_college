import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mealPlans from "@/data/mealPlans"; // Assuming you have meal plans data in this file
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function CollegeMealPlansShowcase() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">College Meal Plan Options Showcase</h1>
      {mealPlans.map((plan) => (
        <Card key={plan.name} className="mb-8">
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p><strong>Price:</strong> ${plan.price}</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={plan.image} // Assuming each meal plan has an image
                  alt={plan.name}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plan.options.map((option, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{option.name}</CardTitle>
                    <Badge>{option.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
