import { AwardIcon, UsersIcon, ZapIcon, CalendarIcon, BookOpenIcon, GlobeIcon } from 'lucide-react';
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import ProgramCard from "@/components/ProgramCard";
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
