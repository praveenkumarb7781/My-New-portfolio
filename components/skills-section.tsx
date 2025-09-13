"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "GENAI/LLM/RAG", level: 90 },
        { name: "AGENTIC AI", level: 85 },
        { name: "CV/NLP/ML/DL", level: 88 },
      ],
    },
    {
      title: "Development",
      skills: [
        { name: "Java/JavaScript/TypeScript", level: 85 },
        { name: "React/Next.js", level: 80 },
        { name: "Node.js", level: 82 },
        { name: "Docker", level: 75 },
      ],
    },
    {
      title: "Data & Cloud",
      skills: [
        { name: "SQL/NoSQL", level: 88 },
        { name: "AWS/GCP", level: 80 },
        { name: "Data Analysis", level: 90 },
        { name: "MLOps", level: 78 },
      ],
    },
    {
      title: "Analytics & Management",
      skills: [
        { name: "POWER BI", level: 88 },
        { name: "TABLEAU", level: 80 },
        { name: "Adobe Analytics", level: 90 },
        { name: "Product Management", level: 78 },
      ],
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 slide-in-up">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up" style={{ animationDelay: "0.2s" }}>
            A comprehensive toolkit spanning artificial intelligence, software development, and modern cloud
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift glass-effect border-border/20 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-primary text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted/50" 
                      style={{
                        '--progress-background': 'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))'
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
