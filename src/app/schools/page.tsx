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
   {
    name: "Femboy Computer Science School",
    description: "Aeteau University’s competitive computer science program is renowned for its rigorous curriculum and emphasis on innovation. Students are immersed in a diverse range of topics, from foundational algorithms and data structures to cutting-edge fields like artificial intelligence, cybersecurity, and quantum computing. With a strong focus on hands-on learning, the program encourages collaboration through research projects, hackathons, and industry partnerships. Faculty members are leaders in their fields, providing mentorship and opportunities to engage in groundbreaking research. The program’s graduates are highly sought after by top tech companies and graduate schools, making Aeteau University a premier destination for aspiring computer scientists.",
    majors: ["Computer Engineering", "Computer Science", "Electrical Engineering", "UI/UX Design"],
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
