'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Importing the useRouter hook from Next.js
import majors from '@/data/majors'; // Adjust the import path as needed

const MajorDetailPage = () => {
  const router = useRouter();
  const { name } = router.query;  // Extract the 'name' query parameter

  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to ensure the component runs only on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component is not yet mounted, return null or a loading state
  if (!isMounted) {
    return <div>Loading...</div>;
  }

  // Check if the 'name' is available
  if (!name) {
    return <div>Loading...</div>;
  }

  // Find the major based on the name
  const major = majors.find(m => m.name === name);

  if (!major) {
    return <div>Major not found!</div>;
  }

  return (
    <div>
      <h1>{major.name}</h1>
      <img src={major.image_link} alt={major.name} style={{ width: '300px' }} />
      <h2>Description</h2>
      <p>{major.description}</p>
      <h2>Program Highlights</h2>
      <ul>
        {major.program_highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      <h2>Career Opportunities</h2>
      <ul>
        {major.career_opportunities.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
      <h2>Required Courses</h2>
      <ul>
        {major.required_courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default MajorDetailPage;
