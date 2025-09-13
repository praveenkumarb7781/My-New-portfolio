import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Innovative Conversational BI Tool",
      description:
        "An innovative conversational BI tool that allows users to ask questions and get answers in natural language, using advanced AI models and a custom-built vector database.",
      image: "/Conversational_BI.png",
      tags: ["Python", "GENAI", "Plotly", "React","Graphics walker"],
    },
    {
      title: "Intelligent Assistant for Product-Based Websites (LLM-Driven)",
      description:
        "An AI-powered assistant that simplifies complex financial products with smart discovery, comparisons, and personalized guidance.",
      image: "/smart_assist.png",
      tags: ["Python", "LLM", "RAG", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "Enterprise-Scale RAG Pipeline for Intelligent Q&A and Pitch Deck Generation",
      description:
        "A scalable RAG system that transforms organizational data into instant insights and auto-generated pitch decks",
      image: "/Intelligent_Q&A.png",
      tags: ["Python", "Prompt Engineering", "React", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Enterprise RAG Chatbot",
      description:
        "A smart matchmaking chatbot that retrieves and answers queries from data with precision",
      image: "/Enterprice_RAG.png",
      tags: ["Python", "LLM", "RAG", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "Theme Recommender by using current trends for our own website",
      description:
        "A trend-driven recommender that suggests website themes by blending live analytics with market intelligence.",
      image: "/Theme_Recommender.png",
      tags: ["Python", "Vector DB", "RAG", "Google Analytics"],
      github: "#",
      demo: "#",
    },
    {
      title: "LLM Powered hiring assistant",
      description:
        "An AI hiring copilot that generates job descriptions, builds Boolean searches, and analyzes resumes effortlessly",
      image: "/Scoutigo.png",
      tags: ["Python", "Prompt Engineering", "Boolean strings", "Image classifier"],
      github: "#",
      demo: "#",
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 slide-in-up">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up" style={{ animationDelay: "0.2s" }}>
            A showcase of innovative AI solutions and cutting-edge applications that demonstrate the power of artificial
            intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-lift glass-effect border-border/20 scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button size="sm" variant="secondary" className="glass-effect">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" variant="secondary" className="glass-effect">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs hover:bg-accent/20 transition-colors duration-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
