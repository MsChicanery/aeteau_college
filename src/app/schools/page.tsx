import { SchoolTab } from "@/components/SchoolTab";

const schools = [
  {
    name: "Westcote School of Arts",
    description: "Pushing the boundaries of artistic expression and interdimensional creativity.",
    dean: "Dr. Artemis Vale",
    majors: ["Portal Astrology", "Email Concentration"],
    minors: ["Interdimensional Design", "Experimental Sculpture"],
  },
  {
    name: "Ismay School Of The Arts",
    description: "Designing For The Ages",
    dean: "Prof. Eliza Monroe",
    majors: ["Verified Village Type Shi", "Graphic Design"],
    minors: ["Interactive Media", "Sustainable Design"],
  },
  {
    name: "School of Astrology",
    description: "Unraveling the mysteries of the cosmos and beyond.",
    dean: "Dr. Orion Vega",
    majors: ["Portal Astrology","Women"],
    minors: ["Inspect Element", "Email Astrology"],
  },
  {
    name: "School of College",
    description: "Meta-education at its finest, where we study the art of studying.",
    dean: "Dr. Linus Capstone",
    majors: ["Admissions", "College Consulting", "Rankings Sciences", "Dual Enrollment Studies"],
    minors: ["Academic Leadership", "Higher Education Policy"],
  },
  {
    name: "Femboy College Of Computer Science",
    description: "Aeteau University’s competitive computer science program is renowned for its rigorous curriculum and emphasis on innovation. Students are immersed in a diverse range of topics, from foundational algorithms and data structures to cutting-edge fields like artificial intelligence, cybersecurity, and quantum computing. With a strong focus on hands-on learning, the program encourages collaboration through research projects, hackathons, and industry partnerships. Faculty members are leaders in their fields, providing mentorship and opportunities to engage in groundbreaking research. The program’s graduates are highly sought after by top tech companies and graduate schools, making Aeteau University a premier destination for aspiring computer scientists.",
    dean: "Dr. Linus Capstone",
    majors: ["Admissions", "College Consulting", "Rankings Sciences", "Dual Enrollment Studies"],
    minors: ["Academic Leadership", "Higher Education Policy"],
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
