// pages/index.tsx
import { useState } from 'react';
import majorsData from '../majors';
import Link from 'next/link';

interface Major {
  school: string;
  type: string;
  name: string;
  image_link: string;
  description: string;
  required_courses: string[];
}

export default function Home() {
  const [sortBy, setSortBy] = useState<'school' | 'type' | 'name'>('name');

  // Sorting majors based on the selected criteria
  const sortedMajors = [...majorsData.majors].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Explore Our Majors</h1>

      {/* Sorting Options */}
      <div className="flex justify-center mb-4">
        <label htmlFor="sort" className="mr-2 text-lg font-medium">Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'school' | 'type' | 'name')}
          className="border rounded-md px-3 py-1"
        >
          <option value="name">Name</option>
          <option value="school">School</option>
          <option value="type">Type</option>
        </select>
      </div>

      {/* Majors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedMajors.map((major: Major) => (
          <div
            key={major.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={major.image_link}
              alt={major.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{major.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{major.school}</p>
              <p className="text-sm text-gray-500 mb-4">{major.type}</p>
              <Link
                href={`/majors/browse?name=${encodeURIComponent(major.name)}`}
              >
                <a className="text-blue-600 hover:underline">Learn More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
