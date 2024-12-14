import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// Import Image component
import Image from 'next/image'

const faculty = [
  {
    name: "Dr. Aquarius Blahaj",
    title: "President",
    description: "Former Olympic swimmer and chess grandmaster. Holds the record for treading water (72 hours).",
    image: "/placeholder.svg?height=100&width=100&text=AB"
  },
  {
    name: "Prof. Kokoro Nashi",
    title: "Dean of Computer Science",
    description: "Lorem Ipusem Dolor Sit Amet",
    image: "/placeholder.svg?height=100&width=100&text=EC"
  },
  {
    name: "Dr. Butter A. Osmanli",
    title: "Dean of Osmanli School Of Law",
    description: "Butter Osmanli is a troll from under the bridge. You can see him posting memes all over A2C in the worst ways possible.",
    image: "../public/faculty/butter.png"
  },
  {
    name: "Dr. Carly T",
    title: "Dean of Admissions",
    description: "Carly T. is a professional skateboarder from the city of Dani located in California. She has a PHD in Discord Moderation and has studied Server Design at Cambridge. ",
    image: "/placeholder.svg?height=100&width=100&text=AN"
  },
  {
    name: "Ms. Celeste G",
    title: "Head of Undergraduate Outreach",
    description: "Celeste is a frog who enjoys hopping around all day. You can see her by the river.",
    image: "../public/faculty/butter.png"
  },
  
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

