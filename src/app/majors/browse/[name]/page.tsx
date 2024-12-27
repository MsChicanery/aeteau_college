'use client';

import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Briefcase, BookOpen, School } from 'lucide-react';
import majors from '@/data/majors';

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon className="w-5 h-5 text-primary" />
    <h2 className="text-xl font-semibold">{title}</h2>
  </div>
);

const MajorDetailPage = () => {
  const params = useParams();
  const { name } = params || {};
  const majorName = Array.isArray(name) ? name[0] : name;

  if (!majorName) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  // Decode the major name from the URL
  const decodedMajorName = decodeURIComponent(majorName);

  const major = majors.find(m => m.name.toLowerCase() === decodedMajorName.toLowerCase());

  if (!major) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-500">Major Not Found</h2>
              <p className="mt-2 text-muted-foreground">
                The specified major could not be found. Please check the URL and try again.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const imageUrl = isValidUrl(major.image_link) ? major.image_link : '/default-image.png';

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Card className="mb-8">
        <CardHeader className="relative">
          <div className="absolute inset-0 h-48 overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt={major.name}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 pt-8">
            <Badge className="mb-2">{major.name}</Badge>
            <CardTitle className="text-4xl font-bold">{major.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-8">{major.description}</p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <SectionHeader icon={School} title="Program Highlights" />
                <ScrollArea className="h-64">
                  <ul className="space-y-3">
                    {major.program_highlights.map((highlight, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <SectionHeader icon={Briefcase} title="Career Opportunities" />
                <ScrollArea className="h-64">
                  <ul className="space-y-3">
                    {major.career_opportunities.map((career, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />

          <Card>
            <CardContent className="pt-6">
              <SectionHeader icon={BookOpen} title="Required Courses" />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {major.required_courses.map((course, index) => (
                  <Card key={index} className="bg-muted">
                    <CardContent className="p-4">
                      <p className="text-sm">{course}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default MajorDetailPage;
