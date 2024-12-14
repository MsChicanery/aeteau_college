import { SchoolTab } from "@/components/SchoolTab";

const schools = [
  {
    name: "Westcote School of Arts",
    description: "Pushing the boundaries of artistic expression and interdimensional creativity.",
    majors: ["Portal Astrology", "Email Concentration", "Inspect Element Concentration"],
  },
  {
    name: "Ismay School Of The Arts",
    description: "Designing For The Ages",
    majors: ["Verified Villiage Type Shi", "Graphic Design"],
  },
  {
    name: "School of Astrology",
    description: "Unraveling the mysteries of the cosmos and beyond.",
    majors: ["Portal Astrology", "Inspect Element Astrology", "Email Astrology"],
  },
  {
    name: "School of College",
    description: "Meta-education at its finest, where we study the art of studying.",
    majors: ["Admissions", "College Consulting", "Rankings Sciences", "Dual Enrollment Studies"],
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
