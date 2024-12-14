import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Users, Zap, Calendar, Book, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Aeteau+College+Campus"
          layout="fill"
          objectFit="cover"
          alt="Aeteau College Campus"
          className="brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Aeteau College</h1>
          <p className="text-xl mb-8">"nos nescio quomodo latine loqui"</p>
          <Button asChild size="lg">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Aeteau?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Award className="w-10 h-10 text-[#a2ca2c] mb-4" />
                <CardTitle>Unique Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our arcane and confusing tests ensure only the most... unique individuals are admitted.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-[#a2ca2c] mb-4" />
                <CardTitle>Exclusive Bloodlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Only one person per bloodline can be admitted. Family reunions just got more interesting!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 text-[#a2ca2c] mb-4" />
                <CardTitle>Ninja Warrior Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Pass our American Ninja Warrior course in under 4 minutes for instant admission!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Portal Astrology', 'Email Concentration', 'Rankings Sciences'].map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{program}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Discover the mysteries of {program.toLowerCase()} in our cutting-edge program.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/programs" className="text-[#a2ca2c] font-semibold flex items-center">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calendar className="w-10 h-10 text-[#a2ca2c] mb-4" />
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
                <Book className="w-10 h-10 text-[#a2ca2c] mb-4" />
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
                <Globe className="w-10 h-10 text-[#a2ca2c] mb-4" />
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
    </div>
  )
}

