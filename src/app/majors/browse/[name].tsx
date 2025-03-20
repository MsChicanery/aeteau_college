'use client';

import { useParams } from 'next/navigation';
import majors from '@/data/majors'; // Adjust the import path as needed

const MajorDetailPage = () => {
  const { name } = useParams(); // Use useParams to access the dynamic route parameters

  // Ensure name is a single string
  const majorName = Array.isArray(name) ? name[0] : name;

  if (!majorName) {
    return <div>Loading...</div>;
  }

  // Find the major based on the name
  const major = majors.find(m => m.name.toLowerCase() === majorName.toLowerCase());

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
