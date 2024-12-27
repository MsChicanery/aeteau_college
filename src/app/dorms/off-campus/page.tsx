'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from 'lucide-react';
import Image from "next/image";
import dorms from "@/data/dorms";

// Separate component for amenities to improve code organization and reusability
const AmenityCard = ({ amenity }) => (
  <Card className="h-full transition-transform hover:scale-102">
    <CardHeader>
      <CardTitle className="text-lg">{amenity.name}</CardTitle>
      <Badge variant={amenity.type === 'Premium' ? 'default' : 'secondary'}>
        {amenity.type}
      </Badge>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600">{amenity.description}</p>
    </CardContent>
  </Card>
);

// Separate component for dorm details to improve maintainability
const DormDetails = ({ location, capacity, price }) => (
  <div className="space-y-2">
    <p className="flex items-center gap-2">
      <span className="font-semibold">Location:</span>
      <span className="text-gray-600">{location}</span>
    </p>
    <p className="flex items-center gap-2">
      <span className="font-semibold">Capacity:</span>
      <span className="text-gray-600">{capacity} students</span>
    </p>
    <p className="flex items-center gap-2">
      <span className="font-semibold">Price per Month:</span>
      <span className="text-gray-600">${price.toLocaleString()}</span>
    </p>
  </div>
);

export default function CollegeDormsShowcase() {
  // Add search functionality
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter dorms based on search query
  const filteredDorms = dorms.filter(dorm => 
    dorm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dorm.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">College Dorm Options</h1>
      
      {/* Search input */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search dorms..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-8">
        {filteredDorms.map((dorm) => (
          <Card key={dorm.name} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{dorm.name}</CardTitle>
              <CardDescription className="text-base">{dorm.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <DormDetails
                  location={dorm.location}
                  capacity={dorm.capacity}
                  price={dorm.price}
                />
                <div className="relative aspect-video">
                  <Image
                    src={dorm.image}
                    alt={`${dorm.name} building`}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={dorm.name === filteredDorms[0].name}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dorm.amenities.map((amenity, index) => (
                  <AmenityCard key={`${dorm.name}-amenity-${index}`} amenity={amenity} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
