import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Award, FileText, CheckCircle, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

const classProfile = {
  averageGPA: 3.7,
  averageSAT: 1350,
  averageACT: 30,
  acceptanceRate: 20,
  diversity: {
    internationalStudents: 15,
    underrepresentedMinorities: 30,
  },
};

const admissionsProcess = [
  { icon: FileText, label: "Apply Online", description: "Complete the online application form." },
  { icon: BookOpen, label: "Transcripts", description: "Write several essays and answer several questions." },
  { icon: CheckCircle, label: "Test Scores", description: "Submit your SAT score." },
  { icon: Globe, label: "Decision", description: "Receive your admission decision." },
  { icon: Award, label: "Deposit", description: "Check your email for our deposit process" },
];

const deadlines = [
  { name: "Early Action", date: "November 1" },
  { name: "Rolling Decision", date: "March 1st" },
  { name: "Transfer", date: "April 1" },
];

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="mb-10 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-[#c2ac2a] to-[#8e7b1a] text-white rounded-t-lg">
            <CardTitle className="text-4xl font-bold text-center">Admissions at Aeteau College</CardTitle>
            <p className="text-center text-lg mt-2 text-white/90">
              Join a legacy of innovators, dreamers, and portal astrologers. Discover your path at Aeteau!
            </p>
          </CardHeader>
          <CardContent className="py-8">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link href="/apply" className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg font-semibold text-xl shadow-lg hover:scale-105 transition">
                Start Your Application
              </Link>
              <div className="flex flex-col gap-2">
                <span className="text-gray-700 text-center">Questions?</span>
                <a href="mailto:info@aeteau.edu" className="text-blue-700 hover:underline text-center">Contact Admissions</a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Class Profile */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-7 h-7 text-[#c2ac2a]" /> Class Profile (Recent Admits)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="py-6 flex flex-col items-center">
                <span className="text-5xl font-bold text-[#8e7b1a]">{classProfile.averageGPA}</span>
                <span className="text-gray-700 mt-2">Average GPA</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6 flex flex-col items-center">
                <span className="text-5xl font-bold text-[#8e7b1a]">{classProfile.averageSAT}</span>
                <span className="text-gray-700 mt-2">Average SAT</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6 flex flex-col items-center">
                <span className="text-5xl font-bold text-[#8e7b1a]">{classProfile.averageACT}</span>
                <span className="text-gray-700 mt-2">Average ACT</span>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardContent className="py-6 flex flex-col items-center">
                <span className="text-4xl font-bold text-green-700">{classProfile.acceptanceRate}%</span>
                <span className="text-gray-700 mt-2">Acceptance Rate</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6 flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-700">{classProfile.diversity.internationalStudents}%</span>
                <span className="text-gray-700 mt-2">International Students</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6 flex flex-col items-center">
                <span className="text-4xl font-bold text-purple-700">{classProfile.diversity.underrepresentedMinorities}%</span>
                <span className="text-gray-700 mt-2">Underrepresented Minorities</span>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Admissions Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-[#c2ac2a]" /> Admissions Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {admissionsProcess.map((step, idx) => (
              <Card key={step.label} className="flex flex-row items-center gap-4 p-4">
                <div className="flex-shrink-0">
                  <step.icon className="w-10 h-10 text-[#c2ac2a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{idx + 1}. {step.label}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Deadlines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-7 h-7 text-[#c2ac2a]" /> Key Deadlines
          </h2>
          <div className="flex flex-wrap gap-6">
            {deadlines.map((d) => (
              <Card key={d.name} className="flex-1 min-w-[180px]">
                <CardContent className="py-6 flex flex-col items-center">
                  <Badge className="mb-2">{d.name}</Badge>
                  <span className="text-xl font-bold">{d.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link href="/apply" className="inline-block px-10 py-5 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl font-bold text-2xl shadow-lg hover:scale-105 transition">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}