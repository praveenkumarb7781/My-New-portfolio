"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, Award } from "lucide-react"

export function FreelanceSection() {
  const freelanceProjects = [
    {
      title: "Heritage Super Voice Assistant for Indian Army",
      client: "Indian Army",
      description: "A voice assistant chatbot that helps in answering questions about the heritage and valour of the Regiment of Special forces of the Indian Army.",
      duration: "1 month",
      rating: 5,
    },
    {
      title: "AI Powered Examination conductor for Indian Army",
      client: "Indian Army",
      description: "Built an AI powered exam conductor that generates questions from Docs that we upload, and conducts exam with proctoring, corrects it, gives away marks and stores the details.",
      duration: "1 month",
      rating: 5,
    },
    {
      title: "Connecting Application for Cricket players",
      client: "Individual Cricket player",
      description: "Created a web application that allows cricket players to connect with each other and book matches and sessions.",
      duration: "Going on",
      rating: "*",
    },
  ]

  const stats = [
    { icon: Users, value: "2+", label: "Happy Clients" },
    { icon: Award, value: "3+", label: "Projects Completed" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Clock, value: "1+", label: "Years Experience" },
  ]

  return (
    <section id="freelance" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 slide-in-up">Freelance Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up" style={{ animationDelay: "0.2s" }}>
            Delivering exceptional AI solutions to clients worldwide, from startups to enterprises.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift glass-effect border-border/20 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="space-y-6 mb-12">
          {freelanceProjects.map((project, index) => (
            <Card key={index} className="hover-lift glass-effect border-border/20 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <div className="flex">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{project.client}</p>
                    <p className="text-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-2">Duration</div>
                    <div className="font-semibold text-primary">{project.duration}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="glow-animation hover-lift focus-ring"
            onClick={() => window.open('https://forms.gle/jUL1S5SJKw4RHhx89', '_blank')}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
