import React from 'react';
import { Link } from 'react-router-dom';
import majors from '@/data/majors'; // Adjust the import path as needed

const MajorsPage = () => {
  return (
    <div>
      <h1>Explore Majors and Minors</h1>
      <div>
        {majors.map((major, index) => (
          <div key={index} className="major-item">
            <h2>{major.name}</h2>
            <p>{major.description}</p>
            <Link to={`/majors/browse?name=${encodeURIComponent(major.name)}`}>
              Learn more
            </Link>
            <img src={major.image_link} alt={major.name} style={{ width: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorsPage;
