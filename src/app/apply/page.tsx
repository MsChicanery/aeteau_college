'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Toast } from "@/components/ui/toast"

export default function Apply() {
  const [height, setHeight] = useState('')
  const [iqScore, setIqScore] = useState('')
  const [discordUsername, setDiscordUsername] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    if (parseFloat(height) < 5.4) {
      toast({
        title: "Application Error",
        description: "Sorry, applicants under 5'4\" cannot apply.",
        variant: "destructive",
      })
      setSubmitting(false)
      return
    }
    if (parseInt(iqScore) < 145) {
      toast({
        title: "Application Error",
        description: "Sorry, applicants must have an IQ of 145 or higher.",
        variant: "destructive",
      })
      setSubmitting(false)
      return
    }

    const formData = new FormData(e.target as HTMLFormElement)
    
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Good luck in the American Ninja Warrior course and the chess match against our grandmaster!",
        })
      } else {
        toast({
          title: "Submission Error",
          description: "There was an error submitting your application. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
    }

    setSubmitting(false)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Apply to Aeteau College</CardTitle>
          <CardDescription className="text-center">Embark on a journey of unconventional learning</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height (in feet)</Label>
              <Input type="number" id="height" name="height" step="0.1" required value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iq">IQ Score</Label>
              <Input type="number" id="iq" name="iq" required value={iqScore} onChange={(e) => setIqScore(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secretaries">Name every single Secretary of State since America's founding</Label>
              <Textarea id="secretaries" name="secretaries" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="costco">Which Costco guy family member do you identify with most?</Label>
              <Input type="text" id="costco" name="costco" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="discord">Discord Username</Label>
              <Input type="text" id="discord" name="discord" required value={discordUsername} onChange={(e) => setDiscordUsername(e.target.value)} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="twin" name="twin" />
              <Label htmlFor="twin">I have a twin also applying (we agree to fight on national television for admission)</Label>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

