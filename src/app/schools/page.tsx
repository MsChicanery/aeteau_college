import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

function formatTabValue(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function Schools() {
  return (
    <div className="container mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Schools</h1>
      <Tabs defaultValue={formatTabValue(schools[0].name)}>
        <TabsList className="grid w-full grid-cols-3">
          {schools.map(({ name }) => (
            <TabsTrigger key={name} value={formatTabValue(name)}>
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
        {schools.map((school) => (
          <TabsContent key={school.name} value={formatTabValue(school.name)}>
            <SchoolTab {...school} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
