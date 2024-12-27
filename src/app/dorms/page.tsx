import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dorms from "@/data/dorms"; // Assuming you have dorms data in this file
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function CollegeDormsShowcase() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">College Dorm Options Showcase</h1>
      {dorms.map((dorm) => (
        <Card key={dorm.name} className="mb-8">
          <CardHeader>
            <CardTitle>{dorm.name}</CardTitle>
            <CardDescription>{dorm.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p><strong>Location:</strong> {dorm.location}</p>
                <p><strong>Capacity:</strong> {dorm.capacity} students</p>
                <p><strong>Price per Month:</strong> ${dorm.price}</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={dorm.image} // Assuming each dorm has an image
                  alt={dorm.name}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dorm.amenities.map((amenity, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{amenity.name}</CardTitle>
                    <Badge>{amenity.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="text-center mt-8">
        <Link href="/dorms/off-campus" className="text-blue-600 hover:underline">
          Explore Off-Campus Dorms
        </Link>
      </div>
    </div>
  );
}
