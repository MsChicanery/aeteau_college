'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, BookOpen, Users, Globe, Code, Flask, Language, Heart } from 'lucide-react';

const generalEducation = {
  image_link: '/path-to-your-image.png', // Replace with your image link
  description: 'General Education Requirements provide a broad foundation of knowledge and skills essential for every student. They ensure a well-rounded education and prepare students for success in their chosen fields and beyond.',
  core_competencies: [
    'Critical Thinking',
    'Communication',
    'Quantitative Literacy',
    'Information Literacy',
  ],
  humanities_social_sciences: [
    'Introduction to Sociology',
    'World History',
    'Literature Analysis',
    'Psychology',
  ],
  natural_sciences: [
    'Biology 101',
    'Chemistry 101',
    'Physics 101',
    'Environmental Science',
  ],
  arts_languages: [
    'Art Appreciation',
    'Music Theory',
    'Introduction to Theater',
    'Foreign Language',
  ],
  health_wellness: [
    'Physical Education',
    'Health and Wellness',
    'Nutrition',
  ],
  required_courses: [
    'Math 101: Algebra',
    'Science 101: Basic Biology',
    'English 101: Composition',
  ],
  elective_courses: [
    'Computer Science Basics',
    'Creative Writing',
    'Philosophy',
  ]
};

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

const GeneralEducationPage = () => {
  const imageUrl = isValidUrl(generalEducation.image_link) ? generalEducation.image_link : '/default-image.png';

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Card className="mb-8">
        <CardHeader className="relative">
          <div className="absolute inset-0 h-48 overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt="General Education"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 pt-8">
            <Badge className="mb-2">General Education</Badge>
            <CardTitle className="text-4xl font-bold">General Education Requirements</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-8">{generalEducation.description}</p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <SectionHeader icon={GraduationCap} title="Core Competencies" />
                <ScrollArea className="h-64">
                  <ul className="space-y-3">
                    {generalEducation.core_competencies.map((competency, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{competency}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <SectionHeader icon={Users} title="Humanities and Social Sciences" />
                <ScrollArea className="h-64">
                  <ul className="space-y-3">
                    {generalEducation.humanities_social_sciences.map((course, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <SectionHeader icon={Flask} title="Natural Sciences" />
                <ScrollArea className="h-64">
                  <ul className="space-y-3">
                    {generalEducation.natural_sciences.map((course, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <SectionHeader icon={BookOpen} title="Arts and Languages" />
                <ScrollArea className="h-64">
                  <ul className="space-y-3">
                    {generalEducation.arts_languages.map((course, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
