import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 slide-in-up">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up" style={{ animationDelay: "0.2s" }}>
            I'm an AI Engineer based in Chennai, passionate about creating intelligent systems that solve real-world
            problems. With expertise in machine learning, deep learning, and software development, I bridge the gap
            between cutting-edge research and practical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover-lift glass-effect border-border/20 slide-in-left">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">AI Research</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exploring the frontiers of artificial intelligence, from neural networks to natural language processing
                and computer vision.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover-lift glass-effect border-border/20 slide-in-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Software Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building scalable applications with modern technologies, ensuring robust and maintainable code
                architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover-lift glass-effect border-border/20 slide-in-right" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Constantly pushing boundaries and finding creative solutions to complex challenges in the AI and tech
                landscape.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
