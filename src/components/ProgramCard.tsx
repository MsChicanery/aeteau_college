import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import schools from "@/data/schools";
import majors from "@/data/majors";
import Image from "next/image";

export default function ProgramCard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">College Schools and Majors Showcase</h1>
      {schools.map((school) => (
        <Card key={school.name} className="mb-8">
          <CardHeader>
            <CardTitle>{school.name}</CardTitle>
            <CardDescription>{school.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p><strong>Dean:</strong> {school.dean}</p>
                <p><strong>Founded:</strong> {school.foundedYear}</p>
                <p><strong>Total Students:</strong> {school.totalStudents}</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Majors and Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majors
                .filter((major) => major.school === school.name)
                .map((major) => (
                  <Card key={major.name} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{major.name}</CardTitle>
                      <Badge>{major.type}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="relative w-full h-0 pb-[56.25%] mb-4"> {/* Aspect ratio 16:9 */}
                        <Image
                          src={major.image_link.startsWith("/") ? major.image_link : `/${major.image_link}`}
                          alt={major.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <p className="text-sm mb-2">{major.description}</p>
                      <p className="text-sm"><strong>Degree:</strong> {major.degree_type}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
