import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// Import Image component
import Image from 'next/image'

const faculty = [
{
    name: "Dr. Carly T",
    title: "President",
    description: "Carly T. is a cool person. She has a PhD in Discord Moderation and has studied Server Design at the University of Cambridge.",
    image: "faculty/carly.png"
  },
  {
    name: "Dr. Butter A. Osmanli",
    title: "Head of IT",
    description: "Butter Osmanli is a troll from under the bridge. You can see him posting memes all over A2C in the worst ways possible.",
    image: "faculty/butter.png"
  },
    {
    name: "Biggreen10",
    title: "Dean of Admissions",
    description: "Ask him for this.", // Change bio
    image: "faculty/directxbox.png" // Change image
  },
  {
    name: "JP Kapth",
    title: "Assosciate Director of Admissions",
    description: "JP is a professional yapper, acquiring her PhD in Pasadena. She likes to use comic sans on her powerpoints for meetings.",
    image: "faculty/jp.png"
  },
  {
    name: "Ms. Celeste G",
    title: "Head of Undergraduate Outreach",
    description: "Celeste is a frog who enjoys hopping around all day. You can see her by the river.",
    image: "faculty/celeste.png"
  },
  {
    name: "DirectXbox",
    title: "Dean of the Ponzi School of Scamming",
    description: "DirectXbox, also knows as Charles P. Bianci, is a certified scammer.",
    image: "faculty/directxbox.png"
  },
  {
    name: "Ismay",
    title: "Provost, Westcote School of the Arts",
    description: "Ask Ismay for this", // Change bio
    image: "faculty/directxbox.png" // Change image
  },
  {
    name: "R. Heatran",
    title: "Dean Of Undergraduate Research",
    description: "Heatran only leaves Stark Mountain Chamber every five days to restock his mini-fridge with Kool-Aid and Caprisun. In his free time, he likes to go lava fishing with his buddy Groudon.",
    image: "faculty/heatran.png"
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

