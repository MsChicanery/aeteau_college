import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SchoolTabProps {
  name: string
  description: string
  majors: string[]
}

export function SchoolTab({ name, description, majors }: SchoolTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Majors:</h3>
        <ul className="list-disc list-inside">
          {majors.map((major, index) => (
            <li key={index}>{major}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

