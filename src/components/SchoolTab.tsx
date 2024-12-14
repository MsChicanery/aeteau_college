import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface School {
  name: string
  description: string
  majors: string[]
}

interface SchoolListProps {
  schools: School[]
}

export function SchoolTab({ name, description, majors, minors }: School) {
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
        <br></br>
        <h3 className="font-semibold mb-2">Minors:</h3>
        <ul className="list-disc list-inside">
          {minors.map((minor, index) => (
            <li key={index}>{minor}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export function SchoolList({ schools }: SchoolListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {schools.map((school, index) => (
        <SchoolTab 
          key={index} 
          name={school.name} 
          majors={school.dean} 
          description={school.description}
          majors={school.majors} 
        />
      ))}
    </div>
  )
}
