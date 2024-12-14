import { AwardIcon, UsersIcon, ZapIcon, CalendarIcon, BookOpenIcon, GlobeIcon } from 'lucide-react';
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { ProgramCard } from "@/components/ProgramCard";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome to Aeteau College"
        subtitle='"nos nescio quomodo latine loqui"'
        ctaText="Apply Now"
        ctaLink="/apply"
        imageSrc="/placeholder.svg?height=1080&width=1920&text=Aeteau+College+Campus"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Aeteau?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={AwardIcon}
              title="Unique Admissions"
              description="Our arcane and confusing tests ensure only the most... unique individuals are admitted."
            />
            <FeatureCard
              icon={UsersIcon}
              title="Exclusive Bloodlines"
              description="Only one person per bloodline can be admitted. Family reunions just got more interesting!"
            />
            <FeatureCard
              icon={ZapIcon}
              title="Ninja Warrior Course"
              description="Pass our American Ninja Warrior course in under 4 minutes for instant admission!"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Portal Astrology"
              description="Discover the mysteries of portal astrology in our cutting-edge program."
            />
            <ProgramCard
              title="Email Concentration"
              description="Master the art of email concentration in this unique course."
            />
            <ProgramCard
              title="Rankings Sciences"
              description="Explore the intricacies of rankings sciences in our innovative program."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CalendarIcon className="w-10 h-10 text-[#a2ca2c] mb-4" />
                <CardTitle>Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p>From underwater chess tournaments to anti-gravity debates, there's always something happening at Aeteau.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/activities">View Calendar</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BookOpenIcon className="w-10 h-10 text-[#a2ca2c] mb-4" />
                <CardTitle>Academics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore our unconventional majors and minors, taught by the most eccentric minds in academia.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <GlobeIcon className="w-10 h-10 text-[#a2ca2c] mb-4" />
                <CardTitle>Global Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study abroad in our satellite campuses located in the Mariana Trench and the International Space Station.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/global">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
