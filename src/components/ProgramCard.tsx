import Link from 'next/link'
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProgramCardProps {
  title: string
  description: string
}

export function ProgramCard({ title, description }: ProgramCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href="/programs" className="text-[#a2ca2c] font-semibold flex items-center">
            Learn More <ArrowRightIcon className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

