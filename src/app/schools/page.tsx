import { SchoolTab } from "@/components/SchoolTab";

const schools = [
  {
    name: "Westcote School of Arts",
    description: "An avant-garde institution exploring innovative and interdisciplinary artistic expression.",
    dean: "Dr. Artemis Vale",
    majors: ["Digital Arts", "Creative Writing"],
    minors: ["Interdimensional Design", "Experimental Sculpture"],
  },
  {
    name: "Celestial School of Astrology",
    description: "Delving into the cosmic tapestry to uncover the universe's secrets.",
    dean: "Dr. Orion Vega",
    majors: ["Portal Astrology"],
    minors: ["Inspect Element Astrology", "Email Astrology"],
  },
  {
    name: "School of College",
    description: "Exploring the methodologies and philosophies behind higher education.",
    dean: "Dr. Linus Capstone",
    majors: ["Admissions Strategy", "College Consulting", "Ranking Sciences", "Dual Enrollment Studies"],
    minors: ["Academic Leadership", "Higher Education Policy"],
  },
  {
    name: "Aeteau College of Computer Science",
    description: "A rigorous and innovative program emphasizing cutting-edge technology and collaboration.",
    dean: "Dr. Linus Capstone",
    majors: ["Artificial Intelligence", "Cybersecurity", "Quantum Computing", "Software Engineering"],
    minors: ["Data Science", "Human-Computer Interaction"],
  },
];

export default function Schools() {
  return (
    <div className="container mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Schools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {schools.map((school) => (
          <div key={school.name} className="school-card">
            <SchoolTab {...school} />
          </div>
        ))}
      </div>
    </div>
  );
}
