import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const faculty = [
  {
    name: "Dr. Aquarius Blahaj",
    title: "President",
    description: "Former Olympic swimmer and chess grandmaster. Holds the record for treading water (72 hours).",
    image: "/placeholder.svg?height=100&width=100&text=AB"
  },
  {
    name: "Prof. Enigma Costco",
    title: "Dean of Admissions",
    description: "Designs our arcane and confusing admission tests. Never seen without a Costco-sized coffee.",
    image: "/placeholder.svg?height=100&width=100&text=EC"
  },
  {
    name: "Dr. Tall McHighIQ",
    title: "Dean of the School of College",
    description: "6'7\" tall with an IQ of 160. Specializes in rankings sciences and college consulting.",
    image: "/placeholder.svg?height=100&width=100&text=TM"
  },
  {
    name: "Prof. Astro Ninja",
    title: "Head of the School of Astrology",
    description: "Completed the American Ninja Warrior course in under 2 minutes. Also an expert in portal astrology.",
    image: "/placeholder.svg?height=100&width=100&text=AN"
  }
]

export default function Faculty() {
  return (
    <div className="container mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Esteemed Faculty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faculty.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

